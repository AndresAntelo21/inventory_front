// import { Sidebar } from "@/components/sidebar/sidebar";
export const Error404: React.FC = () => {
    return (
        <div className="w-full h-full font-poppins flex flex-col gap-10 items-center justify-center">
            <div className="flex items-center gap-4 text-3xl">
                <span>404</span>
                <div className="h-10 w-[1px] bg-white"></div>
                <span>Page not found</span>
            </div>
            <a href="/" className="bg-blue-500 rounded-2xl px-15 py-2 hover:bg-blue-600 transition-all ease-in-out">Volver</a>
        </div>
    );
};