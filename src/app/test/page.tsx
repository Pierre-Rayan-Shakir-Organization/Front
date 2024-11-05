import Cards from "../components/CardComponents/Cards";
import TestComponent from "./components/TestComponent";
import NavbarWithToken from "../layoutComponents/NavbarWithToken";
import UserCard from "../components/userComponents/UserCard";

export default function TestPage() {

    return (
        <>
        <NavbarWithToken />
        <div className="w-full h-auto flex justify-center items-center gap-10">

            <Cards 
                cardId="id1"
                name_artist="Moby"
                name_song="18"
                url_preview="https://cdn-preview-f.dzcdn.net/stream/c-f24a15c5376c122f2e3ea66076e91ad0-7.mp3"
                url_cover_album_big="https://e-cdns-images.dzcdn.net/images/cover/53ad7684233d8545346b09bd206ebf0d/500x500-000000-80-0-0.jpg"
                audioButton={true}
            />

            <Cards 
                cardId="id2"
                name_artist="th"
                name_song="passage"
                url_preview="https://cdn-preview-f.dzcdn.net/stream/c-f8a36242dfcbde8e06bfb4f5fd37e25d-3.mp3"
                url_cover_album_big="https://e-cdns-images.dzcdn.net/images/cover/4f12be8d50b12199c52184304357dade/500x500-000000-80-0-0.jpg"
                audioButton={true}
            />

            
            <TestComponent />

        </div>

        <UserCard 
        prenom="Médéa"
        nom="Bonjour"
        />

        </>
    );
}