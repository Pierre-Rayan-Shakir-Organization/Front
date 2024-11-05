import TableauAffichage from "./TableauAffichage";
import NavbarWithToken from "../layoutComponents/NavbarWithToken";

export default function recherchePage() {

    return(
        <>
        <NavbarWithToken />
        <div className="h-auto w-full p-5">

            <TableauAffichage />

        </div>
        </>
    );
}