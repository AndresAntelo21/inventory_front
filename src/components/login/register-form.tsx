
export const RegisterForm: React.FC = () => {
    return (
        <form className="flex gap-4 flex-col w-full h-full font-poppins items-center justify-center">
            <h2 className="text-3xl text-center">Crear Cuenta</h2>
            <input
                type="text"
                placeholder="Nombre completo"
                className="border rounded-2xl p-2 w-full"
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                className="border rounded-2xl p-2 w-full"
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="border rounded-2xl p-2 w-full"
            />
            <input
                type="password"
                placeholder="Confirmar contraseña"
                className="border rounded-2xl p-2 w-full"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 py-2 rounded-full hover:bg-blue-600 transition"
            >
                Registrarse
            </button>
        </form>
    );
};