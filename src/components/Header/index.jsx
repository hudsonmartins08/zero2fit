import { LuDumbbell } from "react-icons/lu";

export default function Header() {
    return(
        <div  className="w-full h-[70px] bg-[#178080] flex items-center justify-between px-10">
           <div className="flex items-center gap-2 h-full">
           <LuDumbbell className="text-white text-[30px] cursor-pointer"/> 
            <h1 
            onClick={()=> window.location.href = "/"}
            className="text-white text-[30px] font-bold flex gap-2 cursor-pointer"> Zero2Fit</h1>
           </div>
            <nav className="flex space-x-6 font-semibold">
                <a href="/" className="text-white hover:text-[#FF7F6A]">Home</a>
                <a href="/FormularioImcGeb" className="text-white hover:text-[#FF7F6A]">Calculadora de IMC</a>
                <a href="/exercise" className="text-white hover:text-[#FF7F6A]">Exercícios</a>
                <a href="/nutricao" className="text-white hover:text-[#FF7F6A]">Nutrição</a>
                <a href="/localizacao" className="text-white hover:text-[#FF7F6A]">Localização</a>
            </nav>
        </div>
        
    )
}