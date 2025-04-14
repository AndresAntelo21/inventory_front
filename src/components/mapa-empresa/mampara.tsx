interface MamparaProps {
    title: string;
    ip: string;
    mac: string;
    // className?: string;
}

export const Mampara: React.FC<MamparaProps> = ({ title, ip, mac }) => {
    return (
        <div className="size-40 bg-blue-500 flex flex-col items-center justify-center rounded-2xl font-poppins font-bold text-white">
            <h1>{title}</h1>
            <span className="text-sm font-semibold tracking-widest">{ip}</span>
            <span className="text-sm font-semibold ">{mac}</span>
        </div>
    );
};