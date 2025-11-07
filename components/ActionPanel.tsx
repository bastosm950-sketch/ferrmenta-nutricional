
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ActionPanelProps {
  currentWeight: string;
  setCurrentWeight: (weight: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ currentWeight, setCurrentWeight, onGenerate, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
            Seu peso atual (kg)
          </label>
          <input
            id="weight"
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder="Ex: 85.5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition"
            disabled={isLoading}
          />
        </div>
        <div className="w-full md:w-1/2 md:self-end">
          <button
            onClick={onGenerate}
            disabled={isLoading || !currentWeight}
            className="w-full flex justify-center items-center gap-2 bg-teal-500 text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:bg-teal-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                Gerando Plano...
              </>
            ) : (
              'Gerar Meu Plano Diário'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
