import React from "react";

interface SidebarItemProps {
    icon: string;
    text: string;
    href: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, href }) => {
    return (
        <a
            href={href}
            className="pl-2 text-2xl flex gap-3 py-1 items-center hover:bg-blue-950/60 hover:rounded-lg transition-all duration-300 ease-in-out text-white/80 hover:text-white"
        >
            <img src={icon} alt={`Icono de ${text}`} className="size-7" />
            <span className="text-base whitespace-nowrap">{text}</span>
        </a>
    );
};