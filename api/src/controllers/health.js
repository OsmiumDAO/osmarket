import Boom from "@hapi/boom";
import { HealthSvc } from "../services/healthSvc.js";

const healthSvc = HealthSvc();

const health = (server) => {
  ////////////////////////////////
  // Heartbeat
  ////////////////////////////////
  server.get("/ping", 
    async (req, res, next) => {
      const data = await healthSvc.ping();

      if(data.status !== "OK") return next(Boom.badImplementation(null, data));
      
      res.send(data);
    },
  );

  ////////////////////////////////
  // Rediness probe
  ////////////////////////////////
  server.get("/health", 
    async (req, res, next) => {
      const data = await healthSvc.healthCheck();

      if(data.status !== "OK") return next(Boom.badImplementation(null, data));

      res.send(data);
    },
  );
};

export { health };
