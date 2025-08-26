import Home from './assets/Home.svg'


const reactRand = [`easy` , 'Mid', 'hard']
function getRandomInt(max){
  return Math.floor(Math.random() * ( max + 1))
}

function btn(){
  alert(`nested obj.`)
}
export default function Header(){
  return ( 
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 mb-10 shadow-lg">
      <div className='flex flex-row items-center justify-center gap-4'>
        <button onClick={btn} className="hover:scale-110 transition-transform">
          <img src={Home}
          className='w-16 h-12' />
        </button>

        <h1 className='underline font-bold text-2xl text-center tracking-wide'>
          React is : {reactRand[getRandomInt(2)]} 
        </h1>
      </div>

      <p className="text-center mt-2">This is para inside component </p>
    </header>
  )
}