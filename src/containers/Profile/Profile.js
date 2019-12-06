import React, { Component } from "react";

// components
import MyResume from "../../components/Profile/MyResume/MyResume";
import MyServices from "../../components/Profile/MyServices/MyServices";
import Skills from "../../components/Profile/Skills/Skills";
import Work from "../../components/Profile/Work/Work";
import Posts from "../../components/Profile/Posts/Posts";
import HireMe from "../../components/Profile/HireMe/HireMe";
import Contact from "../../components/Profile/Contact/Contact";
import AboutMe from "../../components/Profile/AboutMe/AboutMe";
// images
import portfolio1 from "../../assets/images/portfolio-1.jpg";
import portfolio2 from "../../assets/images/portfolio-2.jpg";
import portfolio3 from "../../assets/images/portfolio-3.jpg";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: "0",
          date: "Mar. 15th 2016",
          title: "Photoshoot On The Street",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          like: "249",
          view: "308",
          image: portfolio1
        },
        {
          id: "1",
          date: "Mar. 15th 2016",
          title: "Surfing at Philippines",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          like: "249",
          view: "308",
          image: portfolio2
        },
        {
          id: "2",
          date: "Mar. 15th 2016",
          title: "Capture Living On Uderwater",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          like: "249",
          view: "308",
          image: portfolio3
        }
      ],
      works: [
        {
          title: "Senior Developer",
          company: "Company Name",
          startDate: "2016",
          endDate: "Current",
          description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        },
        {
          title: "Junior Developer",
          company: "Company Name",
          startDate: "2013",
          endDate: "2015",
          description:
            "Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        },
        {
          title: "UI/UX Designer",
          company: "Company Name",
          startDate: "2010 ",
          endDate: "2012",
          description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        }
      ],
      studies: [
        { title: "", company: "", startDate: "", endDate: "", description: "" },
        { title: "", company: "", startDate: "", endDate: "", description: "" },
        { title: "", company: "", startDate: "", endDate: "", description: "" }
      ]
    };
  }

  render() {
    return (
      <div id="page">
        <AboutMe />
        <MyResume works={this.state.works} studies={this.state.studies} />
        <MyServices />
        <Skills />
        <Work />
        <Posts posts={this.state.posts} />
        <HireMe />
        <Contact />
      </div>
    );
  }
}
