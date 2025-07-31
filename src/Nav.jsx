

function Nav({onClick, char}) {
  return (
    <div className="
      flex 
      flex-row 
      justify-evenly 
      bg-purple-600 
      p-4                 
      rounded-xl            
      shadow-lg         
      hover:bg-purple-700   
      hover:shadow-xl       
      transition-all        
      duration-300          
      ease-in-out           
      cursor-pointer        
    ">
      <button onClick={() => onClick('Naruto')}>Naruto</button>
      <button onClick={() => onClick('Sasuke')}>Sasuke</button>
      <button onClick={() => onClick('Kakashi')}>Kakashi</button>
    </div>   
  )
}

export default Nav;