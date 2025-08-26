import React from 'react';
import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './Header';
import CoreConcept from './coreConcept';
import TabButton from './TabButton';







function App() {

  const [Tab, setTab] = React.useState(null)
  const contentRef = React.useRef(null);

  function handleSelect(selectedButton) {
    setTab(selectedButton);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center p-8">
        <section id="core-concepts" className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Core Concepts</h2>
          
          <ul className="flex flex-row flex-nowrap gap-6 justify-center">
            
          {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept  key = {conceptItem.title} {...conceptItem} /> ))}

          </ul>
        </section> 

         <section className="w-full max-w-5xl mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">EXAMPLES</h2>

    <menu className="flex flex-row gap-12 justify-center flex-wrap">
          <TabButton  isSelected= {Tab=== 'Components'}
      onSelect={() => handleSelect(`Components`)} >Components</TabButton>
      <TabButton isSelected= {Tab=== 'JSX'}
      onSelect={() => handleSelect('JSX')} >JSX</TabButton>
      <TabButton isSelected= {Tab=== 'Props'}
      onSelect={() => handleSelect('Props')} >Props</TabButton>
      <TabButton isSelected= {Tab=== 'State'}
      onSelect={() => handleSelect('State')} >State</TabButton>
    </menu>
    {!Tab && <p> select a topic</p>}
    {Tab ? <section className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 mt-4">
    <section ref={contentRef} className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 mt-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{EXAMPLES[Tab].title}</h3>
      <p className="text-gray-600 mb-6">{EXAMPLES[Tab].description}</p>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
        <code>{EXAMPLES[Tab].code}</code>
      </pre>
    </section>
    </section> : null}
  </section>
      </main>
    </>
  )
}

export default App

