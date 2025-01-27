"use client";

import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { useAuth } from "@/app/contexts/AuthContext.context.tsx";
import Cards from "@/app/components/CardComponents/Cards.tsx";

export default function ProfilePage() {
  const [mdb, setMdb] = useState<any>(null);
  const [playlist, setPlaylist] = useState<any[]>([]); // State pour stocker la playlist
  const { token } = useAuth(); // Récupère le token via le AuthContext
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Stocke le terme de recherche

  useEffect(() => {
    import("mdb-react-ui-kit").then((module) => setMdb(module));
  }, []);

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

  useEffect(() => {
    setIsClient(true); // On indique que le client est prêt
  }, []);

  useEffect(() => {
    if (isClient && token) {
      fetchPlaylist();
    }
  }, [isClient, token]);

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

  const user = {
    name: "Andy Horwitz",
    location: "New York",
    photoUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
    bio: ["Web Developer", "Lives in New York", "Photographer"],
  };

  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100 grid-border main-container">
        {/* Section principale */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row header-bg grid-border">
                <div className="ms-4 mt-5 d-flex flex-column profile-img-wrapper">
                  <MDBBtn outline color="dark" className="mb-3 align-self-center">
                    Edit profile
                  </MDBBtn>
                  <MDBCardImage
                    src={user.photoUrl}
                    alt="Profile picture"
                    className="profile-img"
                    fluid
                  />
                  <div className="text-center mt-2">
                    <MDBTypography tag="h5" className="mb-0">
                      {user.name}
                    </MDBTypography>
                    <MDBCardText className="small text-muted">
                      {user.location}
                    </MDBCardText>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <MDBCardBody className="text-black p-4 grid-border">
                <div className="mb-5 about-section grid-border">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4 about-bg d-flex flex-wrap">
                    {user.bio.map((line, index) => (
                      <span className="font-italic me-3" key={index}>
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top 5 Music Section */}
                <div className="mb-4 grid-border top-five-music">
                  <h4 className="text-center mb-4">Top FiveMusic</h4>
                  <div className="d-flex justify-content-center flex-wrap gap-4">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <div
                          key={index}
                          className="empty-card d-flex align-items-center justify-content-center grid-border"
                        >
                          <p className="empty-text">Vide</p>
                        </div>
                      ))}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Section Playlist */}
      <div className="full-page-section grid-border bg-gray-800 flex items-start p-4">
        {/* Conteneur principal de la section Playlist */}
        <div className="playlist-content flex w-full">
          {/* Section pour le titre */}
          <div className="playlist-title-section w-1/4 flex flex-col gap-4">
            <h4 className="playlist-title text-white text-lg">Ma Playlist</h4>

            {/* Barre de recherche */}
            <input
              type="text"
              placeholder="Rechercher une musique..."
              className="search-bar p-2 rounded-lg bg-gray-800 text-white"
              onChange={(e) => setSearchTerm(e.target.value)} // Met à jour le terme de recherche
              value={searchTerm} // Liaison de la valeur au state
            />
          </div>

          {/* Section pour les musiques */}
          <div className="playlist-music-section w-3/4 flex flex-wrap gap-4">
            {playlist.length > 0 ? (
              playlist
                .filter((music) =>
                  music.titre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrage dynamique
                )
                .map((music, index) => (
                  <Cards
                    key={index}
                    cardId={music.id}
                    name_artist={music.artiste}
                    name_song={music.titre}
                    url_preview={""} // Pas nécessaire ici
                    url_cover_album_big={music.url_cover_album_big || ""}
                    withBlock={true} // Affichage simple en mode "block"
                    audioButton={false} // Pas de bouton d'écoute
                    deleteButton={false} // Pas de bouton de suppression
                    addButton={false} // Pas de bouton d'ajout
                    size="w-[150px] h-[200px]" // Taille réduite des cartes
                    containerStyle="bg-blue-900 rounded-2xl p-2 inline-block" // Style personnalisé
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
