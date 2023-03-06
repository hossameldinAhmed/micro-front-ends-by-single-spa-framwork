import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activity-functions";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();

registerApplication({
  name: "@mf-app-navbar",
  app: () => System.import("@mf-app-navbar"),
  activeWhen: (location) => true,
});
registerApplication({
  name: "@mf-demo/home",
  app: () => System.import("@mf-demo/home"),
  activeWhen: (location) => location.hash.startsWith("#/home"),
});
registerApplication({
  name: "@mf-demo/employees",
  app: () => System.import("@mf-demo/employees"),
  activeWhen: (location) => {
    const regex = /^\#\/employees\/employee\?id\=\d+?$/;
    return (
      location.hash.startsWith("#/employees") && !location.hash.match(regex)
    );
  },
  customProps: require("./config/config.json"),
});

registerApplication({
  name: "@mfe-app-employee/details",
  app: () => System.import("@mfe-app-employee/details"),
  activeWhen: (location) => {
    // const regex = /^\#\/employee\/\d+?$/;
    const regex = /^\#\/employees\/employee\?id\=\d+?$/;
    return location.hash.match(regex);
  },
});

// registerApplication({
//   name: "@mfe-app-employee/details",
//   app: () => System.import("@mfe-app-employee/details"),
//   activeWhen: (location) => location.hash.startsWith("#/employees/employee?id"),
// });

// registerApplication({
//   app: () => "Error Not Found",
//   activeWhen: true,
// });
start();
