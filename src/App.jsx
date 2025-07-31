import { useState } from 'react'
import Nav from './Nav.jsx'
import Data from './Data'
import Card from './Card.jsx'
import './App.css'
import Kakashi from './assets/kakashi.jpg'
import naruto from './assets/naruto.jpg'
import sasuke from  './assets/sasuke.jpg'

function App() {
  const [activeTab, setActiveTab] = useState('Naruto')
  function handleTabClick(name){
    setActiveTab(name);
  }

  const activeCharacterData = Data.find(item => {
    return item.char1 === activeTab || item.char2 === activeTab || item.char3 === activeTab;
  });


  let activeCharImage;
  if(activeTab=== 'Naruto') {
    activeCharImage = naruto;
  } else if (activeTab === 'Sasuke') {
    activeCharImage = sasuke;
  } else if (activeTab === 'Kakashi') {
    activeCharImage = Kakashi;
  }

  return (
    <>
      <Nav onClick={handleTabClick} /> 
      <section className="flex flex-wrap justify-center p-8">       
        {activeCharacterData && (
          <Card 
            pic={activeCharImage} 
           
            name={
              activeTab === 'Naruto' ? activeCharacterData.char1 :
              activeTab === 'Sasuke' ? activeCharacterData.char2 :
              activeCharacterData.char3 
            }
            desc={
              activeTab === 'Naruto' ? activeCharacterData.desc1 :
              activeTab === 'Sasuke' ? activeCharacterData.desc2 :
              activeCharacterData.desc3 
            }
          />
        )}
      </section>
    </>
  );
}

export default App
