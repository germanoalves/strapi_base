module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ["*"],
      headers: ["*"],
    },
  },
  load: {
    before: ['cors', 'csrf', 'parser', 'public'],
    order: [],
    after: ['router', 'strapi::error', '404'],
  },
  settings: {
    logger: {
      level: 'debug',
      exposeInContext: true,
      requests: true,
    },
  },
};

// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];
