export default function Card({titulo, categoria, alvo, descricao,p1,p2,p3,p4 }) {
    function getStyle(categoria){
        switch (categoria) {
            case "iniciante":
                return "bg-[#82FF8CFF] text-white";
            case "intermediario":
                return "bg-[#E3FA17FF] text-white";
            case "avancado":
                return "bg-[#FF7A59FF] text-white";
            default:
                return "bg-[#FF7F6A] text-white";
        }
    }

  return (
    <div className="w-[500px] h-[600px] flex ml-15 max-sm:mx-3 rounded-lg border border-[#178080] flex-col shadow-lg transition-shadow hover:shadow-2xl bg-white">
      <div className="w-[100%] h-[10%] items-center px-4 pt-4 flex justify-between rounded-t-lg">
        <p className="text-[25px] font-bold text-[#178080]">{titulo}</p>
        <div
          className={`flex rounded-md items-center justify-center
                 px-2 ${getStyle(categoria)} font-semibold`}        >
          <p>{categoria}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="p-3 max-sm:text-[14px] font-semibold text-[#4d4f52]">{alvo}</p>
        <p className="p-4 max-sm:text-[16px] text-[20px] text-[#4d4f52]">{descricao}</p>
      </div>
      <div className="flex max-sm:text-[14px] flex-col"></div>
      <p className="p-3 font-bold max-sm:text-[20px] text-[20px]">Instruções:</p>
        <p className="p-3 text-[18px] max-sm:text-[14px] font-semibold">{p1}</p>
        <p className="p-3 text-[18px] max-sm:text-[14px] font-semibold">{p2}</p>
        <p className="p-3 text-[18px] max-sm:text-[14px] font-semibold">{p3}</p>
        <p className="p-3 text-[18px] max-sm:text-[14px] font-semibold">{p4}</p>
        <button className="mt-4 px-4 py-2 m-8 font-bold border border-[#4d4f52] hover:bg-[#1A8F8F] hover:text-white transition rounded-lg cursor-pointer">Saiba mais</button>

    </div>
  );
}
