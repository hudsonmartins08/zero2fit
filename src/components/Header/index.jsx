import { LuDumbbell } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
  return (
    <div className="w-full h-[70px] bg-[#178080] flex items-center justify-between px-10">
      <div className="flex items-center gap-2 h-full">
        <LuDumbbell className="text-white text-[30px] cursor-pointer" />
        <h1
          onClick={() => (window.location.href = "/")}
          className="text-white text-[30px] font-bold flex gap-2 cursor-pointer"
        >
          {" "}
          Zero2Fit
        </h1>
      </div>
      <nav className="flex space-x-6 font-semibold max-md:hidden">
        <a href="/" className="text-white hover:text-[#FF7F6A]">
          Home
        </a>
        <a href="/FormularioImcGeb" className="text-white hover:text-[#FF7F6A]">
          Calculadora de IMC
        </a>
        <a href="/exercise" className="text-white hover:text-[#FF7F6A]">
          Exercícios
        </a>
        <a href="/nutricao" className="text-white hover:text-[#FF7F6A]">
          Nutrição
        </a>
        <a href="/localizacao" className="text-white hover:text-[#FF7F6A]">
          Localização
        </a>
      </nav>
      <div className="hidden max-md:flex items-center  text-white">
        <Menu >
          <MenuButton>
            <IoMdMenu size={25} />
          </MenuButton>
          <MenuItems anchor="bottom" className="bg-gray-200 p-2 gap-2 rounded-lg shadow-lg flex flex-col font-semibold">
            <MenuItem>
              <button className="border border-[#ff7f6a] rounded-lg hover:bg-[#178080] hover:text-white" onClick={() => (window.location.href = "/")}>Home</button>
            </MenuItem>
            <MenuItem>
              <button className="border border-[#ff7f6a] rounded-lg hover:bg-[#178080] hover:text-white"
                onClick={() => (window.location.href = "/FormularioImcGeb")}
              >
                Calc. de IMC
              </button >
            </MenuItem>
            <MenuItem>
              <button className="border border-[#ff7f6a] rounded-lg hover:bg-[#178080] hover:text-white" onClick={() => (window.location.href = "/exercise")}>
                Exercícios
              </button>
            </MenuItem>
            <MenuItem>
              <button className="border border-[#ff7f6a] rounded-lg hover:bg-[#178080] hover:text-white" onClick={() => (window.location.href = "/nutricao")}>
                Nutrição
              </button>
            </MenuItem>
            <MenuItem>
              <button className="border border-[#ff7f6a] rounded-lg hover:bg-[#178080] hover:text-white" onClick={() => (window.location.href = "/localizacao")}>
                Localização
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
