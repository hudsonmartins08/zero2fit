import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
  const [showPlanoNutricional, setShowPlanoNutricional] = useState(false);
  const [nivelAtividade, setNivelAtividade] = useState("moderado");

  useEffect(() => {
    const historicoSalvo = localStorage.getItem("historicoIMC");
    if (historicoSalvo) {
      setHistorico(JSON.parse(historicoSalvo));
    }
  }, []);

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

  const calcularPlanoNutricional = () => {
    if (!imc || !geb) return null;

    const fatorAtividade = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muitoIntenso: 1.9,
    };

    const necessidadeCalorica = Math.round(
      geb * fatorAtividade[nivelAtividade]
    );

    let distribuicaoMacros;
    if (classificacaoIMC.includes("Abaixo do peso")) {
      distribuicaoMacros = { carboidratos: 50, proteinas: 25, gorduras: 25 };
    } else if (classificacaoIMC.includes("Peso normal")) {
      distribuicaoMacros = { carboidratos: 45, proteinas: 30, gorduras: 25 };
    } else {
      distribuicaoMacros = { carboidratos: 40, proteinas: 35, gorduras: 25 };
    }

    // Ajuste para sexo feminino
    if (sexo === "feminino") {
      distribuicaoMacros.proteinas += 5;
      distribuicaoMacros.carboidratos -= 5;
    }

    const ajusteCalorico = classificacaoIMC.includes("Abaixo do peso")
      ? 300
      : classificacaoIMC.includes("Peso normal")
      ? 0
      : -300;

    const caloriasDiarias = necessidadeCalorica + ajusteCalorico;

    return {
      necessidadeCalorica,
      caloriasDiarias,
      distribuicaoMacros,
      classificacao: classificacaoIMC,
      imc,
      geb,
      ajusteCalorico,
      macrosGramas: {
        carboidratos: Math.round(
          (caloriasDiarias * (distribuicaoMacros.carboidratos / 100)) / 4
        ),
        proteinas: Math.round(
          (caloriasDiarias * (distribuicaoMacros.proteinas / 100)) / 4
        ),
        gorduras: Math.round(
          (caloriasDiarias * (distribuicaoMacros.gorduras / 100)) / 9
        ),
      },
    };
  };

  const gerarCardapioExemplo = (plano) => {
    if (!plano) return null;

    return {
      caféDaManhã: {
        descricao: "Omelete com 2 ovos + 1 fatia de pão integral + 1 fruta",
        nutrientes: "Proteínas: ~20g, Carboidratos: ~30g, Gorduras: ~10g",
      },
      lancheDaManhã: {
        descricao: "Iogurte natural + 1 colher de chia + 5 castanhas",
        nutrientes: "Proteínas: ~10g, Carboidratos: ~15g, Gorduras: ~12g",
      },
      almoço: {
        descricao:
          "100g de frango grelhado + 3 colheres de arroz integral + vegetais à vontade",
        nutrientes: "Proteínas: ~30g, Carboidratos: ~45g, Gorduras: ~8g",
      },
      lancheDaTarde: {
        descricao: "Smoothie de whey protein com banana e aveia",
        nutrientes: "Proteínas: ~25g, Carboidratos: ~40g, Gorduras: ~5g",
      },
      jantar: {
        descricao: "150g de peixe + batata-doce + salada verde",
        nutrientes: "Proteínas: ~35g, Carboidratos: ~50g, Gorduras: ~10g",
      },
    };
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

    const novoHistorico = [novoRegistro, ...historico].slice(0, 5);
    setHistorico(novoHistorico);
    localStorage.setItem("historicoIMC", JSON.stringify(novoHistorico));

    // Salva os dados para a página de nutrição
    const dadosParaSalvar = {
      imc: imcFinal,
      geb: gebCalculado,
      classificacao,
      peso: pesoNum,
      altura: alturaNum,
      idade: idadeNum,
      sexo,
    };
    localStorage.setItem("dadosCalculadora", JSON.stringify(dadosParaSalvar));
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
    setShowPlanoNutricional(false);
  };

  const planoNutricional = calcularPlanoNutricional();
  const cardapioExemplo = gerarCardapioExemplo(planoNutricional);

  return (
    <PageWrapper>
      <section className="flex flex-col md:flex-row gap-8 p-6 w-full min-h-screen bg-[#178080]">
        {/* Card da Calculadora */}
        <div
          className={`w-full md:w-1/2 p-8 rounded-2xl shadow-lg ${corFundo} transition-colors duration-300`}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Calculadora de Saúde
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 70.5"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178080] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Altura (m)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 1.75"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178080] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Idade (anos)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 30"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178080] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sexo
                </label>
                <select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178080] focus:outline-none"
                >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={calcular}
                className="flex-1 bg-[#178080] text-white py-3 rounded-lg hover:bg-[#FF7F6A] transition-colors font-medium"
              >
                Calcular
              </button>
              <button
                onClick={limpar}
                className="flex-1 bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition-colors font-medium"
              >
                Limpar
              </button>
            </div>

            {imc && (
              <div className="mt-6 p-6 bg-white rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  Resultados
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">IMC:</span>
                    <span className="font-bold">{imc}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Classificação:</span>
                    <span className="font-bold">{classificacaoIMC}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">GEB:</span>
                    <span className="font-bold">{geb} kcal/dia</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Abaixo do peso</span>
                    <span>Obesidade</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500"
                      style={{
                        width: `${(Math.min(parseFloat(imc), 40) / 40) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1 text-gray-500">
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35</span>
                    <span>40+</span>
                  </div>
                </div>

                {!showPlanoNutricional ? (
                  <button
                    onClick={() => setShowPlanoNutricional(true)}
                    className="mt-6 w-full bg-[#FF7F6A] text-white py-3 rounded-lg hover:bg-[#178080] transition-colors font-medium"
                  >
                    Ver Plano Nutricional
                  </button>
                ) : (
                  <Link href="/nutricao/dieta-personalizada">
                    
                  </Link>
                )}
              </div>
            )}

            {historico.length > 0 && (
              <div className="mt-6 p-6 bg-white rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  Histórico
                </h3>
                <ul className="space-y-3">
                  {historico.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <span className="text-sm text-gray-500">
                          {item.data}
                        </span>
                        <p className="font-medium">
                          {item.imc} - {item.classificacao}
                        </p>
                      </div>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {item.peso}kg / {item.altura}m
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Card de Explicação ou Plano Nutricional */}
        <div className="w-full md:w-1/2 p-8 rounded-2xl shadow-lg bg-white">
          {showPlanoNutricional && imc ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-6 text-[#178080]">
                Plano Nutricional Preliminar
              </h2>

              <div className="space-y-8">
                <div className="bg-[#f7fafc] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-[#FF7F6A]">
                    Recomendações Calóricas
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Nível de Atividade:</p>
                      <select
                        value={nivelAtividade}
                        onChange={(e) => setNivelAtividade(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      >
                        <option value="sedentario">Sedentário</option>
                        <option value="leve">Levemente Ativo</option>
                        <option value="moderado">Moderadamente Ativo</option>
                        <option value="intenso">Muito Ativo</option>
                        <option value="muitoIntenso">Extremamente Ativo</option>
                      </select>
                    </div>
                    <div>
                      <p>
                        Necessidade calórica diária:{" "}
                        <strong>
                          {planoNutricional?.necessidadeCalorica} kcal
                        </strong>
                      </p>
                      <p>
                        Meta calórica:{" "}
                        <strong>
                          {planoNutricional?.caloriasDiarias} kcal/dia
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f7fafc] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-[#FF7F6A]">
                    Distribuição de Macronutrientes
                  </h3>
                  <div className="fle flex-cols-3 sm:flex-row gap-2 sm:gap-4 text-center">
                    <div className="flex-1 bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-bold text-sm sm:text-base text-blue-700">Carboidratos</p>
                      <p className="text-sm sm:text-base">
                        {planoNutricional?.distribuicaoMacros.carboidratos}%
                      </p>
                      <p className="font-semibold text-sm sm:text-base">
                        {planoNutricional?.macrosGramas.carboidratos}g
                      </p>
                    </div>
                    <div className="flex-1 bg-green-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-bold text-sm sm:text-base text-green-700">Proteínas</p>
                      <p>{planoNutricional?.distribuicaoMacros.proteinas}%</p>
                      <p className="text-sm sm:text-base font-semibold">
                        {planoNutricional?.macrosGramas.proteinas}g
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-bold text-sm sm:text text-yellow-700">Gorduras</p>
                      <p>{planoNutricional?.distribuicaoMacros.gorduras}%</p>
                      <p className="text-sm sm:text-base font-semibold">
                        {planoNutricional?.macrosGramas.gorduras}g
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e7f4f4] p-6 rounded-xl border border-[#178080]">
                  <h3 className="text-xl font-semibold mb-3 text-[#178080]">
                    Dicas Nutricionais
                  </h3>
                  {classificacaoIMC.includes("Abaixo do peso") ? (
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Consuma alimentos ricos em nutrientes e calorias</li>
                      <li>Faça de 5 a 6 refeições por dia</li>
                      <li>Inclua proteínas em todas as refeições</li>
                    </ul>
                  ) : classificacaoIMC.includes("Peso normal") ? (
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Mantenha uma dieta equilibrada</li>
                      <li>Prefira carboidratos complexos</li>
                      <li>Inclua proteínas magras</li>
                    </ul>
                  ) : (
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Foque em alimentos com baixa densidade calórica</li>
                      <li>Mantenha a ingestão de proteínas alta</li>
                      <li>Reduza carboidratos refinados</li>
                    </ul>
                  )}
                </div>
                {/* mudança de botão */}
                <Link href="/nutricao/dieta-personalizada">
                  <button className="mt-6 w-full bg-[#178080] text-white py-3 rounded-lg hover:bg-[#FF7F6A] transition-colors font-medium">
                    Ver Plano Nutricional Detalhado
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-6 text-[#178080]">
                Entenda seu IMC e GEB
              </h2>

              <div className="space-y-8">
                <div className="bg-[#f7fafc] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-semibold mb-3 text-[#FF7F6A]">
                    O que é IMC?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    O <strong>Índice de Massa Corporal (IMC)</strong> é uma
                    medida utilizada para avaliar se uma pessoa está dentro do
                    peso considerado saudável para sua altura.
                  </p>
                  {/* Restante do conteúdo explicativo... */}
                </div>
                {/* Restante das explicações... */}
              </div>
            </>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
