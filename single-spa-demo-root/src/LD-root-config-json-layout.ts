import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";


const config = {
  mode: "hash",
  routes: [
    {
      type: "application",
      name: "@mf-app-navbar",
    },
    {
      type: "route",
      path: "/home",
      routes: [
        {
          type: "application",
          name: "@mf-demo/home",
          // loader: customLoader,
        },
      ],
      default: false,
    },
    {
      type: "route",
      path: "employees",
      routes: [
        {
          type: "application",
          name: "@mf-demo/employees",
          // loader: customLoader,
          props: {
            user: { fname: "Jane", lname: "John" },
          },
        },
      ],
      default: false,
    },
    {
      type: "route",
      path: "about",
      routes: [
        {
          type: "application",
          name: "@app/about",
          // loader: customLoader,
          // error: customError,
        },
      ],
      default: false,
    },
    {
      type: "route",
      default: true,
      routes: [{ type: "#text", value: "404 Not found" }],
    },
  ],
};

const routes = constructRoutes(config);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
