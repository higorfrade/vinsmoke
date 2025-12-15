import Fastify from "fastify";
import { planRoutes } from "./routes/plan";

// Inicializa o Fastify
const app = Fastify({
    logger: true
});

// Carrega as rotas
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.register(planRoutes);

// Inicializa o servidor
app.listen({ port: Number(process.env.PORT) || 3333, host: "0.0.0.0" })
    .then(() => { console.log(`Server rodando na porta ${process.env.PORT}`); })
    .catch((err) => {
        app.log.error(err);
        process.exit(1);
    });