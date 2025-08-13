import chef from './chef.png'

function Header() {
    return (
        <>
        <header className='bg-white hover:bg-pink-200 transition-colors duration-300 
         cursor-pointer w-200 ml-40  flex flex-row items-center justify-center 
         py-2 border-2 border-purple-800 rounded-lg '>
            <img src={chef} className="mb-2 w-16 h-16" alt='chef'></img>
            <h2 className='text-2xl font-bold ml-4'>Chef Mistral</h2>
            <br />
        </header>
        </>
    )
}

export default Header;