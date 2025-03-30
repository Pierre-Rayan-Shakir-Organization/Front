import { Children, ReactNode } from "react";

interface CardButtonsProps {
    children : ReactNode
}

export default function CardButtons({children} : CardButtonsProps) {
    return (
        <div className="card-actions justify-end flex-row">
            {children}
        </div>
    );
}