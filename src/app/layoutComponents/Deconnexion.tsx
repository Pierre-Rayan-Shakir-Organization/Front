'use client';
import { useAuth } from "../contexts/AuthContext.context.tsx";

export default function Deconnexion() {

    const {logout} = useAuth();

    return (
        <li onClick={logout}><a>Deconnexion</a></li>
    );

}