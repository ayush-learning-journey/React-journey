

export default function Button ({children, ...props}) {

    return (
        
        <button className='bg-gray-700 hover:bg-gray-900 text-white font-bold py-1 px-1 rounded  transition' {...props}> 
        {children}</button>
    )
}