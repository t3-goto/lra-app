// ______________________________________________
// Import libraries.
const fs = require('fs');
const path = require('path');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// ______________________________________________
// Define constant variables.
const appDirectory = fs.realpathSync(process.cwd());

// ______________________________________________
// Define private method to resolve file absolute path.
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// ______________________________________________
// Define publicUrlOrPath which is `PUBLIC_URL` environment variable or package.json's `homepage` field.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);

// ______________________________________________
// Define file extensions.
const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// ______________________________________________
// Define private method to resolve module's file extension.
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );
  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.js`);
};

// ______________________________________________
// Define file paths.
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('config/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath,
};

module.exports.moduleFileExtensions = moduleFileExtensions;
