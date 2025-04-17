import React, { useRef, useState } from "react";

interface DraggableProps {
    children: React.ReactNode;
    className?: string;
    defaultPosition?: { x: number; y: number }; // Posición inicial
    onStart?: () => void; // Callback al iniciar el arrastre
    onStop?: () => void; // Callback al detener el arrastre
}

export const Draggable: React.FC<DraggableProps> = ({
    children,
    className,
    defaultPosition,
    onStart,
    onStop,
}) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const animationFrameRef = useRef<number | null>(null); // Referencia para `requestAnimationFrame`

    const handleMouseDown = (e: React.MouseEvent) => {
        const element = elementRef.current;
        if (!element) return;

        setIsDragging(true);
        onStart?.(); // Llama a onStart si está definido

        const startX = e.clientX - element.offsetLeft;
        const startY = e.clientY - element.offsetTop;

        const handleMouseMove = (e: MouseEvent) => {
            if (animationFrameRef.current) return; // Evita múltiples frames

            animationFrameRef.current = requestAnimationFrame(() => {
                element.style.left = `${e.clientX - startX}px`;
                element.style.top = `${e.clientY - startY}px`;
                animationFrameRef.current = null; // Libera el frame
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            onStop?.(); // Llama a onStop si está definido
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div
            ref={elementRef}
            className={`absolute ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${className}`}
            onMouseDown={handleMouseDown}
            style={{
                position: "absolute",
                left: defaultPosition?.x || 0,
                top: defaultPosition?.y || 0,
            }}
        >
            {children}
        </div>
    );
};