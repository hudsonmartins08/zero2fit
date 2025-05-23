import Card from "@/components/Card";
import Header from "@/components/Header";
import { FaSearch } from "react-icons/fa";

export default function Exercise() {
  return (
    <div className=" w-full h-auto max-sm:w-full min-h-screen bg-[#f9fafb] ">
      <Header />
      <h1 className="text-[30px] font-bold text-[#178080] flex items-center justify-center pt-4">
        Exercícios recomendados
      </h1>
      <p className="text-[#178080] text-[20px] font-semibold flex items-center justify-center">
        Baseado no seu IMC
      </p>
      <div className="w-full flex items-center  max-md:justify-center">
        <div className="flex items-center w-[350px] h-[40px] mx-4 p-4 rounded-lg border border-[#178080] bg-white shadow-lg mt-4 ml-20 max-md:ml-2 max-md:justify-center">
          <input
            type="text"
            placeholder="Pesquisar exercícios"
            className="outline-none rounded-lg w-[80%] "
          />{" "}
          <FaSearch className="w-[20%]" />
        </div>
      </div>
      <div className="w-full h-auto min-h-screen max-sm:w-full flex flex-wrap gap-4 py-8 items-center justify-center">
        <Card
          titulo={"Flexões"}
          categoria={"iniciante"}
          alvo={"Alvo: Peito, Ombros, Tríceps"}
          descricao={
            "Um exercício clássico de peso corporal que trabalha o peito, ombros, tríceps e núcleo."
          }
          p1={
            "1. Comece em uma posição de prancha com as mãos ligeiramente mais largas que a largura dos ombros"
          }
          p2={
            "2. Dobre os cotovelos e abaixe o corpo em direção ao chão, mantendo o núcleo contraído."
          }
          p3={"3. Empurre-se de volta à posição inicial."}
          p4={"4. Repita por 10-15 repetições."}
        />
        <Card
          titulo={"Prancha"}
          categoria={"iniciante"}
          alvo={"Alvo: Núcleo, Ombros"}
          descricao={
            "Um exercício de core isométrico que melhora a estabilidade, a postura e a força do core."
          }
          p1={
            "1. Comece em uma posição de flexão, depois dobre os cotovelos e descanse o peso nos antebraços."
          }
          p2={"2. Mantenha o corpo em linha reta da cabeça aos calcanhares"}
          p3={"3. Engate o núcleo e mantenha a posição"}
          p4={"4. Manter 20-30 segundos"}
        />
        <Card
          titulo={"Alpinista"}
          categoria={"intermediario"}
          alvo={"Alvo: Núcleo, Ombros, Pernas."}
          descricao={
            "Um exercício dinâmico que combina condicionamento e força."
          }
          p1={"1.Posição de flexão com os braços esticados"}
          p2={
            "2.Traga um joelho em direção ao peito, em seguida, troque rapidamente as pernas"
          }
          p3={"3.Continue alternando as pernas em um movimento de corrida"}
          p4={"4.Mantenha um ritmo acelerado pelo tempo desejado"}
        />
        <Card
          titulo={"Linha com halteres"}
          categoria={"intermediario"}
          alvo={"Alvo: Costas, Bíceps"}
          descricao={
            "Um exercício de tração da parte superior do corpo que visa os músculos das costas."
          }
          p1={
            "1.Coloque um joelho e a mão em um banco, com o pé oposto no chão."
          }
          p2={"2.Segure o haltere com a mão livre com o braço estendido."}
          p3={
            "3.Puxe o haltere para a caixa torácica, mantendo o cotovelo próximo ao corpo."
          }
          p4={"4.Mantenha um peso menor com controle e repetição."}
        />
        <Card
          titulo={"Levantamento terra"}
          categoria={"avançado"}
          alvo={"Alvo: Costas, Glúteos, Isquiotibiais"}
          descricao={
            "Um movimento composto que fortalece a cadeia posterior e melhora a mobilidade do quadril."
          }
          p1={
            "1.Em pé com os pés afastados na largura do quadril, barra no meio do pé"
          }
          p2={
            "2.Dobre os quadris e joelhos, segure a barra do lado de fora das pernas."
          }
          p3={
            "3. Mantendo as costas retas, levante a barra estendendo os quadris e os joelhos."
          }
          p4={"4.Retorne a barra ao chão dobrando quadris e joelhos."}
        />
        <Card
          titulo={"Agachamento com barra"}
          categoria={"avançado"}
          alvo={"Alvo: Pernas, Glúteos"}
          descricao={
            "Um exercício composto que trabalha os músculos das pernas e glúteos."
          }
          p1={
            "1.Coloque a barra nas costas, com os pés afastados na largura dos ombros."
          }
          p2={
            "2.Dobre os joelhos e empurre os quadris para trás, mantendo o peito erguido e sempre controlando a descida."
          }
          p3={"3.Abaixe-se até que as coxas fiquem paralelas ao chão."}
          p4={"4.Empurre-se de volta à posição inicial."}
        />
      </div>
    </div>
  );
}
