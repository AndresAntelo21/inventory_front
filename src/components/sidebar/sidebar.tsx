// import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { SidebarItem } from "./sidebar-item";
export const Sidebar: React.FC = () => {
    const location = useLocation();

    if (location.pathname === "/login") {
        return null; // No renderizar el sidebar en la ruta de login
    }
    return (
        <div className="fixed top-0 left-0 h-screen bg-black border-r-1 flex flex-col overflow-hidden hover:w-60 w-12 transition-all duration-300 ease-in-out whitespace-nowrap text-ellipsis z-10">
            <div className="sticky top-0 bg-black/40 backdrop-blur-md ">
                <div className="flex flex-row items-center gap-3 pl-2 py-4">
                    <img src="/logo/crafting-table.svg" alt="logo Systock" className="size-8" />
                    <h1 className="text-center text-2xl font-bold tracking-wider">Systock</h1>
                </div>
                <div className="bg-white w-full h-1"></div>
            </div>
            <div className="pt-4 flex flex-col gap-4 overflow-y-auto pb-30 sidebar-scroll line-clamp-1">
                <SidebarItem
                    icon="/sidebar-icons/home.svg"
                    text="Inicio"
                    href="/home"
                />
                <SidebarItem
                    icon="/sidebar-icons/dashboard.svg"
                    text="Dashboard"
                    href="/dashboard"
                />
                <SidebarItem
                    icon="/sidebar-icons/desktop.svg"
                    text="Operaciones"
                    href="/operacion"
                />
                <SidebarItem
                    icon="/sidebar-icons/admin.svg"
                    text="Administrativo"
                    href="/administrativo"
                />
                <SidebarItem
                    icon="/sidebar-icons/phone.svg"
                    text="Telefonos"
                    href="/Telefonos"
                />
                <SidebarItem
                    icon="/sidebar-icons/site.svg"
                    text="Site"
                    href="/Site"
                />
                <SidebarItem
                    icon="/sidebar-icons/salas.svg"
                    text="Salas"
                    href="/Salas"
                />
                <SidebarItem
                    icon="/sidebar-icons/print.svg"
                    text="Impresoras"
                    href="/Impresoras"
                />
                <SidebarItem
                    icon="/sidebar-icons/earphones.svg"
                    text="Diademas"
                    href="/Diademas"
                />
                <SidebarItem
                    icon="/sidebar-icons/chair.svg"
                    text="Sillas"
                    href="/Sillas"
                />
                <SidebarItem
                    icon="/sidebar-icons/cam.svg"
                    text="Camaras"
                    href="/Camaras"
                />
                <SidebarItem
                    icon="/sidebar-icons/locker.svg"
                    text="Lockers"
                    href="/Lockers"
                />
                <SidebarItem
                    icon="/sidebar-icons/doesnt-work.svg"
                    text="No sirven"
                    href="/No-sirven"
                />
                <SidebarItem
                    icon="/sidebar-icons/warehouse.svg"
                    text="Bodega"
                    href="/Bodega"
                />
                <div className="w-full h-17 bg-black/30 backdrop-blur-md absolute bottom-0 ">
                    <div className="w-full h-1 bg-white"></div>
                    <div className="pl-1 text-2xl flex gap-3 items-center pt-4">
                        <img src="/icon-user/user.jpg" alt="Icono de home" className="size-9 rounded-full" />
                        <span className="text-base">Andres Antelo</span>
                    </div>
                </div>
            </div>
        </div>
    );
};