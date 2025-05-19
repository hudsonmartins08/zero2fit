import Card from "@/components/Card";
import Header from "@/components/Header";
import { FaSearch } from "react-icons/fa";

export default function Exercise() {
  return (
    <div className="w-full h-screen bg-[#f9fafb] ">
      <Header />
      <h1 className="text-[30px] font-bold text-[#178080] flex items-center justify-center pt-4">
        Exercícios recomendados
      </h1>
      <p className="text-[#178080] text-[20px] font-semibold flex items-center justify-center">
        Baseado no seu IMC
      </p>
      <div className="flex items-center w-[350px] h-[40px] mx-4 p-4 rounded-lg border border-[#178080] bg-white shadow-lg mt-4 ml-20">
        <input
          type="text"
          placeholder="Pesquisar exercícios"
          className="outline-none rounded-lg w-[80%] "
        />{" "}
        <FaSearch className="w-[20%]" />
      </div>
      <div className="w-full h-full ml-10 pt-10">
        <Card />
        <h3 className="text-[#178080] text-[24px] font-bold pl-30 mt-8">Exercício 1</h3>
        
      </div>
    </div>
  );
}
