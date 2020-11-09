const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
const postcssNormalize = require('postcss-normalize');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');

const appPackageJson = require(paths.appPackageJson);

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
  10
);
const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = (webpackEnv) => {
  // ______________________________________________
  // 関数内の定数定義
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const isEnvProductionProfile =
    isEnvProduction && process.argv.includes('--profile');
  const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
  // ______________________________________________
  // sytleの共通loader取得関数
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: paths.publicUrlOrPath.startsWith('.')
          ? { publicPath: '../../' }
          : {},
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              postcssNormalize(),
            ],
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        }
      );
    }
    return loaders;
  };

  // ______________________________________________
  // webpackの設定内容
  return {
    // ______________________________________________
    // mode
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    // ______________________________________________
    // bail
    bail: isEnvProduction,

    // ______________________________________________
    // devtool（source map）
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-eval-source-map',

    // ________________________________________________
    // entry（エントリーポイント）
    entry: [
      isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs,
    ].filter(Boolean),

    // ________________________________________________
    // output（出力バンドル）
    output: {
      path: isEnvProduction ? paths.appBuild : undefined,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].js'
        : isEnvDevelopment && 'static/js/bundle.js',
      futureEmitAssets: true,
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js',
      publicPath: paths.publicUrlOrPath,
      devtoolModuleFilenameTemplate: isEnvProduction
        ? (info) =>
            path
              .relative(paths.appSrc, info.absoluteResourcePath)
              .replace(/\\/g, '/')
        : isEnvDevelopment &&
          ((info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
      jsonpFunction: `webpackJsonp${appPackageJson.name}`,
      globalObject: 'this',
    },

    // ________________________________________________
    // optimization（最適化設定）
    optimization: {
      // _______________________________________________
      // minimize（Prodにて最適化有効）
      minimize: isEnvProduction,

      // _______________________________________________
      // minimizer（ファイル圧縮設定）
      minimizer: [
        // _______________________________________________
        // TerserPluginの有効化（JSの圧縮設定）
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            keep_classnames: isEnvProductionProfile,
            keep_fnames: isEnvProductionProfile,
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          sourceMap: shouldUseSourceMap,
        }),

        // _______________________________________________
        // OptimizeCSSAssetsPluginの有効化（CSSの圧縮設定）
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                  inline: false,
                  annotation: true,
                }
              : false,
          },
          cssProcessorPluginOptions: {
            preset: ['default', { minifyFontValues: { removeQuotes: false } }],
          },
        }),
      ],

      // _______________________________________________
      // splitChunks（共通ファイル出力）
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },

    // ________________________________________________
    // resolve（モジュール解決に関する設定、インポートパス・拡張子の省略）
    resolve: {
      modules: ['node_modules', paths.appNodeModules].concat(
        modules.additionalModulePaths || []
      ),
      extensions: paths.moduleFileExtensions
        .map((ext) => `.${ext}`)
        .filter((ext) => useTypeScript || !ext.includes('ts')),
      alias: {
        'react-native': 'react-native-web',
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
      },
      plugins: [
        PnpWebpackPlugin,
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      ],
    },

    // ________________________________________________
    // resolveLoader（ローダー実行モジュール探索パス）
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },

    // ______________________________________________
    // loaderの設定
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },

        // ______________________________________________
        // eslist-loader
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true, // eslintの設定を変更した場合は注意/node_modules/.cache/eslint-loaderを消すこと。
                fix: true,
                failOnError: true,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: paths.appSrc,
          exclude: paths.appNodeModules,
        },
        {
          oneOf: [
            // ______________________________________________
            // url-loaderの設定
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              exclude: paths.appNodeModules,
              options: {
                limit: imageInlineSizeLimit,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },

            // ______________________________________________
            // ts-loader
            // {
            //   test: /\.(ts|tsx)$/,
            //   include: paths.appSrc,
            //   exclude: paths.appNodeModules,
            //   loader: 'ts-loader',
            // },

            // ______________________________________________
            // babel-loader
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),
                babelrc: false,
                configFile: false,
                presets: [require.resolve('babel-preset-react-app')],
                cacheIdentifier: getCacheIdentifier(
                  isEnvProduction
                    ? 'production'
                    : isEnvDevelopment && 'development',
                  [
                    'babel-plugin-named-asset-import',
                    'babel-preset-react-app',
                    'react-dev-utils',
                  ]
                ),
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                ],
                cacheDirectory: true,
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve('babel-preset-react-app/dependencies'),
                    { helpers: true },
                  ],
                ],
                cacheDirectory: true,
                cacheCompression: false,
                cacheIdentifier: getCacheIdentifier(
                  isEnvProduction
                    ? 'production'
                    : isEnvDevelopment && 'development',
                  [
                    'babel-plugin-named-asset-import',
                    'babel-preset-react-app',
                    'react-dev-utils',
                  ]
                ),
                sourceMaps: shouldUseSourceMap,
                inputSourceMap: shouldUseSourceMap,
              },
            },
            // ______________________________________________
            // css-loader
            // {
            //   test: /\.css$/,
            //   exclude: paths.appNodeModules,
            //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
              }),
              sideEffects: true,
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }),
            },
            // ______________________________________________
            // sass-loaderの設定
            // {
            //   test: /\.scss$/,
            //   exclude: paths.appNodeModules,
            //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            // },
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'sass-loader'
              ),
              sideEffects: true,
            },
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'sass-loader'
              ),
            },
            // ______________________________________________
            // file-loaderの設定
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },

    // _______________________________________________
    // pluginsの設定
    plugins: [
      // _______________________________________________
      // HtmlWebpackPluginの有効化（HTML自動生成）
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        ...(isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined),
      }),
      // _______________________________________________
      // InclineChunkHtmlPluginの有効化（HtmlWebpackPluginと連携しscriptをインライン化）
      isEnvProduction &&
        shouldInlineRuntimeChunk &&
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),

      // _______________________________________________
      // InterpolateHtmlPluginの有効化（環境変数の有効化※html）
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),

      // _______________________________________________
      // ModuleNotFoundPluginの有効化
      new ModuleNotFoundPlugin(paths.appPath),

      // _______________________________________________
      // DefinePluginの有効化（環境変数の有効化）
      new webpack.DefinePlugin(env.stringified),

      // _______________________________________________
      // HotModuleReplacementPluginの有効化（ホットリロード）
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),

      // _______________________________________________
      // CaseSensitivePathsPluginの有効化（モジュール名の識別）
      isEnvDevelopment && new CaseSensitivePathsPlugin(),

      // _______________________________________________
      // WatchMissingNodeModulesPluginの有効化
      isEnvDevelopment &&
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),

      // _______________________________________________
      // MiniCSSExtractPluginの有効化（CSSファイルの抽出設定）
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),

      // _______________________________________________
      // ManifestPluginの有効化（バンドル後のファイル名マッピング）
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: paths.publicUrlOrPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            (fileName) => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),

      // _______________________________________________
      // IgnorePluginの有効化（無駄なロケールファイルの削除）
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // _______________________________________________
      // WorkboxWebpackPlugin.GenerateSWの有効化（serviceWorkerファイル作成とキャッシュ設定）
      isEnvProduction &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          navigateFallback: `${paths.publicUrlOrPath}index.html`,
          navigateFallbackDenylist: [
            new RegExp('^/_'),
            new RegExp('/[^/?]+\\.[^/]+$'),
          ],
        }),

      // _______________________________________________
      // ForkTsCheckerWebpackPluginの有効化（ビルド時の型チェックの実行）
      useTypeScript &&
        new ForkTsCheckerWebpackPlugin({
          typescript: resolve.sync('typescript', {
            basedir: paths.appNodeModules,
          }),
          async: isEnvDevelopment,
          useTypescriptIncrementalApi: true,
          checkSyntacticErrors: true,
          resolveModuleNameModule: process.versions.pnp
            ? `${__dirname}/pnpTs.js`
            : undefined,
          resolveTypeReferenceDirectiveModule: process.versions.pnp
            ? `${__dirname}/pnpTs.js`
            : undefined,
          tsconfig: paths.appTsConfig,
          reportFiles: [
            '**',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/setupTests.*',
          ],
          silent: true,
          formatter: isEnvProduction ? typescriptFormatter : undefined,
        }),

      // _______________________________________________
      // StyleLintPluginの有効化（StyleLint連携）
      new StyleLintPlugin({}),
    ].filter(Boolean),

    // _______________________________________________
    // nodeの設定（ブラウザで利用しないものに関して空オブジェクトの設定）
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },

    // _______________________________________________
    // performanceの設定※無効化（バンドルが指定サイズ超過時にアラートしない。FileSizeReporterを別途利用）
    performance: false,
  };
};
