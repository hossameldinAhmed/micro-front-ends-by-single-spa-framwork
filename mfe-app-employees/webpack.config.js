const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "LD-MFE",
    projectName: "mfe-app-employees",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@mfe-utility"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
