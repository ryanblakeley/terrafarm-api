# Terrafarm API

[terra.farm][301]

The Terrafarm API serves a GraphQL endpoint for the Terrafarm Database.

## Contributing

Please take a moment to review the [guidelines][200]:

[Bug reports][201]  
[Feature requests][202]  
[Pull requests][203]

## Documentation

Software documenation lives in `/NOTES/DOCS/`. Start [here][205].

## Roadmap

Planned and potential features are documented in `/NOTES/ROADMAP/`. Start [here][206].

## Installation

Make sure you followed the installation instructions for terrafarm-db first to ensure your database is up and operational.

Then:

```bash
npm install
npm run setup
```
The setup script copies [/.env.example][101] to `/.env`. Missing values will need to be manually added.

Currently, we're using a GraphQL endpoint rather than a REST endpoint. But if you want to do something with a REST endpoint, install and run `postgrest`.

```bash
brew install postgrest
postgrest ./postgrest.conf
```

## Running

Start a local server for the GraphQL endpoint:

```bash
npm run dev
open http://localhost:3001/graphiql # GraphiQL endpoint for inspecting the schema
```

Start a local server for the REST endpoint:

```bash
npm run dev-rest
```

## Other scripts

* `npm run eslint` to check js files for syntax errors and style violations  
* `npm run build` to build the project  
* `npm run start` to serve the build with pm2  
* `npm run restart` to restart with pm2  
* `npm run stop` to stop serving the build

## Directory Structure

```
build/                    // webpack build output
  dist/
    server.js             // backend server
NOTES/                    // project documentation
  DOCS/                   // software documentation
  ROADMAP/                // future plans and designs
src/
  index.js
.babelrc                  // compiler config
.env                      // environment variables
.eslintrc                 // syntax and style config
ecosystem.json            // deployment config
gulpfile.babel.js
webpack.config.js
webpack.production.config
```

## Features

* Compiles next generation javascript (with [Babel][402])
* Linting (with [ESLint][403])
* Build with [webpack][404]

## License

Copyright (c) 2017 Terrafarm LLC  
[Creative Commons BY-NC-ND 3.0][400]  
[Legal Code][100]  
[Acknowledgements][204]


[100]: ./LICENSE.md
[101]: ./.env.example
[200]: ./NOTES/CONTRIBUTING.md
[201]: ./NOTES/CONTRIBUTING.md#bugs
[202]: ./NOTES/CONTRIBUTING.md#features
[203]: ./NOTES/CONTRIBUTING.md#pull-requests
[204]: ./NOTES/ACKNOWLEDGEMENTS.md
[205]: ./NOTES/DOCS/README.md
[206]: ./NOTES/ROADMAP/README.md
[300]: https://terra.farm/
[301]: https://terra.farm/pages/about
[400]: https://creativecommons.org/licenses/by-nc-nd/3.0/
[401]: https://facebook.github.io/react/
[402]: https://babeljs.io/
[403]: http://eslint.org/
[404]: https://webpack.github.io/
[405]: http://mochajs.org/
[406]: http://chaijs.com/
[407]: http://sinonjs.org/
