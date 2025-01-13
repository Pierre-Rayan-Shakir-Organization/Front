"use client";

import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { useAuth } from "@/app/contexts/AuthContext.context";
import Cards from "@/app/components/CardComponents/Cards.tsx";
import axios from "axios"

export default function ProfilePage() {
  const [mdb, setMdb] = useState<any>(null);
  const [playlist, setPlaylist] = useState<any[]>([]); // State pour stocker la playlist
  const { token } = useAuth(); // Récupère le token via le AuthContext
  const [isClient, setIsClient] = useState(false);

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
      {/* Section Playlist */}
    <div className="full-page-section grid-border">
    <h4 className="playlist-title">Mes Musiques</h4>
    <div className="playlist-container">
        {playlist.length > 0 ? (
        playlist.map((music, index) => (
            <span key={index} className="playlist-item">
            {music.titre}
            </span>
        ))
        ) : (
        <span className="playlist-item">Aucune musique dans votre playlist</span>
        )}
    </div>
    </div>
    </div>
  );
}
