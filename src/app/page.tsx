import PremiereSection from "./components/premiereSection/PremiereSection";
import DeuxiemeSection from "./components/deuxiemeSection/DeuxiemeSection";
import Navbar from "./layoutComponents/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div>

      <DeuxiemeSection />

      <PremiereSection />

      
    </div>
    </>
  );
}