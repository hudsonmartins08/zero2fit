import Header from "@/components/Header";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
export default function Localizacao() {
    return (
        <div className="w-full h-auto min-h-screen bg-gray-100 ">
            <Header />
           <h1 className="text-[#178080] text-[35px] font-bold flex items-center justify-center pt-6 m-4 ">Encontre recursos fitness</h1>
           <p className="flex items-center justify-center font-semibold text-[20px]">Descubra academias, treinadores, lojas de fitness e nutricionistas em sua área</p>
           <div className="m-15 mr-45 ml-45">
           <div className="h-15 flex items-center justify-center  bg-[#178080] rounded-t-lg gap-2">
           <IoLocationOutline size={35} className="text-white text-[25px] flex font-semibold pt-2"/>
            <h1 className="text-white text-[25px] flex font-semibold pt-2">
            Recursos fitness perto de você</h1>
              
           </div>
           <div className="w-full h-64 flex items-center justify-center pt-4 bg-gray-200 rounded-b-lg">
            <p className="flex items-center justify-center ">A Localização do mapa aparecerá aqui</p>

           </div>
           </div>
           <div className="w-full h-80 pt-4 bg-gray-200">
            <div className="w-full h-20 flex items-center justify-center pt-4">
            

                <input
                type="text" 
                placeholder="Pesquisar locais..." 
                className="flex ml-42 p-1 w-[90%] rounded-lg border border-gray-400 " />
                <IoSearch className="text-gray-900 text-[25px] w-[10%] flex font-semibold pt-2" />
            </div>   
           </div>
        </div>
        
    )
}