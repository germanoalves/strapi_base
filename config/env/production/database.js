module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'postgres',
      settings: {
        host: env('PGHOST', 'containers-us-west-115.railway.app'),
        port: env('PGPORT', '7684'),
        database: env('PGDATABASE','railway'),
        username: env('PGUSER','postgres'),
        password: env('dBCPkicLUrEi0jDrev7b','DXKtPyqPPrJvwSzmc37A'),
        ssl: env.bool(false),
      },
      options: {},
    },
  },
});
//  const parse = require('pg-connection-string').parse;
//  const config = parse(process.env.DATABASE_URL);
//     module.exports = ({ env }) => ({
//       connection: {
//         client: 'postgres',
//         connection: {
//           host: config.host,
//           port: config.port,
//           database: config.database,
//           user: config.user,
//           password: config.password,
//           ssl: {
//             rejectUnauthorized: false
//           },
//         },
//         debug: false,
//       },
//     });
