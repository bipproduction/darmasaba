import toast from "react-simple-toasts";
import { AiFillNotification, AiFillInfoCircle } from 'react-icons/ai'

export const tos = (text: string) => toast(text, {
    position: "top-center",
    duration: 5000,
    zIndex: 10000,
    theme: "dark",
    clickClosable: true,
    render: (text) => {
        return <div style={{
            padding: 10,
            borderRadius: 5,
            backgroundColor: "rgba(0,0,0,0.5)",
            maxWidth: 460,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)"
        }}>
            <div style={{
                color: "white",
                padding: 4
            }} >
                <AiFillInfoCircle size={24} />
            </div>
            <div style={{
                color: "white",
                padding: 4
            }}>
                {text}
            </div>
        </div>;
    }
})