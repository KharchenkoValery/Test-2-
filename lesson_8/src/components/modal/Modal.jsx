import React from "react";
import { useState } from "react";


const Modal = ({ children, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Вызовите колбэк, чтобы сообщить родительскому компоненту о закрытии модального окна
    };

    return (
        <dialog className={`modal ${isOpen ? "open" : ""}`}>
            {children}
            <button onClick={handleClose}>Закрыть</button>
        </dialog>
    );
};

// const Modal = ({ children }) => {
//     return (
//         <dialog className="modal">
//             {children}
//         </dialog>
//     );
// };






export default Modal;
