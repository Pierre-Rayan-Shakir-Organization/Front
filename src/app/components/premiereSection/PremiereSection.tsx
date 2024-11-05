import FormulaireInscription from "./FormulaireInscription";
import CarouselPresentation from "./CarouselPresentation";

export default function PremiereSection() {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center gap-40 p-10">
            <FormulaireInscription />
            <CarouselPresentation />
        </div>
    );
}