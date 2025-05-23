import Header from "@/components/Header";
import { IoLocationOutline } from "react-icons/io5";

import { useState } from "react";

export default function Localizacao() {
  const [showAcademias, setShowAcademias] = useState(false);
  const [showPersonais, setShowPersonais] = useState(false);
  const [showLojas, setShowLojas] = useState(false);
  const [showNutris, setShowNutris] = useState(false);

  const academias = [
    {
      nome: "Selfit Academia - aldeota",
      Localizacao: "Rua Eduardo Garcia, 300",
    },
    {
      nome: "Greenlife Academia",
      Localizacao: "R. Prof.Dias da Rocha, 800",
    },
    {
      nome: "Smart Fit Academia",
      Localizacao: "AV. Santos Dumont, 3060",
    },
  ];
  const personais = [
    {
      nome: "Prof. João Medeiros",
      Localizacao: "Rua Domingos Olímpio, 200",
      telefone: "85 99999-9999",
    },
    {
      nome: "Prof. Ranche Crudes",
      Localizacao: "Rua do Pica pau, 150",
      telefone: "85 99999-9999",
    },
    {
      nome: "Prof. Hulk Magrelo",
      Localizacao: "Rua Legendários, 08",
      telefone: "85 99999-9999",
    },
  ];
  const lojas = [
    {
      nome: "Dark supplements",
      Localizacao: "Rua Domingos Olímpio, 200",
    },
    {
      nome: "Alquimia Drogas",
      Localizacao: "Rua da Paz, 150",
    },
    {
      nome: "Drogaria Digital College",
      Localizacao: "Rua Manhattan, 1510",
    },
    
  ];
  const nutris = [
    {
      nome: "DR. Ana Carla",
      Localizacao: "Rua Domingos Olímpio, 200",
      telefone: "85 99999-9999",
    },
    {
      nome: "DR. Bugiganga",
      Localizacao: "Rua da Paz, 150",
      telefone: "85 99999-9999",
    },
    {
      nome: "DR. Ramon Dino",
      Localizacao: "Rua da Paz, 150",
      telefone: "85 99999-9999",
    },
  ];

  return (
    <div className=" w-full h-auto max-md:w-full min-h-screen bg-gray-100 ">
      <Header />
      <h1 className="text-[#178080] text-[35px] font-bold flex items-center justify-center pt-6 m-4 ">
        Encontre recursos fitness
      </h1>
      <p className="flex items-center justify-center font-semibold text-[20px]">
        Descubra academias, treinadores, lojas de fitness e nutricionistas em
        sua área
      </p>
      <div className="m-15 mr-45 max-md:w-full ml-45">
        <div className="h-15 flex items-center justify-center  bg-[#178080] rounded-t-lg gap-2">
          <IoLocationOutline
            size={35}
            className="text-white text-[25px] flex font-semibold pt-2"
          />
          <h1 className="text-white text-[25px] flex font-semibold pt-2">
            Recursos fitness perto de você
          </h1>
        </div>
        <div className="w-full h-72 flex items-center justify-center pt-4 bg-gray-200 rounded-b-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15925.356313163113!2d-38.516513155269564!3d-3.736083129608956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sacademias%20aldeota!5e0!3m2!1spt-BR!2sbr!4v1747924645366!5m2!1spt-BR!2sbr"
            width="1400"
            height="268"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className=" h-auto pt-4 mr-45 ml-45 pb-10 max-md:w-full  bg-gray-200 rounded-2xl">
        <div className="relative w-[25%] ml-20"></div>
        <div className="flex justify-center  m-2 mt-4">
          <div className="w-full  items-center justify-center gap-2 flex flex-wrap max-md:flex-col">
            <button
              className="w-[25%] max-md:w-full text-[20px] bg-[#ff7f6a] text-[#178080] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)]  hover:bg-[#178080] hover:text-[#ff7f6a] cursor-pointer"
              onClick={() => {
                setShowAcademias(!showAcademias);
                setShowPersonais(false);
                setShowLojas(false);
                setShowNutris(false);
              }}
            >
              Academias/CT's
            </button>
            <button
              className=" w-[23%] max-md:w-full text-[20px] bg-[#178080] text-[#ff7f6a] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#ff7f6a] hover:text-[#178080] cursor-pointer"
              onClick={() => {
                setShowPersonais(!showPersonais);
                setShowAcademias(false);
                setShowLojas(false);
                setShowNutris(false);
              }}
            >
              Personal trainer's
            </button>
            <button
              className=" w-[25%] max-md:w-full text-[20px] bg-[#ff7f6a] text-[#178080] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#178080] hover:text-[#ff7f6a] cursor-pointer"
              onClick={() => {
                setShowLojas(!showLojas);
                setShowAcademias(false);
                setShowPersonais(false);
                setShowNutris(false);
              }}
            >
              Lojas
            </button>
            <button
              className=" w-[25%] max-md:w-full text-[20px] bg-[#178080] text-[#ff7f6a] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#ff7f6a] hover:text-[#178080] cursor-pointer"
              onClick={() => {
                setShowNutris(!showNutris);
                setShowAcademias(false);
                setShowPersonais(false);
                setShowLojas(false);
              }}
            >
              Nutricionistas
            </button>
            <div className=""></div>
          </div>
        </div>
        {showAcademias && (
          <ul className="mt-2 ml-6 text-[20px] font-semibold text-[#6E7575F7]">
            {academias.map((item, idx) => (
              <div key={idx}>
                <h1 className="text-[#178080] font-medium py-3">{item.nome}</h1>
                <p>{item.Localizacao} </p>
              </div>
            ))}
          </ul>
        )}
        {showPersonais && (
          <ul className="mt-2 ml-6 text-[20px] font-semibold text-[#6E7575F7]">
            {personais.map((item, idx) => (
              <div className="" key={idx}>
                <h1 className="text-[#178080] font-medium py-3">{item.nome}</h1>
                <p>{item.Localizacao} </p>
                <p>{item.telefone}</p>
              </div>
            ))}
          </ul>
        )}
        {showLojas && (
          <ul className="mt-2 ml-6 text-[20px] font-semibold text-[#6E7575F7]">
            {lojas.map((item, idx) => (
              <div key={idx}>
                <h1 className="text-[#178080] font-medium py-3">{item.nome}</h1>
                <p>{item.Localizacao} </p>
              </div>
            ))}
          </ul>
        )}
        {showNutris && (
          <ul className="mt-2 ml-6 text-[20px] font-semibold text-[#6E7575F7]">
            {nutris.map((item, idx) => (
              <div key={idx}>
                <h1 className="text-[#178080] font-medium py-3">{item.nome}</h1>
                <p>{item.Localizacao} </p>
                <p>{item.telefone}</p>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="h-full flex max-md:flex-col max-md:w-full items-center justify-between pt-2 mt-6 mr-45 ml-45 bg-gray-200 rounded-2xl">
        <div className="m-4">
          <h1 className="text-[#178080] text-[35px] font-bold pt-6 m-1 ">
            Como escolher uma academia?
          </h1>
          <p className=" font-semibold text-[19px] p-2">
            • Considere a localização e a conveniência de sua casa ou trabalho
          </p>
          <p className="font-semibold text-[19px] p-2 ">
            • Verifique a variedade e disponibilidade de equipamentos{" "}
          </p>
          <p className="font-semibold text-[19px] p-2">
            • Procure limpeza e manutenção das instalações
          </p>
          <p className="font-semibold text-[19px] p-2">
            • Avalie as ofertas de aulas se você se interessar a você
          </p>
          <p className="font-semibold text-[19px] p-2">
            • Considere os custos de associação e a flexibilidade do contrato
          </p>
        </div>
        <div className="mr-4">
          <h1 className="text-[#178080] text-[35px] font-bold pt-6 m-1 ">
            Encontrar o profissional certo:
          </h1>
          <p className="font-semibold text-[19px] p-2">
            • Considere suas necessidades e objetivos pessoais.
          </p>
          <p className="font-semibold text-[19px] p-2">
            • Procure experiência com seus objetivos ou necessidades específicas
          </p>
          <p className="font-semibold text-[19px] p-2">
            • Avalie seu estilo de coaching e comunicação
          </p>
          <p className="font-semibold text-[19px] p-2">
            •Verifique referências ou avaliações de outros clientes
          </p>
          <p className="font-semibold text-[19px] p-2">
            •Discuta a flexibilidade de preços e agendamento
          </p>
        </div>
      </div>
    </div>
  );
}
