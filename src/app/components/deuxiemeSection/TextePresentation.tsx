import Cards from "../CardComponents/Cards.tsx";
import axios from 'axios';

export const fetchDataDeezer = async (artist: string, track: string) => {
    // Récupération des données de la musique dans le serveur d'API de Deeezer
    const query = `artist:"${artist}" track:"${track}"`;
    const url: string = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
    try {
        const response = await axios.get(url);
        const data = response.data.data[0];
        return {
            name_artist: data.artist.name,
            name_song: data.title,
            url_preview: data.preview,
            url_cover_album_big: data.album.cover_big,
            user_prenom : data.prenom,
            user_nom : data.nom
        };
    } 
    catch (error) {console.log(error);}
}

const fetchData = async () => {
    // Récupération des données dans mon serveur d'API
    const url = 'http://localhost:3000/getRandomMusic';

    try {
        const response = await axios.get(url);
        return response.data.musique;
    } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        throw new Error("Failed to fetch music data");
    }
}

export default async function TextePresentation() {
    let musique;

    // Assurer que fetchData est terminé avant de continuer
    try {
        musique = await fetchData();
    } catch (error) {
        return <div></div>;
    }

    // Vérification si fetchData a bien renvoyé des données valides
    if (!musique || !musique.artiste || !musique.titre) {
        return <div>Aucune musique disponible.</div>;
    }

    // Appel de fetchDataDeezer avec les données validées de fetchData
    let musiqueDeezer;
    try {
        musiqueDeezer = await fetchDataDeezer(musique.artiste, musique.titre);
    } catch (error) {
        return <div>Erreur lors de la récupération des données Deezer.</div>;
    }

    console.log(musique);
    if (musiqueDeezer) console.log(musiqueDeezer.name_song);
    else return null;

    return (
        <div className="p-20 hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <Cards 
                    cardId={musique.id}
                    name_artist={musique.artiste}
                    name_song={musique.titre}
                    url_preview={musique.url_preview}
                    url_cover_album_big={musique.url_cover_album_big}
                    prenom={musique.prenom}
                    nom={musique.nom}
                    audioButton={true}
                    size="w-72"
                />
                <div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
                        Qu'est-ce que FiveMusics ?
                    </h2>
                    <p className="py-6 text-lg">
                        <span className="text-pink-500 font-semibold">FiveMusics</span> est une plateforme innovante qui vous permet de partager et découvrir de la musique d'une manière unique.
                        Avec <span className="text-purple-500 font-semibold">FiveMusics</span>, vous pouvez :
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg">
                        <li><span className="text-purple-500 font-semibold">Ajouter 5 musiques</span> que vous adorez et les partager avec vos amis.</li>
                        <li><span className="text-pink-500 font-semibold">Voir les musiques de vos amis</span> et explorer leurs goûts musicaux.</li>
                        <li><span className="text-purple-500 font-semibold">Rencontrer des gens</span> qui partagent les mêmes goûts musicaux que vous, et élargir votre cercle social.</li>
                    </ul>
                    <p className="py-6 text-lg">
                        Rejoignez-nous dans cette aventure musicale et connectez-vous avec des personnes qui vibrent au même rythme que vous !
                    </p>
                    <a href="/connexion"><button className="btn btn-primary">Commencez maintenant</button></a>
                </div>
            </div>
        </div>
    );
}
