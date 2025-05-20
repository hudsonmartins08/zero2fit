import { FaArrowRight } from "react-icons/fa6";
import { LuCalculator } from "react-icons/lu";
import { LuDumbbell } from "react-icons/lu";
import { LuLeafyGreen } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

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
          <h2 className="w-[60%] text-[20px] text-white font-semibold pl-8 pb-6">
            Planos de treino personalizados, conselhos nutricionais e recursos
            de condicionamento físico para ajudá-lo a atingir seus objetivos de
            saúde.
          </h2>
          <button className="w-[250px] h-[50px] font-semibold flex items-center justify-center m-8 text-white border border-none gap-2 rounded-lg bg-[#FF7F6A] hover:bg-[#FF7F6A]/80 cursor-pointer">
            Comece sua jornada
            <FaArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-wrap items-center justify-center bg-[#f9fafb]">
        <div className=" w-full h-[20%] flex items-center justify-center">
          <h2 className="text-[#178080] text-[30px] font-bold">
            Como o Zero2Fit ajuda você
          </h2>
        </div>
        <div className="w-full h-[80%] flex flex-wrap items-center justify-center gap-10 ">
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuCalculator size={40} />
              </div>
            </div>
            <div className="w-full h-[34%] flex flex-col items-center justify-center">
              <h4 className="w-full font-bold size-[20px] text-center">
                Calculadora de IMC
              </h4>
              <p className="w-full text-center mt-2">
                Entenda sua composição corporal e obtenha recomendações
                personalizadas.
              </p>
            </div>
            <div className="w-full h-[33%] flex items-center justify-center">
              <button className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer">
                Calcular IMC
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuDumbbell size={40} />
              </div>
            </div>
            <div className="w-full h-[34%] flex flex-col items-center justify-center">
              <h4 className="w-full font-bold size-[20px] text-center">
                Planos de Exercício
              </h4>
              <p className="w-full text-center mt-2 pl-2 pr-2">
                Rotinas de treino personalizadas com base no seu nível de
                condicionamento físico e objetivos.
              </p>
            </div>
            <div className="w-full h-[33%] flex items-center justify-center">
              <button className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer">
                Ver exercícios
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuLeafyGreen size={40} />
              </div>
            </div>
            <div className="w-full h-[34%] flex flex-col items-center justify-center">
              <h4 className="w-full font-bold size-[20px] text-center">
                Recomendações de dieta
              </h4>
              <p className="w-full text-center mt-2 pl-2 pr-2">
                Planos de nutrição personalizados com macros detalhadas para
                seus objetivos.
              </p>
            </div>
            <div className="w-full h-[33%] flex items-center justify-center">
              <button className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer">
                Explore os planos de dieta
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <FiMapPin size={40} />
              </div>
            </div>
            <div className="w-full h-[34%] flex flex-col items-center justify-center">
              <h4 className="w-full font-bold size-[20px] text-center">
                Localizações Fitness
              </h4>
              <p className="w-full text-center mt-2 pl-2 pr-2">
                Encontre academias, treinadores, lojas de suplementos e mais na
                sua área.
              </p>
            </div>
            <div className="w-full h-[33%] flex items-center justify-center">
              <button className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer">
                Ver mapa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex items-center justify-center">
        <div className="w-[60%] h-[30%] mt-16 rounded-lg bg-[#FF7F6A] text-white text-center mb-12">
          <h4 className="p-8 text-[20px]">
            "Cuide do seu corpo. É o único lugar que você tem para viver."
          </h4>
          <p className="pb-8 text-[20px]">-Jim Rohn</p>
        </div>
      </div>
      <div className="w-full h-[55%] bg-[#1F2937] p-16 flex justify-between">
        <div className="w-[30%] text-white">
          <div className="flex gap-2">
            <LuDumbbell size={30} />{" "}
            <h2 className="font-bold text-[22px]">Zero2Fit</h2>
          </div>
          <p className="text-[#848C99] text-[17px] mt-2">
            Sua jornada para uma vida mais saudável começa aqui.
          </p>
        </div>
        <div className="w-[30%] h-[15%] flex justify-between bg-[pink]">
          <div className="w-[33%] h-[40%]">
            <h4 className="text-white text-[20px]">Início</h4>
            <div className="text-[#848C99]">
              <p>Calculadora de IMC</p>
              <p>Exercício</p>
              <p>Nutrição</p>
              <p>Localização</p>
            </div>
          </div>
          <div className="w-[33%] h-[40%]">
            <h4 className="text-white text-[20px]">Descubra</h4>
            <div className="text-[#848C99]">
              <p>Blog</p>
              <p>Artigos</p>
              <p>Comunidade</p>
            </div>
          </div>
          <div className="w-[33%] h-[40%]">
            <h4 className="text-white text-[20px]">Sobre</h4>
            <div className="text-[#848C99]">
              <p>Missão</p>
              <p>Contato</p>
              <p>Privacidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
