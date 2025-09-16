
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption = "Close" }, ref) {
    const dialog = useRef(null);

    useImperativeHandle(ref, () => ({
        open() {
            if (dialog.current && typeof dialog.current.showModal === "function") {
                dialog.current.showModal();
            }
        },
        close() {
            if (dialog.current && typeof dialog.current.close === "function") {
                dialog.current.close();
            }
        }
    }), []);

    return createPortal(
        <dialog ref={dialog} className="p-6 rounded-md backdrop:bg-stone-500/90 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="mb-4">{children}</div>
            <form method="dialog">
                <button className="px-4 py-2 rounded bg-stone-800 text-white">{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
