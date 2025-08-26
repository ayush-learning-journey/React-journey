 export default function CoreConcept(props){
  return (
          <li className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-60 hover:scale-105 transition-transform">
            <img src={props.image} alt={props.alt} className={`${props.styling} mb-3`} />
            <h3 className="font-semibold text-lg mb-2">{props.title}</h3>
            <p className="text-gray-600 text-sm text-center">{props.description}</p>
          </li>
  );
} 