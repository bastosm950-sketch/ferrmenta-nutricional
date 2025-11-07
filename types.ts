
export interface Meal {
  nome: string;
  descricao: string;
  calorias: number;
}

export interface Workout {
  nome: string;
  descricao: string;
  duracao_minutos: number;
}

export interface DailyPlan {
  cafe_da_manha: Meal;
  almoco: Meal;
  jantar: Meal;
  treino: Workout;
  resumo_dia: {
    total_calorias: number;
    motivacao: string;
  };
}
