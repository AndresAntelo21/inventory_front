import { Mampara } from "./mampara";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Draggable } from "@/components/draggable/draggable";
import { useState } from "react";

export const MapaEmpresa: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false); // Estado para controlar el arrastre

    return (
        <div className="flex w-full h-full">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={3}
                centerOnInit
                centerZoomedOut
                limitToBounds={true}
                panning={{ disabled: isDragging }} // Deshabilita el paneo mientras arrastras
            >
                <TransformComponent>
                    <div className="relative w-[3500px] h-[3000px] bg-amber-200">
                        {/* Mampara 1 */}
                        <Draggable
                            defaultPosition={{ x: 100, y: 100 }}
                            onStart={() => setIsDragging(true)} // Activa el estado de arrastre
                            onStop={() => setIsDragging(false)} // Desactiva el estado de arrastre
                        >
                            <div>
                                <Mampara
                                    title="AGENTE 001"
                                    ip="10.24.110.101"
                                    mac="48-0F-CF-5D-34-5E"
                                />
                            </div>
                        </Draggable>

                        {/* Mampara 2 */}
                        <Draggable
                            defaultPosition={{ x: 300, y: 200 }}
                            onStart={() => setIsDragging(true)}
                            onStop={() => setIsDragging(false)}
                        >
                            <div>
                                <Mampara
                                    title="AGENTE 002"
                                    ip="10.24.110.102"
                                    mac="48-0F-CF-5D-34-5F"
                                />
                            </div>
                        </Draggable>

                        {/* Mampara 3 */}
                        <Draggable
                            defaultPosition={{ x: 500, y: 300 }}
                            onStart={() => setIsDragging(true)}
                            onStop={() => setIsDragging(false)}
                        >
                            <div>
                                <Mampara
                                    title="AGENTE 003"
                                    ip="10.24.110.103"
                                    mac="48-0F-CF-5D-34-60"
                                />
                            </div>
                        </Draggable>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};