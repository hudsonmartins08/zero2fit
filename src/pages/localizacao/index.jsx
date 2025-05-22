import Header from "@/components/Header";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
export default function Localizacao() {
  return (
    <div className="w-full h-auto min-h-screen bg-gray-100 ">
      <Header />
      <h1 className="text-[#178080] text-[35px] font-bold flex items-center justify-center pt-6 m-4 ">
        Encontre recursos fitness
      </h1>
      <p className="flex items-center justify-center font-semibold text-[20px]">
        Descubra academias, treinadores, lojas de fitness e nutricionistas em
        sua área
      </p>
      <div className="m-15 mr-45 ml-45">
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
            style={{border:0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className=" h-auto pt-4 mr-45 ml-45 bg-gray-200">
        <div className="relative w-[25%] ml-20"></div>
        <div className="flex justify-center  m-2 mt-4">
          <div className="w-full  items-center justify-center gap-2 flex flex-wrap">
            <button className="w-[25%] text-[20px] bg-[#ff7f6a] text-[#178080] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)]  hover:bg-[#178080] hover:text-[#ff7f6a] cursor-pointer">
              Academias/CT's
            </button>
            <button className=" w-[23%] text-[20px] bg-[#178080] text-[#ff7f6a] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#ff7f6a] hover:text-[#178080] cursor-pointer">
              Personal trainer's
            </button>
            <button className=" w-[25%] text-[20px] bg-[#ff7f6a] text-[#178080] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#178080] hover:text-[#ff7f6a] cursor-pointer">
              Lojas
            </button>
            <button className=" w-[25%] text-[20px] bg-[#178080] text-[#ff7f6a] font-semibold py-2 rounded-lg animate-[var(--animate-pulse-shadow)] hover:bg-[#ff7f6a] hover:text-[#178080] cursor-pointer">
              Nutricionistas
            </button>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
