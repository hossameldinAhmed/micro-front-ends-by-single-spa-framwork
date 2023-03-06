const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ld",
    projectName: "mfe-app-navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@mfe-utility"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
