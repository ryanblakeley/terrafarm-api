import Express from 'express';
import path from 'path';
import postgraphql from 'postgraphql';
import bodyParser from 'body-parser';

const {
  NODE_ENV,
  PRIVATE_IP,
  REVERSE_PROXY_PRIVATE_IP,
  PORT,
  DB_PORT,
  // JWT_PRIVATE_KEY,
} = process.env;

const PATHS = {
  schemaJson: path.join(__dirname, 'schema.json'),
  schemaGraphql: path.join(__dirname, 'schema.graphql'),
};

const api = new Express();

api.use(bodyParser.json());

api.use(postgraphql(`postgres://${REVERSE_PROXY_PRIVATE_IP}:${DB_PORT}`, ['1'], {
  classicIds: true,
  graphiql: NODE_ENV !== 'production',
  graphqlRoute: '/graphql-api',
  pgDefaultRole: 'clerk',
  // jwtSecret: JWT_PRIVATE_KEY,
  // jwtPgTypeIdentifier: '"1".jwt_token',
  exportJsonSchemaPath: PATHS.schemaJson,
  exportGqlSchemaPath: PATHS.schemaGraphql,
}));

api.listen(PORT, () => {
  console.log(`Terrafarm GraphQL API listening at http://${PRIVATE_IP}:${PORT} 🌲`);
});
