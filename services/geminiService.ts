
import { GoogleGenAI, Type } from "@google/genai";
import { DailyPlan } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    cafe_da_manha: {
      type: Type.OBJECT,
      properties: {
        nome: { type: Type.STRING },
        descricao: { type: Type.STRING },
        calorias: { type: Type.INTEGER },
      },
      required: ["nome", "descricao", "calorias"]
    },
    almoco: {
      type: Type.OBJECT,
      properties: {
        nome: { type: Type.STRING },
        descricao: { type: Type.STRING },
        calorias: { type: Type.INTEGER },
      },
      required: ["nome", "descricao", "calorias"]
    },
    jantar: {
      type: Type.OBJECT,
      properties: {
        nome: { type: Type.STRING },
        descricao: { type: Type.STRING },
        calorias: { type: Type.INTEGER },
      },
      required: ["nome", "descricao", "calorias"]
    },
    treino: {
      type: Type.OBJECT,
      properties: {
        nome: { type: Type.STRING },
        descricao: { type: Type.STRING },
        duracao_minutos: { type: Type.INTEGER },
      },
      required: ["nome", "descricao", "duracao_minutos"]
    },
    resumo_dia: {
      type: Type.OBJECT,
      properties: {
        total_calorias: { type: Type.INTEGER },
        motivacao: { type: Type.STRING }
      },
      required: ["total_calorias", "motivacao"]
    }
  },
  required: ["cafe_da_manha", "almoco", "jantar", "treino", "resumo_dia"]
};


export const generateDailyPlan = async (currentWeight: number, targetWeight: number): Promise<DailyPlan> => {
  const prompt = `
    Crie um plano diário de refeições e treino para uma pessoa que atualmente pesa ${currentWeight} kg e tem como objetivo atingir ${targetWeight} kg.
    O plano deve ser saudável, balanceado e focado na perda de peso.
    Inclua café da manhã, almoço, jantar e uma sugestão de treino.
    Para cada refeição, forneça o nome, uma breve descrição e uma estimativa de calorias.
    Para o treino, forneça um nome, uma breve descrição e a duração em minutos.
    Adicione também um resumo do dia com o total de calorias e uma frase motivacional curta.
    Responda em português do Brasil.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema,
        temperature: 0.7,
      },
    });

    const planText = response.text.trim();
    return JSON.parse(planText) as DailyPlan;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate plan from Gemini API.");
  }
};
