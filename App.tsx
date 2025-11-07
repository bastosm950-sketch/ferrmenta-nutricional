
import React, { useState, useCallback, useMemo } from 'react';
import { DailyPlan } from './types';
import { generateDailyPlan } from './services/geminiService';
import PlanDisplay from './components/PlanDisplay';
import Header from './components/Header';
import ActionPanel from './components/ActionPanel';
import WeightTracker from './components/WeightTracker';
import Footer from './components/Footer';

const TARGET_WEIGHT = 72;

function App() {
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [plan, setPlan] = useState<DailyPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = useCallback(async () => {
    const weight = parseFloat(currentWeight);
    if (isNaN(weight) || weight <= 0) {
      setError('Por favor, insira um peso válido.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPlan(null);

    try {
      const newPlan = await generateDailyPlan(weight, TARGET_WEIGHT);
      setPlan(newPlan);
    } catch (err) {
      console.error(err);
      setError('Houve um erro ao gerar seu plano. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [currentWeight]);

  const weightDifference = useMemo(() => {
    const weight = parseFloat(currentWeight);
    if (isNaN(weight) || weight <= 0) {
      return null;
    }
    return weight - TARGET_WEIGHT;
  }, [currentWeight]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-8">
          <WeightTracker
            currentWeight={currentWeight}
            targetWeight={TARGET_WEIGHT}
            weightDifference={weightDifference}
          />

          <ActionPanel
            currentWeight={currentWeight}
            setCurrentWeight={setCurrentWeight}
            onGenerate={handleGeneratePlan}
            isLoading={isLoading}
          />
          
          <PlanDisplay plan={plan} isLoading={isLoading} error={error} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
