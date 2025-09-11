import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <img
        src={logo}
        alt="Investment calculator logo"
        className="w-20 h-20 object-contain mb-2"
      ></img>
      <h1 className="text-xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        Investment Calculator
      </h1>
    </header>
  );
}
