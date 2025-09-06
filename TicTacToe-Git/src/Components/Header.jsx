
import logo from '../public/logo.png'

export default function Header(){
    return (
        <header className='flex items-center space-x-2 justify-center mt-8'>
            <img className='h-20 w-20 object-contain'  
            src={logo} alt='game-logo'></img>
            <span className='text-xl font-bold text-white'>Tic-Tac-Toe</span>
        </header>
    )
}