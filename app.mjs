import fastify from "fastify";
import fastifySentry from "@immobiliarelabs/fastify-sentry";

const app = fastify();
app.register(fastifySentry, {
    debug: true,
    environment: 'fastify-sentry',
    tracesSampleRate: 1,
    release: '1.0.0'
});

app.route({
    method: 'GET',
    url: '/test',
    handler: async (request, reply) => {
        throw new Error('Test error.')
    },
});

app.route({
    method: 'GET',
    url: '/',
    handler() {
        return { ok: true }
    }
})
app.listen({ port: 3000 })