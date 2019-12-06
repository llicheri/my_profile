import React from "react";

import MyResume from "../../components/MyResume/MyResume";
import MyServices from "../../components/MyServices/MyServices";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";
import Posts from "../../components/Posts/Posts";
import HireMe from "../../components/HireMe/HireMe";
import Contact from "../../components/Contact/Contact";
import AboutMe from "../../components/AboutMe/AboutMe";

export default function Profile() {
  return (
    <div id="page">
      <AboutMe />
      <MyResume />
      <MyServices />
      <Skills />
      <Work />
      <Posts />
      <HireMe />
      <Contact />
    </div>
  );
}
