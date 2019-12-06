import React from "react";

import MyResume from "../../components/Profile/MyResume/MyResume";
import MyServices from "../../components/Profile/MyServices/MyServices";
import Skills from "../../components/Profile/Skills/Skills";
import Work from "../../components/Profile/Work/Work";
import Posts from "../../components/Profile/Posts/Posts";
import HireMe from "../../components/Profile/HireMe/HireMe";
import Contact from "../../components/Profile/Contact/Contact";
import AboutMe from "../../components/Profile/AboutMe/AboutMe";

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
