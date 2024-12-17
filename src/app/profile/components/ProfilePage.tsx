"use client";
import React, { useEffect, useState } from "react";
import "./profilePage.css";

export default function ProfilePage() {
  const [mdb, setMdb] = useState<any>(null);

  useEffect(() => {
    import("mdb-react-ui-kit").then((module) => setMdb(module));
  }, []);

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
    photoUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
    stats: { photos: 253, followers: 1026, following: 478 },
    bio: ["Web Developer", "Lives in New York", "Photographer"],
  };

  const top5Music = [
    { title: "Ocean Eyes", artist: "Billie Eilish", cover: "https://via.placeholder.com/150" },
    { title: "Blinding Lights", artist: "The Weeknd", cover: "https://via.placeholder.com/150" },
    { title: "Shivers", artist: "Ed Sheeran", cover: "https://via.placeholder.com/150" },
    { title: "Peaches", artist: "Justin Bieber", cover: "https://via.placeholder.com/150" },
    { title: "Stay", artist: "The Kid LAROI", cover: "https://via.placeholder.com/150" },
  ];

  const handleEditProfile = () => {
    alert("Edit profile clicked!");
  };

  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row header-bg">
              <div className="ms-4 mt-5 d-flex flex-column profile-img-wrapper">
  {/* Bouton Edit profile déplacé au-dessus */}
  <MDBBtn
    outline
    color="dark"
    onClick={handleEditProfile}
    className="mb-3 align-self-center"
  >
    Edit profile
  </MDBBtn>

  {/* Image du profil */}
  <MDBCardImage
    src={user.photoUrl}
    alt="Profile picture of Andy Horwitz"
    className="profile-img"
    fluid
  />

  {/* Nom et Ville déplacés sous l'image */}
  <div className="text-center mt-2">
    <MDBTypography tag="h5" className="mb-0">
      {user.name}
    </MDBTypography>
    <MDBCardText className="small text-muted">{user.location}</MDBCardText>
  </div>
</div>
              </div>

              <MDBCardBody className="text-black p-4">
              <div className="mb-5 about-section">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4 about-bg d-flex flex-wrap">
                    {user.bio.map((line, index) => (
                        <span className="font-italic me-3" key={index}>
                            {line}
                        </span>
                ))}
                </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-center mb-4">Top 5 Music</h4>
                  <div className="d-flex justify-content-center flex-wrap gap-4">
                    {top5Music.map((music, index) => (
                        <div key={index} className="text-center">
                        <MDBCardImage
                            src={music.cover}
                            alt={music.title}
                            className="rounded-3 mb-2"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                        <MDBCardText className="small mb-0">{music.title}</MDBCardText>
                        <MDBCardText className="text-muted small">{music.artist}</MDBCardText>
                        </div>
                    ))}
                    </div>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
