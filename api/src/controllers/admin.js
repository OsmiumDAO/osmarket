import { AdminSvc } from "../services/adminSvc.js";

const admin = (server) => {
  ////////////////////////////////
  // TEST
  ////////////////////////////////
  server.get("/:network(preprod|mainnet)/test",
    async (req, res) => {
      const data = await AdminSvc(req.network).getTest();

      res.send(data);
    },
  );
};

export { admin };
