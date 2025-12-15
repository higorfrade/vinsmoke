import type { FastifyInstance } from "fastify";

export async function planRoutes(app: FastifyInstance) {
    app.post("/plans", async (request, reply) => {
        return reply.send("Planos de dieta");
    });
}