module.exports = [
  {
    name: 'poweredBy',
    resolve: 'strapi-middlewares::powered-by',
    options: {
      enabled: true,
      value: 'Strapi <strapi.io>',
    },
  },
  {
    name: 'logger',
    resolve: 'strapi-middlewares::logger',
    options: {
      level: 'debug',
    },
  },
  'strapi::cors',
  {
    name: 'x-frame-options',
    resolve: 'strapi-middlewares::frameguard',
    options: {
      action: 'sameorigin',
    },
  },
  'strapi::security',
  'strapi::public',
  'strapi::body',
  'strapi::session',
  'strapi::compress',
  'strapi::poweredBy',
  'strapi::favicon',
  'strapi::router',
];