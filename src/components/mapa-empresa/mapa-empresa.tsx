import { Mampara } from "./mampara";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Draggable from 'react-draggable';
export const MapaEmpresa: React.FC = () => {
    return (
        <div className="flex gap-2 w-full h-full">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={3}
                centerOnInit
                centerZoomedOut
                limitToBounds={true}
            >
                <TransformComponent >
                    <div className="relative w-[3500px] h-[3000px] bg-amber-200">
                        <Mampara
                            title="AGENTE 001"
                            ip="10.24.110.101"
                            mac="48-0F-CF-5D-34-5E"

                        />
                        <Mampara
                            title="AGENTE 002"
                            ip="10.24.110.102"
                            mac="48-0F-CF-5D-34-5F"

                        />
                        <Mampara
                            title="AGENTE 003"
                            ip="10.24.110.103"
                            mac="48-0F-CF-5D-34-60"

                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>

        </div>
    );
};