import { Draggable } from "@/components/page/draggable/draggable";

interface MamparaProps {
    title: string;
    ip: string;
    mac: string;
    defaultPosition?: { x: number; y: number };
    onStart?: () => void;
    onStop?: () => void;
    type?: "mampara" | "administrativo" | "site" | "bodega" | "jefe" | "supervisor" | "sala" | "gerencia" | "salacapa" | "empleado" | "salasentrevista" | "psicologia" | "capa" | "recepcion";
}

const typeStyles: Record<string, { size: string; bgColor: string }> = {
    mampara: { size: "size-40", bgColor: "bg-blue-400" },
    administrativo: { size: "size-40", bgColor: "bg-purple-700" },
    gerencia: { size: "w-125 h-210", bgColor: "bg-purple-700" },
    salacapa: { size: "size-125", bgColor: "bg-purple-500" },
    site: { size: "w-250 h-100", bgColor: "bg-indigo-500" },
    bodega: { size: "w-295 h-185", bgColor: "bg-gray-600" },
    jefe: { size: "w-150 h-40", bgColor: "bg-purple-700" },
    empleado: { size: "size-40", bgColor: "bg-purple-500" },
    supervisor: { size: "size-40", bgColor: "bg-blue-700" },
    sala: { size: "w-125 h-653", bgColor: "bg-green-400" },
    salasentrevista: { size: "w-125 h-40", bgColor: "bg-orange-400" },
    psicologia: { size: "w-125 h-40", bgColor: "bg-blue-400" },
    capa: { size: "size-40", bgColor: "bg-blue-700" },
    recepcion: { size: "w-125 h-40", bgColor: "bg-blue-400" },
};

export const Mampara: React.FC<MamparaProps> = ({
    title,
    ip,
    mac,
    defaultPosition,
    onStart,
    onStop,
    type = "mampara",
}) => {
    const { size, bgColor } = typeStyles[type] || typeStyles["mampara"]; // Estilos según el tipo

    return (
        <Draggable
            defaultPosition={defaultPosition}
            onStart={onStart}
            onStop={onStop}
        >
            <div
                className={`${size} ${bgColor} flex flex-col items-center justify-center rounded-2xl font-poppins font-bold text-white`}
            >
                <h1>{title}</h1>
                <span className="text-sm font-semibold tracking-widest">{ip}</span>
                <span className="text-sm font-semibold">{mac}</span>
            </div>
        </Draggable>
    );
};