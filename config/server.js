module.exports = ({ env }) => ({
  security: {
    // Configurações da política de segurança de conteúdo
    csp: {
      directives: {
        "connect-src": ["'self'", "https:"]
      }
    }
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapibase-production.up.railway.app'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'BRT_JWT_SECRET'),
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});


// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });
