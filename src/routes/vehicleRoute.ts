import { FastifyInstance } from "fastify";
import { AppDataSource } from "../data-source";
import { VehicleRoute } from "../entity/VehicleRoute";

async function routes(fastify: FastifyInstance) {
  fastify.get('/vehicle-routes', {
    schema: {
      description: 'Get all vehicle routes',
      tags: ['Vehicle Route'],
      response: {
        200: {
          type: 'array',
          items: { $ref: 'VehicleRoute#' }
        }
      }
    }
  }, async (request, reply) => {
    const vehicleRouteRepository = AppDataSource.getRepository(VehicleRoute);
    const vehicleRoutes = await vehicleRouteRepository.find();
    reply.send(vehicleRoutes);
  });

  fastify.post('/vehicle-routes', {
    schema: {
      description: 'Create a new vehicle route',
      tags: ['Vehicle Route'],
      body: {
        type: 'object',
        properties: {
          vehicleId: { type: 'string' },
          route: { type: 'string' },
          startTime: { type: 'string' },
          endTime: { type: 'string' }
        },
        required: ['vehicleId', 'route', 'startTime', 'endTime']
      },
      response: {
        201: { $ref: 'VehicleRoute#' }
      }
    }
  }, async (request, reply) => {
    const vehicleRouteRepository = AppDataSource.getRepository(VehicleRoute);
    const newVehicleRoute = vehicleRouteRepository.create(request.body);
    const result = await vehicleRouteRepository.save(newVehicleRoute);
    reply.status(201).send(result);
  });
}
export default routes;