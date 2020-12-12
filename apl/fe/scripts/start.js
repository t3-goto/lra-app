#!/usr/bin/env node

// ______________________________________________
// Define Error handler.
process.on('unhandledRejection', (err) => {
  throw err;
});

// ______________________________________________
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// ______________________________________________
// Read environment variables.
require('../config/env');

// ______________________________________________
// Import libraries.
const fs = require('fs');
const chalk = require('react-dev-utils/chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

// ______________________________________________
// Define constant variables.
const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// ______________________________________________
// Verify existing required files and variables.
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}
if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(
    `Learn more here: ${chalk.yellow('https://bit.ly/CRA-advanced-config')}`
  );
  console.log();
}

// ______________________________________________
// Check browsers and call defined methods.
checkBrowsers(paths.appPath, isInteractive)
  // Set port.
  .then(() => {
    return choosePort(HOST, DEFAULT_PORT);
  })
  .then((port) => {
    if (port == null) {
      return;
    }

    // ______________________________________________
    // Generate webpack configuration.
    const config = configFactory('development');
    // ______________________________________________
    // Add an entry point to the webpack configuration: webpack/hot/dev-server.
    config.entry.unshift(
      `webpack-dev-server/client?http://${HOST}:${DEFAULT_PORT}/`,
      'webpack/hot/dev-server'
    );

    // Define dev-server's constant variables.
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const useTypeScript = fs.existsSync(paths.appTsConfig);
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';
    const urls = prepareUrls(
      protocol,
      HOST,
      port,
      paths.publicUrlOrPath.slice(0, -1)
    );
    const devSocket = {
      warnings: (warnings) =>
        devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: (errors) =>
        devServer.sockWrite(devServer.sockets, 'errors', errors),
    };

    // Make a webpack compiler.
    const compiler = createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn,
      useTypeScript,
      tscCompileOnError,
      webpack,
    });

    // Make a server proxy config.
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(
      proxySetting,
      paths.appPublic,
      paths.publicUrlOrPath
    );
    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig
    );

    // Create dev server and launch.
    const devServer = new WebpackDevServer(compiler, serverConfig);
    devServer.listen(port, HOST, (err) => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }

      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        devServer.close();
        process.exit();
      });
    });

    if (isInteractive || process.env.CI !== 'true') {
      process.stdin.on('end', () => {
        devServer.close();
        process.exit();
      });
      process.stdin.resume();
    }
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
