type sexe = 'M' | 'F';

interface UserCard {
    id : number,
    prenom : string,
    nom : string,
    email : string,
    sexe : sexe
}

export default function UserCard({prenom, nom} : Pick<UserCard, "prenom" | "nom">) {

    return (
        <div className="flex flex-col w-[170px] h-full">

            <div className="flex flex-row justify-center items-center gap-1">

                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">UI</span>
                    </div>
                </div>

                <div>
                    <p>{prenom}  {nom}</p>
                </div>

            </div>

            <div>
                <button className="btn btn-xs btn-outline btn-accent">Ajouter</button>
            </div>

        </div>
    );

}