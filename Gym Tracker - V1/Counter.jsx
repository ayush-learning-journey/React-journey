import { useState } from "react";
import Nav from "./Nav";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handlePlus() {
        setCount(count + 1);
    }

    function handlemin() {
        setCount(count => Math.max(0, count - 1));
    }

    return (
        <div className=" mt-20 inline-flex flex-row gap-6 text-center bg-gray-200 item-center justify-center">
            <button
                onClick={handlePlus}
                className="text-2xl px-6 py-3 rounded-lg bg-purple-100 hover:bg-purple-300 transition-colors font-bold mx-2"
            >
                +
            </button>

            <span className="text-xl font-semibold mt-3">{count}</span>

            <button
                onClick={handlemin}
                className="text-2xl px-6 py-3 rounded-lg bg-purple-100 hover:bg-purple-300 transition-colors font-bold mx-2"
            >
                -
            </button>
        </div>
    );
}