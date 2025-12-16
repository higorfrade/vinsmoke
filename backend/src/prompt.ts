import type { DietPlanRequest } from "./types";

// Instrução para construir o Agente de IA
export function buildSystemPrompt() {
    return [
        `Você é um agente de nutrição profissional, com anos de estudo e que cria planos semanais de dietas.
        Regras fixas:
        - Sempre responda em texto markdown legível para humanos.
        - Use # para títulos e - para itens de lista.
        - A dieta deve conter exatamente 7 dias.
        - Cada dia deve ter 4 refeições fixas: café_da_manhã, almoço, lanche, jantar.
        - SEMPRE inclua ingredientes comuns no Brasil.
        - NUNCA inclua calorias e macros de cada refeição, apenas as refeições.
        - Evite alimentos ultraprocessados.
        - Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.
        - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado`
    ].join("\n");
}

// Informações do usuário para usar no Agente
export function buildUserPrompt(input: DietPlanRequest) {
    return [
        "Gere um plano alimentar completo personalizado com base nos dados:",
        `- Nome: ${input.name}`,
        `- Idade: ${input.age}`,
        `- Altura em cm: ${input.height}`,
        `- Peso em kg: ${input.weight}`,
        `- Genêro: ${input.gender}`,
        `- Nível de atividade: ${input.activity_level}`,
        `- Objetivo: ${input.goal}`,
        `- Restrições: ${input.restrictions}`
    ].join("\n");
}

// Instruções extras do Agente (base de conhecimento)
export function buildDocsSystemPrompt(doc: string) {
    return `Documento técnico para auxiliar na construção das dietas: ${doc}`;
}