import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export function errorHandler(error: Error, request: FastifyRequest, reply: FastifyReply) {
  reply.status(500).send({ error: error.message });
}

export function notFoundHandler(request: FastifyRequest, reply: FastifyReply) {
  reply.status(404).send({ error: 'Route not found' });
}

export function setupErrorHandlers(fastify: FastifyInstance) {
  fastify.setErrorHandler(errorHandler);
  fastify.setNotFoundHandler(notFoundHandler);
}
