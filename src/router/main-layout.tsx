import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
    return (
        <div className="flex w-screen h-screen">
            {/* Sidebar */}
            <Sidebar />
            {/* Contenido principal */}
            <div className="flex-1 overflow-auto pl-12">
                <Outlet />
            </div>
        </div>
    );
};