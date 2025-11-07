
import React from 'react';

interface WeightTrackerProps {
  currentWeight: string;
  targetWeight: number;
  weightDifference: number | null;
}

const WeightTracker: React.FC<WeightTrackerProps> = ({ currentWeight, targetWeight, weightDifference }) => {
  const renderMessage = () => {
    if (weightDifference === null) {
      return <p className="text-gray-600">Insira seu peso atual para começar.</p>;
    }
    if (weightDifference <= 0) {
      return <p className="text-xl font-bold text-green-600">Parabéns! Você alcançou ou superou sua meta!</p>;
    }
    return (
      <p className="text-gray-800">
        Você está a <span className="text-2xl font-bold text-teal-600">{weightDifference.toFixed(1)} kg</span> da sua meta.
      </p>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center space-y-4">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">Peso Atual</span>
          <span className="text-3xl font-bold text-gray-800">{currentWeight || '--'} kg</span>
        </div>
        <div className="text-teal-500 font-bold text-3xl">&rarr;</div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">Sua Meta</span>
          <span className="text-3xl font-bold text-teal-600">{targetWeight} kg</span>
        </div>
      </div>
      <div className="pt-2">
        {renderMessage()}
      </div>
    </div>
  );
};

export default WeightTracker;
