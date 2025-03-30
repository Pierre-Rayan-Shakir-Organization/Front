import FormulaireInscription from "./FormulaireInscription.tsx";
import CarouselPresentation from "./CarouselPresentation.tsx";

export default function PremiereSection() {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center gap-40 p-10">
            <FormulaireInscription />
            <CarouselPresentation />
        </div>
    );
}