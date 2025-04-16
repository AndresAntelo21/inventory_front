import { Draggable } from "@/components/draggable/draggable";

export const Dashboard: React.FC = () => {
    return (
        <div className="w-full h-full relative">
            <Draggable>
                <div className="w-40 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg">
                    Arrástrame
                </div>
            </Draggable>
        </div>
    );
};