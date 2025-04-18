// import { FaHome } from "react-icons/fa";
import { SidebarItem } from "./sidebar-item";
export const Sidebar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 h-screen bg-black border-r-1 flex flex-col overflow-hidden hover:w-60 w-12 transition-all duration-300 ease-in-out whitespace-nowrap text-ellipsis z-10">
            <div className="sticky top-0 bg-black/40 backdrop-blur-md ">
                <div className="flex flex-row items-center gap-3 pl-2 py-4">
                    <img src="/logo/image.png" alt="logo Systock" className="size-10" />
                    <h1 className="text-center text-2xl font-semibold tracking-wider text-white">Systock</h1>
                </div>
                <div className="bg-white w-full h-[1px]"></div>
            </div>
            <div className="pt-4 flex flex-col gap-3 overflow-y-auto pb-30 sidebar-scroll line-clamp-1">
                <SidebarItem
                    icon="/sidebar-icons/dashboard.svg"
                    text="Dashboard"
                    href="/dashboard"
                />
                <SidebarItem
                    icon="/sidebar-icons/map.svg"
                    text="Mapa empresa"
                    href="/mapa-empresa"
                />
                <SidebarItem
                    icon="/sidebar-icons/desktop.svg"
                    text="Operaciones"
                    href="/operaciones"
                />
                <SidebarItem
                    icon="/sidebar-icons/admin.svg"
                    text="Administrativo"
                    href="/administrativo"
                />
                <SidebarItem
                    icon="/sidebar-icons/phone.svg"
                    text="Telefonos"
                    href="/telefonos"
                />
                <SidebarItem
                    icon="/sidebar-icons/site.svg"
                    text="Site"
                    href="/site"
                />
                <SidebarItem
                    icon="/sidebar-icons/salas.svg"
                    text="Salas"
                    href="/salas"
                />
                <SidebarItem
                    icon="/sidebar-icons/print.svg"
                    text="Impresoras"
                    href="/impresoras"
                />
                <SidebarItem
                    icon="/sidebar-icons/earphones.svg"
                    text="Diademas"
                    href="/diademas"
                />
                <SidebarItem
                    icon="/sidebar-icons/chair.svg"
                    text="Sillas"
                    href="/sillas"
                />
                <SidebarItem
                    icon="/sidebar-icons/cam.svg"
                    text="Camaras"
                    href="/camaras"
                />
                <SidebarItem
                    icon="/sidebar-icons/locker.svg"
                    text="Lockers"
                    href="/lockers"
                />
                <SidebarItem
                    icon="/sidebar-icons/wrong.svg"
                    text="No sirven"
                    href="/no-sirven"
                />
                <SidebarItem
                    icon="/sidebar-icons/warehouse.svg"
                    text="Bodega"
                    href="/bodega"
                />
                <div className="w-full h-17 bg-black/30 backdrop-blur-md absolute bottom-0 ">
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="pl-1 text-2xl flex gap-3 items-center pt-4">
                        <img src="/icon-user/icon.png" alt="Icono de home" className="size-9 rounded-full" />
                        <span className="text-base text-white">Andres Antelo</span>
                    </div>
                </div>
            </div>
        </div>
    );
};