module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'postgres',
      settings: {
        host: env('PGHOST', '0.0.0.0'),
        port: env('PGPORT', '6668'),
        database: env('PGDATABASE','railway'),
        username: env('PGUSER','postgres'),
        password: env('PGPASSWORD','dBCPkicLUrEi0jDrev7b'),
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
