import Fastify from "fastify";
import { AppDataSource } from "./data-source";
import vehicleRouteRoutes from "./routes/vehicleRoute";
import { setupErrorHandlers } from "./error/errorHandler";

const fastify = Fastify({ logger: true });

// Register Swagger
fastify.register(require('@fastify/swagger'), {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Vehicle Route API',
      description: 'API documentation for the Vehicle Route service',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
});

fastify.register(vehicleRouteRoutes);
setupErrorHandlers(fastify);

const start = async () => {
  try {
    await AppDataSource.initialize();
    await fastify.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
