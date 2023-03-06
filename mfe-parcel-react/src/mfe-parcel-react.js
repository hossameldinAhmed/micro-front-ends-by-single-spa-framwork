import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Parcel from "./parcel.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Parcel,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
//to override the props.name in single-spa
export const name = "parcel-react";
export const { bootstrap, mount, unmount } = lifecycles;
