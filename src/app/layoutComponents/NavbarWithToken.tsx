"use client";
import Deconnexion from "./Deconnexion";
import React, { useState, useEffect } from "react";

export default function NavbarWithToken() {
    const [theme, setTheme] = useState<string>(() =>
        typeof window !== "undefined" && localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="navbar bg-base-300">
            {/* Début Navbar */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent" href="/">FiveMusics</a>
            </div>
            {/* Centre Navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/shuffle">Discover</a></li>
                    <li><a href="/mesmusiques">Mes musiques</a></li>
                    <li><a href="/recherche">Rechercher des musiques</a></li>
                    <Deconnexion />
                </ul>
            </div>
            {/* Fin Navbar */}

            {/* Bascule de Thème */}
            <div className="navbar-end">
                <button onClick={toggleTheme} className="btn btn-outline">
                    {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
                </button>
            </div>
        </div>
    );
}
