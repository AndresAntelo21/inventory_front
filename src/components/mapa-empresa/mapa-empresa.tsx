import { Mampara } from "./mampara";

// import Draggable from 'react-draggable';
export const MapaEmpresa: React.FC = () => {
    return (
        <div className="w-full h-full flex gap-2">
            <Mampara title="AGENTE 001" ip="10.24.110.101" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 002" ip="10.24.110.101" mac="48-0F-CF-5D-34-5E" />
        </div>
    );
};