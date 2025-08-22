import gym from './assets/gym.jpg'
export default function Header(){

    return (
        <div className='w-1/2'>
            <div className='flex items-center space-x-6'>
                <img src={gym} alt='Gym' className='h-26 w-26 object-cover rounded-full'></img>
            <h1 className="text-4xl font-bold tracking-tight text-purple-800 underline underline-offset-10 decoration-4 ">
                Gym Catalogue
            </h1>
            <hr />
            </div>
        </div>
    )
}