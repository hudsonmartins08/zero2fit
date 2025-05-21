// components/Gamificacao/index.js
import { useEffect, useState } from 'react';

const useGamificacao = () => {
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(0);
  const [xpProximoNivel, setXpProximoNivel] = useState(100);
  const [progresso, setProgresso] = useState(0);
  const [ultimasAcoes, setUltimasAcoes] = useState({});

  // Carrega os dados do localStorage quando o hook é chamado
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('gamificacao');
    if (dadosSalvos) {
      const { nivel, xp, ultimasAcoes } = JSON.parse(dadosSalvos);
      setNivel(nivel || 1);
      setXp(xp || 0);
      setUltimasAcoes(ultimasAcoes || {});
    }
  }, []);

  // Atualiza o progresso sempre que o XP ou nível mudar
  useEffect(() => {
    const xpNecessario = calcularXpProximoNivel(nivel);
    setXpProximoNivel(xpNecessario);
    setProgresso((xp / xpNecessario) * 100);
    
    localStorage.setItem('gamificacao', JSON.stringify({
      nivel,
      xp,
      ultimasAcoes
    }));
  }, [nivel, xp, ultimasAcoes]);

  const calcularXpProximoNivel = (nivelAtual) => {
    return Math.floor(100 * Math.pow(1.2, nivelAtual - 1));
  };

  const podeGanharXp = (acao) => {
    const agora = new Date().getTime();
    const cooldown = 24 * 60 * 60 * 1000; // 24 horas
    
    return !ultimasAcoes[acao] || (agora - ultimasAcoes[acao]) > cooldown;
  };

  const ganharXp = (acao) => {
    if (!podeGanharXp(acao)) return false;

    const xpGanho = acao === 'calcularIMC' ? 25 : 50;
    
    setXp(prevXp => {
      const novoXp = prevXp + xpGanho;
      const xpNecessario = calcularXpProximoNivel(nivel);
      
      if (novoXp >= xpNecessario) {
        setNivel(prevNivel => prevNivel + 1);
        return novoXp - xpNecessario;
      }
      return novoXp;
    });

    setUltimasAcoes(prev => ({
      ...prev,
      [acao]: new Date().getTime()
    }));

    return true;
  };

  const formatarUltimaVez = (acao) => {
    if (!ultimasAcoes[acao]) return 'Nunca';
    
    const agora = new Date().getTime();
    const diferenca = agora - ultimasAcoes[acao];
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    
    return `${horas} horas atrás`;
  };

  return {
    nivel,
    xp,
    xpProximoNivel,
    progresso,
    ultimasAcoes,
    ganharXp,
    formatarUltimaVez
  };
};

const Gamificacao = () => {
  const {
    nivel,
    xp,
    xpProximoNivel,
    progresso,
    formatarUltimaVez
  } = useGamificacao();

  return (
    <div className="bg-gray-50 rounded-lg p-4 my-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Nível {nivel}</h3>
        <span className="text-sm text-gray-600">
          {xp} / {xpProximoNivel} XP
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
        <div 
          className="bg-blue-500 h-4 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
      
      <div className="text-xs text-gray-500 space-y-1">
        <p>IMC: {formatarUltimaVez('calcularIMC')}</p>
        <p>GEB: {formatarUltimaVez('calcularGEB')}</p>
      </div>
    </div>
  );
};

export default Gamificacao;
export { useGamificacao };