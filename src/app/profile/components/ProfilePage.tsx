"use client";
import React, { useEffect, useState } from "react";
import "./profilePage.css";
import Cards from "@/app/components/CardComponents/Cards.tsx";

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
    {
      cardId: "1",
      name_artist: "Billie Eilish",
      name_song: "Ocean Eyes",
      url_preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      url_cover_album_big: "https://via.placeholder.com/150",
      prenom: "Andy",
      nom: "Horwitz",
    },
    {
      cardId: "2",
      name_artist: "The Weeknd",
      name_song: "Blinding Lights",
      url_preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      url_cover_album_big: "https://via.placeholder.com/150",
      prenom: "Andy",
      nom: "Horwitz",
    },
    {
      cardId: "3",
      name_artist: "Ed Sheeran",
      name_song: "Shivers",
      url_preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      url_cover_album_big: "https://via.placeholder.com/150",
      prenom: "Andy",
      nom: "Horwitz",
    },
    {
      cardId: "4",
      name_artist: "Justin Bieber",
      name_song: "Peaches",
      url_preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      url_cover_album_big: "https://via.placeholder.com/150",
      prenom: "Andy",
      nom: "Horwitz",
    },
    {
      cardId: "5",
      name_artist: "The Kid LAROI",
      name_song: "Stay",
      url_preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      url_cover_album_big: "https://via.placeholder.com/150",
      prenom: "Andy",
      nom: "Horwitz",
    },
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
                  <MDBBtn
                    outline
                    color="dark"
                    onClick={handleEditProfile}
                    className="mb-3 align-self-center"
                  >
                    Edit profile
                  </MDBBtn>
                  <MDBCardImage
                    src={user.photoUrl}
                    alt="Profile picture of Andy Horwitz"
                    className="profile-img"
                    fluid
                  />
                  <div className="text-center mt-2">
                    <MDBTypography tag="h5" className="mb-0">
                      {user.name}
                    </MDBTypography>
                    <MDBCardText className="small text-muted">{user.location}</MDBCardText>
                  </div>
                </div>
              </div>

              <MDBCardBody className="text-black p-4">
                {/* About Section */}
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

                {/* Top 5 Music Section */}
                <div className="mb-4">
                  <h4 className="text-center mb-4">Top FiveMusic</h4>
                  <div className="d-flex justify-content-center flex-wrap gap-4">
                    {top5Music.map((music) => (
                      <Cards
                        key={music.cardId}
                        cardId={music.cardId}
                        name_artist={music.name_artist}
                        name_song={music.name_song}
                        url_preview={music.url_preview}
                        url_cover_album_big={music.url_cover_album_big}
                        prenom={music.prenom}
                        nom={music.nom}
                        audioButton={true}
                        addButton={false}
                        deleteButton={false}
                        size="w-50 h-55"
                        withBlock={true}
                      />
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
