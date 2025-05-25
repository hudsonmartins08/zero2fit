import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { LuCalculator } from "react-icons/lu";
import { LuDumbbell } from "react-icons/lu";
import { LuLeafyGreen } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="">
      <div className="w-full h-screen flex items-center justify-center relative max-sm:w-auto max-sm:min-h-[500px] ">
        {/* Video de fundo */}
        <video
          autoPlay
          loop
          muted
          className="w-[100%] h-screen object-cover absolute -z-10"
        >
          <source src="/videos/mainVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/30 -z-10"></div>

        {/* Conteúdo principal */}
        <div className="w-[100%] h-screen flex flex-col items-start max-sm:py-50">
          <h1 className="w-[65%] text-[50px] text-white font-bold p-8 max-sm:text-[30px] max-sm:w-[100%]">
            Comece aqui sua jornada fitness com a Zero2Fit
          </h1>
          <h2 className="w-[60%] text-[20px] text-white font-semibold pl-8 pb-6 max-sm:text-[18px] max-sm:w-[90%]">
            Planos de treino personalizados, conselhos nutricionais e recursos
            de condicionamento físico para ajudá-lo a atingir seus objetivos de
            saúde.
          </h2>
          <button
            onClick={() => setShowAuthModal(true)}
            className="w-[250px] h-[50px] font-semibold flex items-center justify-center m-8 text-white border border-none gap-2 rounded-lg bg-[#FF7F6A] hover:bg-[#FF7F6A]/80 cursor-pointer max-sm:w-[80%] max-sm:gap-0.5 max-sm:p-1"
          >Comece sua jornada
            <FaArrowRight size={17} />
          </button>
        </div>

        {/* Modal de Login/Cadastro */}
        {showAuthModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isLogin ? "Acesse sua conta" : "Crie sua conta"}
                </h2>

                <form className="space-y-6">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#178080]"
                        placeholder="Seu nome"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#178080]"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#178080]"
                      placeholder={isLogin ? "Sua senha" : "Crie uma senha"}
                    />
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirme sua senha
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#178080]"
                        placeholder="Confirme sua senha"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm text-[#178080] hover:underline cursor-pointer"
                    >
                      {isLogin ? "Criar uma conta" : "Já tenho uma conta"}
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#FF7F6A] text-white rounded-md hover:bg-[#FF7F6A]/90 transition cursor-pointer"
                    >
                      {isLogin ? "Entrar" : "Cadastrar"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-gray-50 px-8 py-4 flex justify-end">
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-screen h-screen flex flex-wrap items-center justify-center bg-[#f9fafb]">
        <div className=" w-full h-[30%] flex items-center justify-center pt-10 max-sm:h-[5%] max-sm:pt-0">
          <h2 className="text-[#178080] text-[30px] font-bold max-sm:text-[20px]">
            Como o Zero2Fit ajuda você
          </h2>
        </div>
        <div className="w-full h-[70%] flex flex-wrap items-center justify-center gap-10 max-sm:w-full max-sm:h-[100%] max-sm:text-[11px] max-sm:gap-3">
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center max-sm:w-[75%] max-sm:h-[23%]">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] max-md:h-[50px] max-md:w-[50px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuCalculator className="max-sm:size-[25px]" size={40} />
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
              <button
                onClick={() => (window.location.href = "/FormularioImcGeb")}
                className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer"
              >
                Calcular IMC
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center max-sm:w-[75%] max-sm:h-[23%]">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] max-md:h-[50px] max-md:w-[50px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuDumbbell className="max-sm:size-[25px]" size={40} />
              </div>
            </div>
            <div className="w-full h-[34%] flex flex-col items-center justify-center">
              <h4 className="w-full font-bold size-[20px] text-center">
                Planos de Exercício
              </h4>
              <p className="w-full text-center mt-2 pl-2 pr-2 max-sm:h-[90%]">
                Rotinas de treino personalizadas com base no seu nível de
                condicionamento físico e objetivos.
              </p>
            </div>
            <div className="w-full h-[33%] flex items-center justify-center max-sm:pt-3">
              <button
                onClick={() => (window.location.href = "/exercise")}
                className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer"
              >
                Ver exercícios
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center max-sm:w-[75%] max-sm:h-[23%]">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] max-md:h-[50px] max-md:w-[50px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <LuLeafyGreen className="max-sm:size-[25px]" size={40} />
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
              <button
                onClick={() => (window.location.href = "/nutricao")}
                className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer"
              >
                Explore os planos de dieta
              </button>
            </div>
          </div>
          <div className="w-[310px] h-[310px] bg-[#ffffff] shadow-lg transition-shadow rounded-lg flex flex-col items-center justify-center max-sm:w-[75%] max-sm:h-[23%]">
            <div className="w-full h-[33%] flex items-center justify-center text-[#178080]">
              <div className="w-[70px] h-[70px] max-md:h-[50px] max-md:w-[50px] rounded-full bg-[#e7f4f4] flex items-center justify-center ">
                <FiMapPin className="max-sm:size-[25px]" size={40} />
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
              <button
                onClick={() => (window.location.href = "/localizacao")}
                className="border border-[#e2e8f0] rounded-md py-2 px-3 hover:bg-[#178080] hover:text-white cursor-pointer">
                Ver mapa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex items-center justify-center max-sm:bg-[#F9FAFB]">
        <div className="w-[60%] h-[30%] mt-16 rounded-lg bg-[#FF7F6A] text-white text-center mb-12 max-sm:">
          <h4 className="p-8 text-[20px]">
            "Cuide do seu corpo. É o único lugar que você tem para viver."
          </h4>
          <p className="pb-8 text-[20px]">-Jim Rohn</p>
        </div>
      </div>
      <footer>
  <div className="w-full bg-[#1F2937] p-4 md:p-8 lg:p-16 flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-[40%] mb-8 md:mb-0 text-white">
      <div className="flex gap-2 items-center">
        <LuDumbbell size={30} />
        <h2 className="font-bold text-lg md:text-[22px]">Zero2Fit</h2>
      </div>
      <p className="text-[#848C99] text-sm md:text-[17px] mt-2">
        Sua jornada para uma vida mais saudável começa aqui.
      </p>
    </div>
    
    <div className="w-full md:w-[40%] flex flex-col sm:flex-row gap-8 md:gap-4 md:pl-8">
      <div className="w-full sm:w-1/3">
        <h4 className="text-white text-lg md:text-[20px]">Início</h4>
        <div className="text-[#848C99] text-sm md:text-base">
          <p onClick={() => (window.location.href = "/FormularioImcGeb")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Calculadora de IMC
          </p>
          <p onClick={() => (window.location.href = "/exercise")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Exercício
          </p>
          <p onClick={() => (window.location.href = "/nutricao")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Nutrição
          </p>
          <p onClick={() => (window.location.href = "/localizacao")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Localização
          </p>
        </div>
      </div>
      
      <div className="w-full sm:w-1/3">
        <h4 className="text-white text-lg md:text-[20px]">Descubra</h4>
        <div className="text-[#848C99] text-sm md:text-base">
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Blog
          </p>
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Artigos
          </p>
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Comunidade
          </p>
        </div>
      </div>
      
      <div className="w-full sm:w-1/3">
        <h4 className="text-white text-lg md:text-[20px]">Sobre</h4>
        <div className="text-[#848C99] text-sm md:text-base">
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Missão
          </p>
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Contato
          </p>
          <p onClick={() => (window.location.href = "/#")} className="hover:text-[#FFFFFF] cursor-pointer py-1">
            Privacidade
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="border-t border-gray-700 p-4 md:p-6 bg-[#1F2937]">
    <p className="text-gray-400 text-xs md:text-sm text-center">
      © {new Date().getFullYear()} Zero2Fit. Todos os direitos reservados.
    </p>
  </div>
</footer>

    </div>
  );
}
