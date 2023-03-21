module.exports = ({ env }) => ({
    security: {
        // Configurações da política de segurança de conteúdo
        csp: {
          directives: {
            "connect-src": ["'self'", "https:"]
          }
        }
      },
    url: env('https://strapibase-production.up.railway.app'),
});
// module.exports = ({ env }) => ({
//     host: env('HOST', '0.0.0.0'),
//     port: env.int('PORT', 1337),
//     admin: {
//       auth: {
//         secret: env('ADMIN_JWT_SECRET', 'BRT_JWT_SECRET'),
//       },
//     },
//     url: env('PUBLIC_URL', 'https://strapibase-production.up.railway.app/'),
//     cron: {
//       enabled: env.bool('CRON_ENABLED', true),
//     },
//     proxy: {
//       enabled: env.bool('PROXY_ENABLED', false),
//       host: env('PROXY_HOST', '127.0.0.1'),
//       port: env.int('PROXY_PORT', 8080),
//       auth: {
//         username: env('PROXY_USERNAME', ''),
//         password: env('PROXY_PASSWORD', ''),
//       },
//     },
//     app: {
//         keys: env.array('APP_KEYS'),
//       },
//   });