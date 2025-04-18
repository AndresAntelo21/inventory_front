// import { Sidebar } from "@/components/sidebar/sidebar";
export const Error404: React.FC = () => {
    return (
        <div className="w-screen h-screen font-poppins flex flex-col gap-10 items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4 text-3xl text-white">
                <h1>Pareces perdido</h1>
                <img src="/page-not-found/404.png" alt="Hollow Knight lost" className="w-96" />
            </div>
            <a href="/" className="bg-blue-500 rounded-2xl px-15 py-2 hover:bg-blue-600 transition-all ease-in-out">Volver</a>
        </div>
    );
};