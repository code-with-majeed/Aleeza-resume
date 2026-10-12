import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="container-x grid min-h-[70vh] place-items-center pt-32 text-center">
    <div>
      <p className="gradient-text font-display text-8xl font-bold">404</p>
      <h1 className="mt-4 font-display text-2xl text-white">Bug found: this page doesn't exist.</h1>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </div>
  </section>
);

export default NotFound;
