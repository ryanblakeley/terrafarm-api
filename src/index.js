import Express from 'express';
// import path from 'path';
import postgraphql from 'postgraphql';
import bodyParser from 'body-parser';

const {
  NODE_ENV,
  PRIVATE_IP,
  REVERSE_PROXY_PRIVATE_IP,
  PORT,
  DB_PORT,
  JWT_PRIVATE_KEY,
} = process.env;
/*
const PATHS = {
  public: path.join(__dirname, '/..', 'public'),
  schemaJson: path.join(__dirname, '/..', 'public', 'schema.json'),
  schemaGraphql: path.join(__dirname, '..', 'public', 'schema.graphql'),
};
*/
const api = new Express();

api.use(bodyParser.json());
api.use(postgraphql(`postgres://${REVERSE_PROXY_PRIVATE_IP}:${DB_PORT}`, ['terrafarm'], {
  classicIds: true,
  // dynamicJson: true,
  graphiql: NODE_ENV !== 'production',
  graphqlRoute: '/cards-graphql',
  pgDefaultRole: 'postgraphql_anonymous',
  jwtSecret: JWT_PRIVATE_KEY,
  jwtPgTypeIdentifier: 'terrafarm.jwt_token',
  // exportJsonSchemaPath: PATHS.schemaJson,
  // exportGqlSchemaPath: PATHS.schemaGraphql,
}));

api.listen(PORT, () => {
  console.log(`Terrafarm API listening at http://${PRIVATE_IP}:${PORT} 🌲`);
});
