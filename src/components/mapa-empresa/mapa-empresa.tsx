import { Mampara } from "./mampara";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";

export const MapaEmpresa: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="flex">
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 610 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 780 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 950 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 1120 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 100, y: 1290 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 610 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 780 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 950 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 1120 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 270, y: 1290 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            {/* <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 440 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            /> */}
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 950 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1120 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1290 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 610, y: 1460 }}
                                type="supervisor"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 610 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 780 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 950 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1120 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1290 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE057"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 780, y: 1460 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="JEFMUEVR02"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: 1800 }}
                                type="jefe"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 1460 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 1460 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 1460 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 1460 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: 1290 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 1290 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 1290 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 1290 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: 780 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 780 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 780 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2310, y: 440 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: 270 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2140, y: 270 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: -70 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: -70 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: -70 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: -70 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1290, y: -70 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1970, y: -240 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1800, y: -240 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1630, y: -240 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1460, y: -240 }}
                                type="mampara"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AGENTE005"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 1290, y: -240 }}
                                type="mampara"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                            <Mampara
                                title="AUXRH"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2820, y: -70 }}
                                type="administrativo"
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
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SALA-CAPACITACION 2 */}
                        <div>
                            <Mampara
                                title="SALACAPA2"
                                ip="10.24.110.157"
                                mac="BC-30-5B-B5-E8-8A"
                                defaultPosition={{ x: 2650, y: 2140 }}
                                type="salacapa"
                                onStart={() => setIsDragging(true)}
                                onStop={() => setIsDragging(false)}
                            />
                        </div>
                        {/* SISTEMAS */}
                        <div></div>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};