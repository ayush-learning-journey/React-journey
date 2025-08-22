
import { useState } from "react";

export default function Mood(){

    const [Mood, setMood] = useState("low");

    const toggleMood = () => {
        if (Mood === "low") setMood ("Medium");
        else if (Mood === "Medium") setMood ("High");
        else setMood("low");
    }

    return (
        <div className="mt-16 text-2xl border-2 border-pink-400 inline-flex flex-col
              bg-gray-100 text-purple-600 font-bold">
            <h2 className="bg-pink-300"> 
                Energy Level : {Mood}
            </h2>
        <button onClick={toggleMood}
        className="bg-pink-200 hover:bg-gray-200 transition pointer">
            Change Mood
        </button>

        </div>
    )
}