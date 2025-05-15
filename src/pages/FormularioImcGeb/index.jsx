import React, { useState } from "react";

export default function CalculadoraSaude() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [imc, setImc] = useState(null);
  const [classificacaoIMC, setClassificacaoIMC] = useState("");
  const [geb, setGeb] = useState(null);

  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau I";
    if (imc < 40) return "Obesidade grau II";
    return "Obesidade grau III";
  };

  const calcular = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura); // altura em metros
    const idadeNum = parseInt(idade);

    if (!pesoNum || !alturaNum || !idadeNum) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));
    setClassificacaoIMC(classificarIMC(imcCalculado));

    const alturaCm = alturaNum * 100;
    let gebCalculado = 0;

    if (sexo === "masculino") {
      gebCalculado = 66 + (13.8 * pesoNum) + (5 * alturaCm) - (6.8 * idadeNum);
    } else {
      gebCalculado = 655 + (9.6 * pesoNum) + (1.8 * alturaCm) - (4.7 * idadeNum);
    }

    setGeb(gebCalculado.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Calculadora de IMC e GEB</h2>

      <div className="space-y-4">
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

        <button
          onClick={calcular}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calcular
        </button>

        {imc && (
          <div className="mt-4 p-4 bg-gray-100 rounded text-center">
            <p><strong>IMC:</strong> {imc}</p>
            <p><strong>Classificação:</strong> {classificacaoIMC}</p>
            <p><strong>GEB:</strong> {geb} kcal/dia</p>
          </div>
        )}
      </div>
    </div>
  );
}
