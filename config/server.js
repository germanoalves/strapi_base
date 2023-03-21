module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapibase-production.up.railway.app'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'xxx'),
    },
  },
  keys: ['myKeyA', 'myKeyB'], // <--- Adicione essa propriedade
});


// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });
