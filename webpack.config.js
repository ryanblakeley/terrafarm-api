import webpack from 'webpack';
import path from 'path';
import env from 'gulp-env';

if (!process.env.PRIVATE_IP) {
  env({file: './.env', type: 'ini'});
}

const {
  NODE_ENV,
  PRIVATE_IP,
  REVERSE_PROXY_PRIVATE_IP,
  PORT,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  JWT_PRIVATE_KEY,
} = process.env;

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build', 'dist'),
};

const config = {
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  externals: /^[a-z\-0-9]+$/,
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        PRIVATE_IP: JSON.stringify(PRIVATE_IP),
        REVERSE_PROXY_PRIVATE_IP: JSON.stringify(REVERSE_PROXY_PRIVATE_IP),
        PORT: Number(PORT),
        DB_PORT: Number(DB_PORT),
        DB_USER: JSON.stringify(DB_USER),
        DB_PASSWORD: JSON.stringify(DB_PASSWORD),
        JWT_PRIVATE_KEY: JSON.stringify(JWT_PRIVATE_KEY),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

export default config;
