import logo from '../assets/logo.png'
import Button from './Button.jsx'


export default function Page({ onStartAddProject }) {
    return (<>
        <div className=' flex flex-1 flex-col min-h-screen justify-center items-center text-center'>

            <div className='flex flex-row items-center justify-center text-centre '>
                <h2 className='font-bold text-3xl tracking-widest mt-4'> No Project Selected </h2>
                <img src={logo} alt="logo" className='w-16 h-16 ' />
            </div>

            <div id='page' className="flex flex-col items-center justify-center grow">


                <p className='text-gray-500 mb-4 text-xl '>Select a page to get started with a new page</p>

                <Button onClick={onStartAddProject}>Add Projects</Button>
            </div>
        </div>

    </>)
}