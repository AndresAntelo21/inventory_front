
export const Buscador: React.FC = () => {
    return (
        <div className="fixed gap-2 px-2 top-10 right-10 backdrop-blur-xl z-11 bg-gray-300/70 flex items-center w-90 h-10 border-gray-500 border-2 rounded-full overflow-hidden">
            <img src="/icons/search.svg" alt=""
                className="size-6" />
            <input
                type="text"
                placeholder="Search"
                className="w-full h-full bg-transparente border-none focus:outline-none"
            />
        </div>
    );
};