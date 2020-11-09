#!/usr/bin/env node

// ______________________________________________
// Define Error handler.
process.on('unhandledRejection', (err) => {
  throw err;
});

// ______________________________________________
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// ______________________________________________
// Read environment variables.
require('../config/env');

// ______________________________________________
// Import libraries.
const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const chalk = require('react-dev-utils/chalk');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');

const { measureFileSizesBeforeBuild } = FileSizeReporter;
const { printFileSizesAfterBuild } = FileSizeReporter;

// ______________________________________________
// Define constant variables.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;
const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// ______________________________________________
// Verify existing required files.
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// ______________________________________________
// Generate webpack configuration.
const config = configFactory('production');

// ______________________________________________
// Define private method to copy public folder to dist folder.
const copyPublicFolder = () => {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: (file) => file !== paths.appHtml,
  });
};

// ______________________________________________
// Define private method to build.
const build = (previousFileSizes) => {
  console.log(`Creating an optimized production build...`);

  // Compile target files.
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }

        let errMessage = err.message;

        // Add postcss errors.
        if (Object.prototype.hasOwnProperty.call(err, 'postcssNode')) {
          errMessage += `\nCompileError: Begins at CSS selector ${err.postcssNode.selector}`;
        }

        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: [],
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        );
      }
      if (messages.errors.length) {
        // Only keep the first error.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }

      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
};

// ______________________________________________
// Check browsers and call defined methods.
checkBrowsers(paths.appPath, isInteractive)
  .then(() => {
    // Measure the current file sizes in build directory.
    return measureFileSizesBeforeBuild(paths.appBuild);
  })
  .then((previousFileSizes) => {
    // Remove all content of build directory.
    fs.emptyDirSync(paths.appBuild);
    // Copy all content of public to build directory.
    copyPublicFolder();
    // Do building
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          `\nSearch for the ${chalk.underline(
            chalk.yellow('keywords')
          )} to learn more about each warning.`
        );
        console.log(
          `To ignore, add ${chalk.cyan(
            '// eslint-disable-next-line'
          )} to the line before.\n`
        );
      } else {
        console.log(chalk.green('Compiled successfully.\n'));
      }

      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
      console.log();

      const appPackage = require(paths.appPackageJson);
      const publicUrl = paths.publicUrlOrPath;
      const { publicPath } = config.output;
      const buildFolder = path.relative(process.cwd(), paths.appBuild);
      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        useYarn
      );
    },
    (err) => {
      const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';
      if (tscCompileOnError) {
        console.log(
          chalk.yellow(
            'Compiled with the following type errors (you may want to check these before deploying your app):\n'
          )
        );
        printBuildError(err);
      } else {
        console.log(chalk.red('Failed to compile.\n'));
        printBuildError(err);
        process.exit(1);
      }
    }
  )
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
