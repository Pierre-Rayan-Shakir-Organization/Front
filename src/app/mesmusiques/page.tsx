import TableauAffichage from "./components/TableauAffichage";
import TableauAffichage2 from "./components/TableauAffichage2";
import NavbarWithToken from "../layoutComponents/NavbarWithToken";

export default function MesMusiquesPage() {
    return (
        <>
        <NavbarWithToken />
        <div className="p-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
                Mes Musiques
            </h1>
            <TableauAffichage2 />
        </div>
        </>
    );
}
