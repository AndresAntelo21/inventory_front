import { Mampara } from "./mampara";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";
import { AddMamparaButton } from "@/components/page/mapa-empresa/add-mampara-button";
import { Buscador } from "@/components/buscador/buscador";
export const MapaEmpresa: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="flex">
            <Buscador />
            <AddMamparaButton
                isEditing={isEditing}
                toggleEditing={() => setIsEditing(!isEditing)}
            />
            <TransformWrapper
                initialScale={1}
                minScale={0.2}
                maxScale={2}
                centerOnInit
                centerZoomedOut
                limitToBounds={false}
                panning={{ disabled: isDragging }}
            >
                <TransformComponent>
                    <div className="relative w-[3500px] h-[2500px]">
                        <div>
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 440 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 610 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 950 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 1120 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 440 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 610 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 950 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 1120 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        <div>
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 270 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/* <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 440 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            /> */}
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 950 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1120 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1460 }}
                                type="supervisor"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 440 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 610 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 950 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1120 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        <div>
                            <Mampara
                                title="JEFCALYCAP"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1800 }}
                                type="jefe"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="JEFMUEVR02"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: 1800 }}
                                type="jefe"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        <div>
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 1460 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 1290 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        <div>
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 780 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2310, y: 610 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2310, y: 440 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 270 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 270 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 270 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        <div>
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1290, y: -70 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/*  */}
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1290, y: -240 }}
                                type="mampara"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* RH */}
                        <div>
                            <Mampara
                                title="GENERALISTA"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2650, y: -240 }}
                                type="administrativo"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AUXRH"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2990, y: -70 }}
                                type="empleado"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* GERENCIA */}
                        <div>
                            <Mampara
                                title="GERENCIA"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2650, y: 100 }}
                                type="gerencia"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SALA-CAPACITACION 2 */}
                        <div>
                            <Mampara
                                title="SALACAPA02"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2650, y: 1120 }}
                                type="salacapa"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SISTEMAS */}
                        <div>
                            <Mampara
                                title="SOPORTE"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: -240 }}
                                type="empleado"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="SISTEMAS"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3670, y: -70 }}
                                type="administrativo"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* RECLUTAMIENTO */}
                        <div>
                            <Mampara
                                title="RECLU01"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3670, y: 100 }}
                                type="empleado"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="JEFRECLU"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3500, y: 270 }}
                                type="administrativo"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="RECLU02"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 100 }}
                                type="empleado"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* salas entrevista y psicologia */}
                        <div>
                            <Mampara
                                title="SALA ENTREVISTA 1"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 440 }}
                                type="salasentrevista"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="SALA ENTREVISTA 2"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 610 }}
                                type="salasentrevista"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="PSICOLOGIA"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 780 }}
                                type="psicologia"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* CAPACITACION */}
                        <div>
                            <Mampara
                                title="CAPA02"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 950 }}
                                type="capa"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="CAPA01"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3670, y: 950 }}
                                type="capa"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="SALACAPA01"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3330, y: 1120 }}
                                type="salacapa"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SITE */}
                        <div>
                            <Mampara
                                title="STAFF001"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 1970 }}
                                type="site"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* RECEPCION */}
                        <div>
                            <Mampara
                                title="RECEPCION"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3840, y: -410 }}
                                type="recepcion"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SALAS */}
                        <div>
                            <Mampara
                                title="SALAS"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 3840, y: -240 }}
                                type="sala"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* BODEGA */}
                        <div>
                            <Mampara
                                title="BODEGA"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2650, y: 1630 }}
                                type="bodega"
                                isEditing={isEditing}
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />

                        </div>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};