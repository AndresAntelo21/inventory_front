import { useState } from "react";
import { LoginForm } from "@/components/login/login-form";
import { RegisterForm } from "@/components/login/register-form";

export const AuthContainer: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-900">
            <div className="w-[800px] h-[500px] flex rounded-3xl shadow-2xl overflow-hidden bg-white">
                {/* Left side */}
                <div
                    className={`w-1/2 p-8 flex flex-col justify-center items-center transition-all duration-500 ${isLogin ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                >
                    {isLogin ? (
                        <>
                            <h2 className="text-4xl font-bold mb-4 text-center">¡Bienvenido de nuevo!</h2>
                            <p className="text-lg text-center">
                                ¿No tienes una cuenta? Regístrate para comenzar.
                            </p>
                            <button
                                onClick={() => setIsLogin(false)}
                                className="mt-8 px-6 py-2 bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-200 transition"
                            >
                                Crear Cuenta
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-4xl font-bold mb-4">¡Hola!</h2>
                            <p className="text-lg text-center">
                                ¿Ya tienes una cuenta? Inicia sesión para continuar.
                            </p>
                            <button
                                onClick={() => setIsLogin(true)}
                                className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
                            >
                                Iniciar Sesión
                            </button>
                        </>
                    )}
                </div>

                {/* Right side */}
                <div className="w-1/2 p-8 flex items-center justify-center">
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
};