import { FaArrowRight } from "react-icons/fa6";
import { LuCalculator } from "react-icons/lu";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-[100%] h-screen flex flex-col items-start">
          <video
            autoPlay
            loop
            muted
            className="w-[100%] h-screen object-cover absolute -z-10"
          >
            <source src="/videos/mainVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="w-[65%] text-[50px] text-white font-bold p-8">
            Comece aqui sua jornada fitness com a Zero2Fit
          </h1>
          <h2 className="w-[60%] text-[20px] text-white font-semibold pl-8">
            Planos de treino personalizados, conselhos nutricionais e recursos
            de condicionamento físico para ajudá-lo a atingir seus objetivos de
            saúde.
          </h2>
          <button className="w-[250px] h-[50px] font-semibold flex items-center justify-center m-8 text-white border border-none gap-2 rounded-lg bg-[#FF7F6A] hover:bg-[#FF7F6A]/80">
            Comece sua jornada
            <FaArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-wrap items-center justify-center bg-[#f9fafb]">
        <div className=" w-full h-[20%] flex items-center justify-center">
          <h2 className="text-[#178080] text-[40px] font-bold">
            Como o Zero2Fit ajuda você
          </h2>
        </div>
        <div className="w-full h-[80%] flex items-center justify-center">
            <div className="w-[280px] h-[280px] bg-[#ffffff] shadow-lg transition-shadow rounded-md flex flex-col items-center justify-center">
              <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
                <div className="w-[70px] h-[70px] rounded-full bg-[#e7f4f4] flex items-center justify-center "><LuCalculator size={40} /></div>
              </div>
              <div className="w-full h-[34%] flex flex-wrap justify-center">
                <h4 className="font-bold size-[20px]">Calculadora de IMC</h4>
                <h5>Entenda sua composição corporal e obtenha recomendações personalizadas</h5>
              </div>
              <div className="w-full h-[33%] bg-[blue]">
                <button></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
