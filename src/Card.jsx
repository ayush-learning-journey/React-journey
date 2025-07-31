
function Card({pic, name, desc}){
    return (
<div className="
          bg-gray-800             
          text-white              
          p-6                    
          rounded-lg              
          shadow-md              
          m-4                     
          flex flex-col items-center 
          max-w-xs                 
        ">
            <img src={pic} alt={name} className="
              w-32  
              h-32                
              object-cover          
              rounded-full        
              mb-4                  
            "/>
            <h4 className="text-xl font-bold mb-2">{name}</h4>
            <p className="text-sm text-gray-400 text-center">{desc}</p>
        </div>
    )
}


export default Card;