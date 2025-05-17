import { LuDumbbell } from "react-icons/lu";

export default function Header() {
    return(
        <div className="w-full h-[70px] bg-[#178080] flex items-center justify-between px-10">
            <h1 className="text-white text-2xl font-bold flex gap-2"><LuDumbbell/> Zero2Fit</h1>
            <nav className="flex space-x-6 font-semibold">
                <a href="/" className="text-white hover:text-[#FF7F6A]">Home</a>
                <a href="/FormularioImcGeb" className="text-white hover:text-[#FF7F6A]">IMC</a>
                <a href="/exercise" className="text-white hover:text-[#FF7F6A]">Exercícios</a>
                <a href="/nutricao" className="text-white hover:text-[#FF7F6A]">Nutrição</a>
                <a href="/localizacao" className="text-white hover:text-[#FF7F6A]">Localização</a>
            </nav>
        </div>
        
    )
}