'use client';

import { useAuth } from "@/app/contexts/AuthContext.context";

export default function TestComponent() {
    const {token} = useAuth();

    return (

        <>
        {
            token 
            ? <h1>Token existe bien dans le localstorage</h1> 
            : <h1>Pas de token dans le localstorage</h1>
        }
        </>

    );

}