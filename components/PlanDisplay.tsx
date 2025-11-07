
import React from 'react';
import { DailyPlan } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { PlanIcons } from './PlanIcons';

interface PlanDisplayProps {
  plan: DailyPlan | null;
  isLoading: boolean;
  error: string | null;
}

const PlanCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-3">
            <div className="bg-teal-100 text-teal-600 rounded-full p-2">
                {icon}
            </div>
            <h3 className="ml-4 text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

const PlanDisplay: React.FC<PlanDisplayProps> = ({ plan, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md border border-gray-200 min-h-[300px]">
        <LoadingSpinner />
        <p className="mt-4 text-lg text-gray-600 animate-pulse">Criando um plano incrível para você...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-red-50 border-l-4 border-red-400 rounded-r-lg text-red-700">
        <h3 className="font-bold">Ocorreu um Erro</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-md border border-gray-200 min-h-[300px] flex flex-col justify-center items-center">
        <div className="text-teal-500 mb-4">{PlanIcons.start}</div>
        <h2 className="text-2xl font-bold text-gray-700">Pronto para começar sua jornada?</h2>
        <p className="mt-2 text-gray-600">Insira seu peso e gere um plano personalizado para dar o primeiro passo em direção à sua meta.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PlanCard title="Café da Manhã" icon={PlanIcons.breakfast}>
            <h4 className="font-bold text-teal-700">{plan.cafe_da_manha.nome}</h4>
            <p className="text-gray-600 text-sm mt-1">{plan.cafe_da_manha.descricao}</p>
            <p className="text-xs font-semibold text-gray-500 mt-2">{plan.cafe_da_manha.calorias} kcal</p>
        </PlanCard>
        <PlanCard title="Almoço" icon={PlanIcons.lunch}>
            <h4 className="font-bold text-teal-700">{plan.almoco.nome}</h4>
            <p className="text-gray-600 text-sm mt-1">{plan.almoco.descricao}</p>
            <p className="text-xs font-semibold text-gray-500 mt-2">{plan.almoco.calorias} kcal</p>
        </PlanCard>
        <PlanCard title="Jantar" icon={PlanIcons.dinner}>
            <h4 className="font-bold text-teal-700">{plan.jantar.nome}</h4>
            <p className="text-gray-600 text-sm mt-1">{plan.jantar.descricao}</p>
            <p className="text-xs font-semibold text-gray-500 mt-2">{plan.jantar.calorias} kcal</p>
        </PlanCard>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
          <PlanCard title="Treino do Dia" icon={PlanIcons.workout}>
            <h4 className="font-bold text-teal-700">{plan.treino.nome}</h4>
            <p className="text-gray-600 text-sm mt-1">{plan.treino.descricao}</p>
            <p className="text-xs font-semibold text-gray-500 mt-2">{plan.treino.duracao_minutos} minutos</p>
          </PlanCard>
          <PlanCard title="Resumo do Dia" icon={PlanIcons.summary}>
            <p className="text-gray-600 text-sm mt-1">Total de calorias estimado:</p>
            <p className="font-bold text-2xl text-teal-700">{plan.resumo_dia.total_calorias} kcal</p>
            <blockquote className="mt-3 text-sm italic text-gray-500 border-l-2 border-teal-200 pl-3">
              "{plan.resumo_dia.motivacao}"
            </blockquote>
          </PlanCard>
      </div>
    </div>
  );
};

export default PlanDisplay;
