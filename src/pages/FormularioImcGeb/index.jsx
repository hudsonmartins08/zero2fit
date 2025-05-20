import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import React, { useState, useEffect } from "react";

export default function CalculadoraSaude() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [imc, setImc] = useState(null);
  const [classificacaoIMC, setClassificacaoIMC] = useState("");
  const [geb, setGeb] = useState(null);
  const [corFundo, setCorFundo] = useState("bg-gray-100");
  const [historico, setHistorico] = useState([]);

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setCorFundo("bg-blue-100");
      return "Abaixo do peso";
    }
    if (imc < 25) {
      setCorFundo("bg-green-100");
      return "Peso normal";
    }
    if (imc < 30) {
      setCorFundo("bg-yellow-100");
      return "Sobrepeso";
    }
    if (imc < 35) {
      setCorFundo("bg-orange-200");
      return "Obesidade grau I";
    }
    if (imc < 40) {
      setCorFundo("bg-orange-400");
      return "Obesidade grau II";
    }
    setCorFundo("bg-red-400");
    return "Obesidade grau III";
  };

  const calcular = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const idadeNum = parseInt(idade);

    if (!pesoNum || !alturaNum || !idadeNum) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    const imcFinal = imcCalculado.toFixed(2);
    const classificacao = classificarIMC(imcCalculado);

    setImc(imcFinal);
    setClassificacaoIMC(classificacao);

    const alturaCm = alturaNum * 100;
    let gebCalculado = 0;

    if (sexo === "masculino") {
      gebCalculado = 66 + 13.8 * pesoNum + 5 * alturaCm - 6.8 * idadeNum;
    } else {
      gebCalculado = 655 + 9.6 * pesoNum + 1.8 * alturaCm - 4.7 * idadeNum;
    }

    setGeb(gebCalculado.toFixed(2));

    const novoRegistro = {
      data: new Date().toLocaleString(),
      peso: pesoNum,
      altura: alturaNum,
      imc: imcFinal,
      classificacao,
    };

    const novoHistorico = [novoRegistro, ...historico].slice(0, 5); // Limita a 5 registros
    setHistorico(novoHistorico);
    localStorage.setItem("historicoIMC", JSON.stringify(novoHistorico));
  };

  const limpar = () => {
    setPeso("");
    setAltura("");
    setIdade("");
    setSexo("masculino");
    setImc(null);
    setClassificacaoIMC("");
    setGeb(null);
    setCorFundo("bg-gray-100");
  };

  
  return (
    <PageWrapper>
     <section className=" flex gap-4 bg-gradient-to-t from-[#767373] to-[#151110]w-full h-screen m-8">
      <div 
        className={`max-w-1/2 max-h-auto p-6 rounded-2xl shadow-lg ${corFundo}`}
      >
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Calculadora de IMC e GEB
        </h2>
        <h3 className=" maw-w-md flex justify-center flex- ">
          Aqui você descobre
        </h3>
        <div className=" space-y-4">
          <input
            type="number"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Altura (m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Idade (anos)"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>

          <div className=" flex gap-2">
            <button
              onClick={calcular}
              className="w-full bg-[#178080] text-white py-2 rounded hover:bg-[#FF7F6A]"
            >
              Calcular
            </button>
            <button
              onClick={limpar}
              className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
            >
              Limpar
            </button>
          </div>

          {imc && (
            <div className="mt-4 p-4 bg-white rounded text-center">
              <p>
                <strong>IMC:</strong> {imc}
              </p>
              <p>
                <strong>Classificação:</strong> {classificacaoIMC}
              </p>
              <p>
                <strong>GEB:</strong> {geb} kcal/dia
              </p>

              <div className="mt-4 w-full h-4 bg-gray-300 rounded">
                <div
                  className="h-4 bg-blue-600 rounded"
                  style={{ width: `${(parseFloat(imc) / 40) * 100}%` }}
                />
              </div>
            </div>
          )}

          {historico.length > 0 && (
            <div className="mt-6 p-4 bg-white rounded">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Histórico recente
              </h3>
              <ul className="text-sm space-y-1">
                {historico.map((item, index) => (
                  <li key={index}>
                    📅 {item.data} — <strong>{item.imc}</strong> (
                    {item.classificacao})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="  w-1/2 rounded-2xl flex flex-col items-center justify-top text-[#FF7F6A] ">
        <h1>Explicando</h1>
        <p>O IMC (Índice de Massa Corporal) é uma medida utilizada para 
          avaliar se uma pessoa está dentro 
          do peso considerado saudável para sua altura. 
          Ele é amplamente utilizado por profissionais de saúde 
          como um indicativo geral da composição corporal, 
          ajudando a identificar riscos associados ao baixo peso, 
          sobrepeso e obesidade.
        </p>

          <p>Classificação do IMC
            O IMC é dividido em categorias para facilitar a interpretação:
          </p>
            <ul> 
              <li>Abaixo do peso: IMC menor que 18,5</li>
              <li>Peso normal: IMC entre 18,5 e 24,9</li>
              <li>Sobrepeso: IMC entre 25 e 29,9</li>
              <li>Obesidade grau I: IMC entre 30 e 34,9</li>
              <li>Obesidade grau II: IMC entre 35 e 39,9</li>
              <li>Obesidade grau III (mórbida): IMC maior ou igual a 40</li>
            </ul>

            <p>
              Imagine que o seu corpo é uma fábrica que nunca para de funcionar. Mesmo quando você está dormindo ou descansando, 
              ele continua trabalhando para manter você vivo. O Gasto Energético Basal (GEB) é a quantidade de energia que essa 
              fábrica precisa para fazer coisas muito importantes, como:
              Manter o coração batendo 🫀
              Fazer você respirar 😮‍💨
              Manter seu corpo quentinho 🌡️
              Deixar seu cérebro funcionando 🧠
              Essa energia vem da comida que você come! É como se fosse o "combustível" 
              para sua fábrica corporal. Quanto maior a fábrica (ou seja, o corpo da pessoa), mais energia ela precisa. Por isso, 
              adultos gastam mais energia do que crianças, e pessoas com mais músculos precisam de mais combustível para manter tudo funcionando.
              Dá para imaginar o GEB como a energia que um robô precisaria para continuar ligado, mesmo sem se mexer. Legal, né? 😃
            </p>
      </div>
          
    </section>
    </PageWrapper>
  );
}
