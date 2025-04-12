// import { FaHome } from "react-icons/fa";

export const Sidebar: React.FC = () => {
    return (
        <div className=" relative w-60 h-screen bg-black border-r-1 flex flex-col overflow-hidden ">
            <div className="sticky top-0 bg-black/40 backdrop-blur-md ">
                <div className="flex flex-row items-center gap-2 pl-2 py-4">
                    <img src="/logo/crafting-table.svg" alt="logo Systock" className="size-10" />
                    <h1 className="text-center text-2xl font-bold tracking-wider">Systock</h1>
                </div>
                <div className="bg-white w-full h-1"></div>
            </div>
            <div className="pt-10 flex flex-col gap-4 overflow-y-auto pb-30 sidebar-scroll">
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/home.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Inicio</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/dashboard.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Dashboard</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/desktop.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Operacion</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/admin.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Administrativo</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/phone.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Telefonos</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/site.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Site</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/salas.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Salas</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/print.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Impresora</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/earphones.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Diademas</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/chair.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Sillas</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/cam.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Camaras</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/locker.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Lockers</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/doesnt-work.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">No sirven</span>
                </div>
                <div className=" pl-2 text-2xl flex gap-2 items-center">
                    <img src="/sidebar-icons/warehouse.svg" alt="Icono de home" className="size-7" />
                    <span className="text-base">Bodega</span>
                </div>
                <div className="w-full h-17 bg-black/30 backdrop-blur-md absolute bottom-0">
                    <div className="w-full h-1 bg-white"></div>
                    <div className="flex items-center gap-2 p-2 h-full">
                        <div className="size-10 bg-blue-800 rounded-full overflow-hidden">
                            <img src="/icon-user/user.jpg" alt="foto de usuario test" className="w-full h-full" />
                        </div>
                        <span className="text-sm">Andres Antelo Figueroa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};