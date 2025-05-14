export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-[40%] h-full bg-[#178080] flex flex-col items-start ">
        <h1 className="w-[60%] text-[50px] text-white font-bold ">
          Comece aqui sua jornada fitness com a Zero2Fit
        </h1>
        <h2 className="w-[60%] text-[20px] text-white font-semibold">
          Planos de treino personalizados, conselhos nutricionais e recursos de
          condicionamento físico para ajudá-lo a atingir seus objetivos de
          saúde.
        </h2>
        <button className=" h-[45px] p-3 font-semibold justify-center flex text-white border outline-none rounded-md bg-[#FF7F6A] hover:bg-[#FF7F6A]/80">
          Comece sua jornada
        </button>
      </div>
      <div className="w-[60%] flex items-center h-screen">
        <video autoPlay loop muted className="w-[60%] h-screen object-cover absolute -z-10">
         <source src="/videos/mainVideo.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    
  );
}
