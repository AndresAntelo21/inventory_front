import { Mampara } from "./mampara";

// import Draggable from 'react-draggable';
export const MapaEmpresa: React.FC = () => {
    return (
        <div className="flex gap-2">
            <Mampara title="AGENTE 001" ip="10.24.110.101" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 002" ip="10.24.110.102" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 003" ip="10.24.110.103" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 004" ip="10.24.110.104" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 005" ip="10.24.110.105" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 006" ip="10.24.110.106" mac="48-0F-CF-5D-34-5E" />
            <Mampara title="AGENTE 007" ip="10.24.110.107" mac="48-0F-CF-5D-34-5E" />
        </div>
    );
};