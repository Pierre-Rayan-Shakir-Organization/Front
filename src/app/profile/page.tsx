import React from "react";
import ProfilePage from "./components/ProfilePage.tsx";
import NavbarWithToken from "../layoutComponents/NavbarWithToken.tsx";

export default function Profile() {
    return (
        <>
            <NavbarWithToken />
            <ProfilePage />
        </>
    );
}
