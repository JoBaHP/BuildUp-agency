import React from "react";

import useAxios from "./../../CustomeHooks/useAxios/useAxios";

import AboutHeader from "./Header/Header";
import AboutBody from "./Body/Body";
import Loading from "./../Loading/Index";
import Error from "../Error/Index";

import "./Index.scss";

const About = () => {
  // Fetch data
  const {
    data: { header = {}, content = {} },
    success,
    isPending,
    error,
  } = useAxios("./Apis/about.json", []);

  return (
    <section className="about">
      {isPending && <Loading />}

      {success && (
        <div className="container">
          <AboutHeader header={header} />
          <AboutBody content={content} />
        </div>
      )}

      {error && <Error message={error.message} name="About" />}
    </section>
  );
};

export default About;
