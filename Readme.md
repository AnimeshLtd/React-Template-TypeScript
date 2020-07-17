# React + TypeScript template

## Toolchain from scratch

A JavaScript build toolchain typically consists of:
- A package manager for easily installing or updating third-party packages. This projects uses [npm](https://npmjs.com/).
- A bundler to bundle all modules together into small packages to optimize load time. This project uses [Webpack](https://webpack.js.org/).
- A transpiler to turn modern JavaScript code into old JavaScript that still works in older browsers. This project uses
  [TypeScript](https://www.typescriptlang.org) compiler to achieve this.
- Optionally, a type system to enable static type checking. This project uses [TypeScript](https://www.typescriptlang.org)
  for type checking.

### Webpack

Webpack uses *loaders* to process different types of files for bunding. It also provides a handy development server. See
[webpack.config.js](webpack.config.js) for a detailed explanation.

## Directory Map

- `public` handles all static assets, including the `index.html` file used by React to render the application
- `source` contains the rest of the application source code

## Workflow

- `npm run start:dev` to start local development server with hot reloading. Runs at port `3000` by default, can be overridden
  by setting `WEBPACK_DEV_SERVER_PORT` environment variable.
- `npm run build:dev` to output bundled code to `dist` directory
- `npm run build` to output minified, optimised bundle for production
