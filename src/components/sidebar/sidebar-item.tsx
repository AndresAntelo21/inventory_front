import React from "react";

interface SidebarItemProps {
    icon: string; // Ruta de la imagen del ícono
    text: string; // Texto que se mostrará
    href: string; // URL a la que redirigirá
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, href }) => {
    return (
        <a
            href={href}
            className="pl-2 text-2xl flex gap-3 items-center"
        >
            <img src={icon} alt={`Icono de ${text}`} className="size-7" />
            <span className="text-base whitespace-nowrap">{text}</span>
        </a>
    );
};