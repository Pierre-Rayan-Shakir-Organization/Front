import { ReactNode } from "react";

interface RandomBlockCardProps {
    children : ReactNode
}

export default function RandomBlockCard({children} : RandomBlockCardProps) {
    return (
        <div className="w-72">
            {children}
        </div>
    );
}