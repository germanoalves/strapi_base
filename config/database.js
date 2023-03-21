const path = require('path');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-115.railway.app'),
        port: env('PGPORT', '6668'),
        database: env('PGDATABASE','railway'),
        username: env('PGUSER','postgres'),
        password: env('PGPASSWORD','dBCPkicLUrEi0jDrev7b'),
        ssl: env.bool(false),
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
