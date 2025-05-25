// pages/nutricao/dieta-personalizada.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';

export default function DietaPersonalizada() {
  const router = useRouter();
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const [planoNutricional, setPlanoNutricional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nivelAtividade, setNivelAtividade] = useState('moderado');

  useEffect(() => {
    const carregarDados = () => {
      const dadosSalvos = localStorage.getItem('dadosCalculadora');
      if (dadosSalvos) {
        const { imc, geb, classificacao, peso, altura, idade, sexo } = JSON.parse(dadosSalvos);
        setDadosUsuario({ imc, geb, classificacao, peso, altura, idade, sexo });
        calcularPlanoNutricional(imc, geb, classificacao, sexo, nivelAtividade);
      } else {
        router.push('/calculadora-imc');
      }
      setLoading(false);
    };

    carregarDados();
  }, [router, nivelAtividade]);

  const calcularPlanoNutricional = (imc, geb, classificacao, sexo, atividade) => {
    const fatorAtividade = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muitoIntenso: 1.9
    };

    const necessidadeCalorica = Math.round(geb * fatorAtividade[atividade]);
    
    let distribuicaoMacros;
    if (classificacao.includes('Abaixo do peso')) {
      distribuicaoMacros = { carboidratos: 50, proteinas: 25, gorduras: 25 };
    } else if (classificacao.includes('Peso normal')) {
      distribuicaoMacros = { carboidratos: 45, proteinas: 30, gorduras: 25 };
    } else {
      distribuicaoMacros = { carboidratos: 40, proteinas: 35, gorduras: 25 };
    }

    // Ajuste para sexo feminino
    if (sexo === 'feminino') {
      distribuicaoMacros.proteinas += 5;
      distribuicaoMacros.carboidratos -= 5;
    }

    const ajusteCalorico = classificacao.includes('Abaixo do peso') ? 300 : 
                          classificacao.includes('Peso normal') ? 0 : -300;

    const caloriasDiarias = necessidadeCalorica + ajusteCalorico;

    const plano = {
      necessidadeCalorica,
      caloriasDiarias,
      distribuicaoMacros,
      classificacao,
      imc,
      geb,
      ajusteCalorico,
      macrosGramas: {
        carboidratos: Math.round((caloriasDiarias * (distribuicaoMacros.carboidratos/100)) / 4),
        proteinas: Math.round((caloriasDiarias * (distribuicaoMacros.proteinas/100)) / 4),
        gorduras: Math.round((caloriasDiarias * (distribuicaoMacros.gorduras/100)) / 9)
      }
    };

    setPlanoNutricional(plano);
  };

  const gerarCardapioExemplo = () => {
    if (!planoNutricional) return null;
    return {
      caféDaManhã: {
        descricao: "Omelete com 2 ovos + 1 fatia de pão integral + 1 fruta",
        nutrientes: "Proteínas: ~20g, Carboidratos: ~30g, Gorduras: ~10g"
      },
      lancheDaManhã: {
        descricao: "Iogurte natural + 1 colher de chia + 5 castanhas",
        nutrientes: "Proteínas: ~10g, Carboidratos: ~15g, Gorduras: ~12g"
      },
      almoço: {
        descricao: "100g de frango grelhado + 3 colheres de arroz integral + vegetais à vontade",
        nutrientes: "Proteínas: ~30g, Carboidratos: ~45g, Gorduras: ~8g"
      },
      lancheDaTarde: {
        descricao: "Smoothie de whey protein com banana e aveia",
        nutrientes: "Proteínas: ~25g, Carboidratos: ~40g, Gorduras: ~5g"
      },
      jantar: {
        descricao: "150g de peixe + batata-doce + salada verde",
        nutrientes: "Proteínas: ~35g, Carboidratos: ~50g, Gorduras: ~10g"
      }
    };
  };

  if (loading) {
    return (
      <PageWrapper>
        <div className="flex justify-center items-center h-screen">
          <p>Carregando seus dados...</p>
        </div>
      </PageWrapper>
    );
  }

  if (!dadosUsuario) {
    return (
      <PageWrapper>
        <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Dados não encontrados</h2>
          <p className="mb-6">Parece que você ainda não calculou seu IMC e GEB. Por favor, use nossa calculadora primeiro.</p>
          <Link href="/calculadora-imc">
            <button className="px-6 py-2 bg-[#178080] text-white rounded-md hover:bg-[#FF7F6A] transition">
              Ir para a Calculadora
            </button>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const cardapioExemplo = gerarCardapioExemplo();

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#178080] mb-2">Plano Nutricional Personalizado</h1>
          <p className="text-lg text-gray-600">Baseado no seu IMC e Gasto Energético Basal (GEB)</p>
        </div>

        {/* Resumo dos dados do usuário */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#FF7F6A]">Seus Dados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">IMC</p>
              <p className="text-2xl font-bold">{dadosUsuario.imc}</p>
              <p className="text-sm text-gray-600">{dadosUsuario.classificacao}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">GEB</p>
              <p className="text-2xl font-bold">{dadosUsuario.geb} kcal/dia</p>
              <p className="text-sm text-gray-600">Taxa Metabólica Basal</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Sexo/Idade</p>
              <p className="text-2xl font-bold">{dadosUsuario.sexo === 'masculino' ? 'Homem' : 'Mulher'}, {dadosUsuario.idade} anos</p>
              <p className="text-sm text-gray-600">{dadosUsuario.peso}kg, {dadosUsuario.altura}m</p>
            </div>
          </div>
        </div>

        {/* Seletor de Nível de Atividade */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#FF7F6A]">Seu Nível de Atividade</h2>
          <select 
            value={nivelAtividade}
            onChange={(e) => setNivelAtividade(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178080] focus:outline-none"
          >
            <option value="sedentario">Sedentário (pouco ou nenhum exercício)</option>
            <option value="leve">Levemente ativo (exercício leve 1-3 dias/semana)</option>
            <option value="moderado">Moderadamente ativo (exercício moderado 3-5 dias/semana)</option>
            <option value="intenso">Muito ativo (exercício intenso 6-7 dias/semana)</option>
            <option value="muitoIntenso">Extremamente ativo (exercício muito intenso e trabalho físico)</option>
          </select>
        </div>

        {/* Recomendações nutricionais */}
        {planoNutricional && (
          <>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#FF7F6A]">Recomendações Calóricas</h2>
              
              <div className="mb-6">
                <p className="mb-2">Seu gasto energético diário estimado:</p>
                <p className="text-2xl font-bold text-[#178080]">{planoNutricional.necessidadeCalorica} kcal/dia</p>
              </div>

              <div className="mb-6">
                <p className="mb-2">Meta calórica diária recomendada ({planoNutricional.ajusteCalorico > 0 ? 'superávit' : 'déficit'} de {Math.abs(planoNutricional.ajusteCalorico)} kcal):</p>
                <p className="text-2xl font-bold text-[#178080]">{planoNutricional.caloriasDiarias} kcal/dia</p>
                <p className="text-sm text-gray-600 mt-1">
                  {planoNutricional.ajusteCalorico > 0 ? 
                    'Para ganho de peso saudável' : 
                    planoNutricional.ajusteCalorico < 0 ? 
                    'Para perda de peso saudável' : 
                    'Para manutenção do peso'}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Distribuição de Macronutrientes:</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-blue-50 p-4 rounded-lg">
                    <p className="font-bold text-blue-700">Carboidratos</p>
                    <p>{planoNutricional.distribuicaoMacros.carboidratos}%</p>
                    <p className="font-semibold">{planoNutricional.macrosGramas.carboidratos}g</p>
                  </div>
                  <div className="flex-1 bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-700">Proteínas</p>
                    <p>{planoNutricional.distribuicaoMacros.proteinas}%</p>
                    <p className="font-semibold">{planoNutricional.macrosGramas.proteinas}g</p>
                  </div>
                  <div className="flex-1 bg-yellow-50 p-4 rounded-lg">
                    <p className="font-bold text-yellow-700">Gorduras</p>
                    <p>{planoNutricional.distribuicaoMacros.gorduras}%</p>
                    <p className="font-semibold">{planoNutricional.macrosGramas.gorduras}g</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cardápio exemplo */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#FF7F6A]">Exemplo de Cardápio Diário</h2>
              <p className="mb-4">Aqui está um exemplo de como distribuir seus macronutrientes ao longo do dia:</p>
              
              <div className="space-y-4">
                {Object.entries(cardapioExemplo).map(([refeicao, detalhes]) => (
                  <div key={refeicao} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-medium capitalize">{refeicao.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-gray-800">{detalhes.descricao}</p>
                    <p className="text-sm text-gray-500">{detalhes.nutrientes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dicas nutricionais */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#FF7F6A]">Dicas Nutricionais Personalizadas</h2>
              
              {planoNutricional.classificacao.includes('Abaixo do peso') ? (
                <div className="space-y-4">
                  <p><strong>Para ganho de peso saudável:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consuma alimentos ricos em nutrientes e calorias como abacate, oleaginosas e azeite de oliva</li>
                    <li>Faça de 5 a 6 refeições por dia para aumentar a ingestão calórica</li>
                    <li>Inclua proteínas em todas as refeições para ganho de massa muscular</li>
                    <li>Bebidas como smoothies podem ser uma forma fácil de adicionar calorias</li>
                  </ul>
                </div>
              ) : planoNutricional.classificacao.includes('Peso normal') ? (
                <div className="space-y-4">
                  <p><strong>Para manutenção do peso:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mantenha uma dieta equilibrada com variedade de alimentos</li>
                    <li>Prefira carboidratos complexos como arroz integral, batata-doce e quinoa</li>
                    <li>Inclua proteínas magras em todas as refeições principais</li>
                    <li>Não se esqueça das gorduras saudáveis como azeite, abacate e castanhas</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <p><strong>Para perda de peso saudável:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Foque em alimentos com baixa densidade calórica e alta nutrição (vegetais, proteínas magras)</li>
                    <li>Mantenha a ingestão de proteínas alta para preservar massa muscular</li>
                    <li>Reduza carboidratos refinados e açúcares adicionados</li>
                    <li>Inclua fibras em todas as refeições para aumentar a saciedade</li>
                    <li>Beba bastante água ao longo do dia</li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </PageWrapper>
  );
}