
import clsx from "clsx"
export default function TabButton({children, onSelect, isSelected}){

    return (
        <>
        
            <li>
                <button 
                className={clsx (
                    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg",
                    isSelected ?
                               "bg-blue-500 text-white"
                            :  "bg-gray-200 hover:bg-blue-300 hover:text-white"   
                )}
             onClick={onSelect}>{children}</button>
            </li>
        </>
    ) 
}