// index.js (index page)
// <> Filip Rajec

import React from "react";
import { Helmet } from "react-helmet";

import Home from "../Components/Pages/Home";

import "./index.scss";

const Index = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dingohead Creative</title>
      <meta
        name="description"
        content="Profile page of a fullstack developer."
      />
      <link rel="canonical" href="https://dingohead.com" />
    </Helmet>
    <Home />
  </>
);

export default Index;
