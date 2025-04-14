export const LoginForm: React.FC = () => {
    return (
        <form className="flex flex-col gap-4 w-full max-w-sm">
            <h2 className="text-3xl font-bold text-center mb-4">Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
                Entrar
            </button>
        </form>
    );
};