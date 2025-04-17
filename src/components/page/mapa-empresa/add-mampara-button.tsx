
interface AddMamparaButtonProps {
    isEditing: boolean;
    toggleEditing: () => void;
}
export const AddMamparaButton: React.FC<AddMamparaButtonProps> = ({
    isEditing,
    toggleEditing,
}) => {
    return (
        <button
            className={`fixed rounded-full flex items-center justify-center size-14 ${isEditing ? "bg-red-600" : "bg-amber-500"} right-7 bottom-5 z-10 cursor-pointer transition-all duration-300 ease-in-out`}
            onClick={toggleEditing}
        >
            <img
                src="/icons/plus.svg"
                alt={isEditing ? "Salir del modo edición" : "Editar Mamparas"}
                className={`size-14 ${isEditing ? "rotate-45" : "rotate-0"} transition-transform duration-300`}
            />
        </button>
    );
};