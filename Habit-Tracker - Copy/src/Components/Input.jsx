
import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
    const style = "p-2 border-b-2 rounded-sm border-stone-300 text-stone-600";

    return (
        <p className="flex flex-col gap-2 my-3">
            <label className="text-md font-semibold uppercase text-stone-500">
                {label}
            </label>
            {textarea
                ? <textarea ref={ref} className={style} {...props} />
                : <input ref={ref} className={style} {...props} />}
        </p>
    );
});

export default Input;
