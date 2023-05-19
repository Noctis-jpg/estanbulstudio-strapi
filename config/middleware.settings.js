module.exports = ({ env }) => ({
    settings: {
      cors: {
        enabled: true,
        origin: ["http://localhost:3000"],
      },
    },
  });

  module.exports = {
    load: {
      before: ["responseTime", "logger", "cors", "responses", "gzip"],
      order: [],
      after: ["parser", "router"],
    },
    settings: {
      cors: {
        enabled: true,
        origin: ["http://localhost:3000"],
      },
    },
  };