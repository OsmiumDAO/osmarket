import Boom from "@hapi/boom";

// Because we need to keep secrets secret, blockfrost requests (via lucid-cardano) are proxied through here.
const blockfrostProxy = (server) => {
  ////////////////////////////////
  // GET
  ////////////////////////////////
  server.get("/blockfrost/:network/*", async (req, res) => {
    try {
      console.log("Calling blockfrost with netwtwork: " + req.network);
      //config.blockfrost[req.network.toLowerCase()];
      //req.network = req.params.network;
      // req.blockfrostConfig;

      // body: await readBody(event)

      // NOTE: Undecided if I should use the incoming headers or not.
      // const blockfrostFetch = $fetch.create({
      //   baseURL: blockfrostConfig.BASE_URL,
      //   method: event.node.req.method,
      //   headers: {
      //     'project_id': blockfrostConfig.PROJECT_ID,
      //   },
      // })

      // return await blockfrostFetch(`${event.context.params.path}` )
      const data = { test: "test", network: req.network };
      res.send(data);
    } catch (error) {
      console.log(error);
      //throw new errors.InternalServerError(error.message);
      Boom.badImplementation(error.message);
    }
  });
};

export { blockfrostProxy };
