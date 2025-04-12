import { useState } from "react";
import { LoginForm } from "@/components/login/login-form";
import { RegisterForm } from "@/components/login/register-form";

export const AuthContainer: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-200 justify-center h-130 flex rounded-2xl overflow-hidden  backdrop-blur-2xl">
                {/* Left side */}
                <div
                    className={`w-1/2 p-8 flex flex-col transition-all duration-500 ${isLogin ? "bg-blue-950/80" : "bg-white/10"
                        }`}
                >
                    {isLogin ? (
                        <LoginForm />
                    ) : (
                        <div className="flex gap-2 flex-col w-full h-full items-center justify-center">
                            <h2 className="font-poppins text-3xl text-center">¿Ya tienes cuenta?</h2>
                            <span className="text-base">Inicia sesión para continuar</span>
                            <button
                                onClick={() => setIsLogin(true)}
                                className="bg-blue-500 py-3 w-50 rounded-full mt-10 transition hover:bg-blue-600"
                            >
                                <span className="font-poppins">Iniciar sesión</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Right side */}
                <div
                    className={`w-1/2 p-8 flex flex-col transition-all duration-100 ${isLogin ? "bg-white/10" : "bg-blue-950/80"
                        }`}
                >
                    {!isLogin ? (
                        <RegisterForm />
                    ) : (
                        <div className="flex gap-2 flex-col w-full h-full items-center justify-center">
                            <h2 className="font-poppins text-3xl text-center">¿No tienes cuenta?</h2>
                            <p className="text-base">Regístrate para comenzar</p>
                            <button
                                onClick={() => setIsLogin(false)}
                                className="bg-blue-500 py-3 w-50 rounded-full mt-10 transition hover:bg-blue-600"
                            >
                                Registrarse
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};