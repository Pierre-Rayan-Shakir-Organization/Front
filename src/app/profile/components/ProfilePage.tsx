"use client";

import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { useAuth } from "@/app/contexts/AuthContext.context.tsx";
import Cards from "@/app/components/CardComponents/Cards.tsx";
import {jwtDecode} from "jwt-decode";



export default function ProfilePage() {
  const [mdb, setMdb] = useState<any>(null);
  const [playlist, setPlaylist] = useState<any[]>([]);
  const { token } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [topFive, setTopFive] = useState<(any | null)[]>(Array(5).fill(null));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    import("mdb-react-ui-kit").then((module) => setMdb(module));
  }, []);
  // Nouveaux états pour l'utilisateur
  const [user, setUser] = useState<any>(null); // Pour stocker les données utilisateur
  const [isEditing, setIsEditing] = useState(false); // Pour gérer le mode édition
  const [updatedDescription, setUpdatedDescription] = useState(""); // Description mise à jour

  
  
  const fetchUserInfo = async () => {
    try {
      if (!token) {
        throw new Error("Token manquant.");
      }
  
      const userId = getUserIdFromToken(token);
      if (!userId) {
        throw new Error("Impossible de récupérer l'ID utilisateur.");
      }
  
      const response = await fetch(`http://localhost:3000/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des infos utilisateur.");
      }
  
      const data = await response.json();
      console.log("Données utilisateur récupérées :", data); // 🔍 Affiche les données reçues

      setUser(data.profil); // Vérifiez que 'data.profil' contient les bonnes infos
      console.log("Utilisateur récupéré :", data.profil);
    } catch (error) {
      console.error(error);
    }
  };
  
   // Fonction pour sauvegarder la description mise à jour
   const saveDescription = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: updatedDescription }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la sauvegarde de la description.");
      }

      setUser((prevUser: any) => ({
        ...prevUser,
        description: updatedDescription,
      })); // Met à jour la description locale
      setIsEditing(false); // Quitte le mode édition
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la description :", error);
    }
  };

  const handleUploadPhoto = async (file: File) => {
    if (!file || !token) {
        console.error("🔴 Erreur: Aucun fichier ou token trouvé !");
        return;
    }

    console.log("🟢 Token envoyé :", token);

    const formData = new FormData();
    formData.append("photo_profil", file);

    try {
        const response = await fetch("http://localhost:3000/profile/photo", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        });

        if (!response.ok) {
            console.error("🔴 Erreur réponse serveur :", response.status, response.statusText);
            throw new Error("Erreur lors de l'upload de la photo.");
        }

        const data = await response.json();
        console.log("🟢 Réponse du serveur après upload :", data);

        // ✅ Correction : Assurer un chemin absolu
        const fullPhotoUrl = `http://localhost:3000${data.photoUrl}`;

        setUser((prevUser: any) => ({
            ...prevUser,
            photo_profil: fullPhotoUrl, // ✅ Mettre l'URL absolue
        }));
    } catch (error) {
        console.error("🔴 Erreur lors de l'upload :", error);
    }
};




  
  const sendTopFiveToBackend = async () => {
    try {
        console.log("Données envoyées au backend :", { topFive });

        const response = await fetch("http://localhost:3000/saveTopFive", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ topFive }),
        });

        if (!response.ok) {
            throw new Error("Erreur lors de l'envoi du Top 5.");
        }

        const data = await response.json();
        setErrorMessage("Top 5 enregistré avec succès.");
        setTimeout(() => setErrorMessage(null), 3000);
    } catch (error) {
        console.error("Erreur lors de l'envoi du Top 5 :", error);
        setErrorMessage("Impossible d'enregistrer le Top 5.");
        setTimeout(() => setErrorMessage(null), 3000);
    }
};


  // Gérer le drop des musiques sur un emplacement vide
  const handleDrop = (index: number, cardData: any) => {
    setTopFive((prevTopFive) => {
      const newTopFive = [...prevTopFive];
      newTopFive[index] = cardData;
      return newTopFive;
    });
  };

  // Supprimer une musique du Top Five (via la croix)
  const removeFromTopFive = (index: number) => {
    setTopFive((prevTopFive) => {
      const newTopFive = [...prevTopFive];
      newTopFive[index] = null; // Réinitialise l'emplacement
      return newTopFive;
    });
  };

  // Vider tous les emplacements du Top Five
  const clearTopFive = () => {
    setTopFive(Array(5).fill(null)); // Réinitialise tous les emplacements
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && token) {
      fetchPlaylist();
      fetchUserInfo();
    }
  }, [isClient, token]);

  

  // Fonction pour récupérer la playlist depuis l'API
  const fetchPlaylist = async () => {
    try {
      const response = await fetch("http://localhost:3000/getMusic", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des musiques");
      }
      const data = await response.json();
      setPlaylist(data.musiques);
    } catch (error) {
      console.error("Erreur lors de la récupération de la playlist :", error);
    }
  };
  function getUserIdFromToken(token: string): number | null {
    try {
      const decoded: any = jwtDecode(token);
      return decoded?.id || null; // Assure-toi que le payload du JWT contient l'ID utilisateur
    } catch (error) {
      console.error("Erreur lors du décodage du token :", error);
      return null;
    }
  }

  if (!mdb) return <p>Loading...</p>;

  const {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
  } = mdb;

 

  return (
    <div className="gradient-custom-2">
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

<MDBContainer className="py-5 h-100 grid-border main-container">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row header-bg grid-border">
                <div className="ms-4 mt-5 d-flex flex-column profile-img-wrapper">
                  <MDBBtn
                    outline
                    color="dark"
                    className="mb-3 align-self-center"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Annuler" : "Modifier"}
                  </MDBBtn>
                  <div className="text-center mt-3" style={{ position: "relative" }}>

    {/* ✅ Image cliquable pour modifier la photo de profil */}
    <label htmlFor="fileInput" className="cursor-pointer" style={{
            display: "block",  // ✅ Le label prend toute la place
            width: "fit-content",  // ✅ Ajuste à la taille de l'image
            margin: "0 auto",  // ✅ Centre l'élément
            position: "relative",  // ✅ Pour éviter d'être caché
            zIndex: 10  // ✅ S'assure que c'est au-dessus
        }}>
    <MDBCardImage
    src={user?.photo_profil 
        ? (user.photo_profil.startsWith("http") ? user.photo_profil : `http://localhost:3000${user.photo_profil}`)
        : "/DefautProfil.png"} // ✅ Utilise une image par défaut si `photo_profil` est null
    alt="Profile picture"
    className="profile-img"
    fluid
    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).src = "/DefautProfil.png"; // ✅ Fallback si l'image ne charge pas
    }} style={{
      width: "150px", // ✅ Taille ajustable
      height: "150px",
      borderRadius: "50%",  // ✅ Cercle pour un avatar
      objectFit: "cover",  // ✅ S'assure que l'image garde une bonne forme
      cursor: "pointer",  // ✅ Indique que c'est cliquable
      position: "relative", // ✅ Évite d'être sous un autre élément
      zIndex: 10 // ✅ Passe au-dessus des autres éléments
  }}
/>
    </label>

    {/* ✅ Input caché pour l'upload */}
    <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={(e) => {
            const file = e.target.files?.[0] || null;
            if (file) {
                setSelectedFile(file); // ✅ Mettre à jour l'état
                handleUploadPhoto(file); // ✅ Lancer l'upload après sélection
            }
        }}
        style={{ display: "none" }}
    />
</div>

                  
                  <div className="text-center mt-2">
                    <MDBTypography tag="h5" className="mb-0">
                      {user?.prenom} {user?.nom}
                    </MDBTypography>
                    
                  </div>
                </div>
              </div>

              {/* About Section */}
              <MDBCardBody className="text-black p-4 grid-border">
                <div className="mb-5 about-section grid-border">
                  <p className="lead fw-normal mb-1">À propos</p>
                  <div className="p-4 about-bg d-flex flex-wrap">
                  {isEditing ? (
                    <textarea
                    className="edit-description"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                  ) : (
                    <span>{user?.description || "Aucune description disponible"}</span>
                  )}
                  </div>
                  {isEditing && (
                    <div className="text-center mt-3">
                      <MDBBtn onClick={saveDescription}>Sauvegarder</MDBBtn>
                    </div>
                  )}
                </div>

                {/* Top 5 Music Section */}
                <div className="mb-4 grid-border top-five-music">
                  <h4 className="text-center mb-4">Top FiveMusic</h4>
                  <div className="d-flex justify-content-center flex-wrap gap-4">
                  {topFive.map((music, index) => (
  <div
    key={index}
    className="empty-card d-flex align-items-center justify-content-center grid-border"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      e.preventDefault();
      const cardData = JSON.parse(e.dataTransfer.getData("cardData"));
      handleDrop(index, cardData);
    }}
  >
    {music ? (
      <>
        <button
          className="remove-button"
          onClick={() => removeFromTopFive(index)}
        >
          ✖
        </button>
        <Cards
          key={music.id}
          cardId={music.id}
          name_artist={music.artiste}
          name_song={music.titre}
          url_preview={""}
          url_cover_album_big={music.url_cover_album_big || ""}
          size="w-[100px] h-[150px]"
        />
      </>
    ) : (
      <p className="empty-text">Vide</p>
    )}
  </div>
))} 
                  </div>

                  {/* Bouton pour vider le Top 5 */}
                  <div className="text-center mt-4">
                      <button className="clear-button" onClick={clearTopFive}>
                          Vider le Top 5
                      </button>
                      <button
                          className="send-button"
                          onClick={sendTopFiveToBackend}
                          style={{ marginLeft: '10px' }} // Ajoute un espacement entre les boutons
                      >
                          Envoyer
                      </button>
                  </div>
                </div>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Section Playlist */}
      <div className="full-page-section grid-border bg-gray-800 flex items-start p-4">
        <div className="playlist-content flex w-full">
          <div className="playlist-title-section w-1/4 flex flex-col gap-4">
            <h4 className="playlist-title text-white text-lg">Ma Playlist</h4>
            <input
              type="text"
              placeholder="Rechercher une musique..."
              className="search-bar p-2 rounded-lg bg-gray-800 text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>

          <div className="playlist-music-section w-3/4 flex flex-wrap gap-4">
            {playlist.length > 0 ? (
              playlist
                .filter((music) =>
                  music.titre.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((music, index) => (
                  <Cards
                    key={index}
                    cardId={music.id}
                    name_artist={music.artiste}
                    name_song={music.titre}
                    url_preview={""}
                    url_cover_album_big={music.url_cover_album_big || ""}
                    withBlock={true}
                    audioButton={false}
                    deleteButton={false}
                    addButton={false}
                    size="w-[150px] h-[200px]"
                    containerStyle="bg-blue-900 rounded-2xl p-2 inline-block"
                  />
                ))
            ) : (
              <span className="playlist-item text-white">
                Aucune musique dans votre playlist
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
