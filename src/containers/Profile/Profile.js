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
          title: "Full stack developer",
          company: "Freelence",
          startDate: "2019",
          endDate: "Current",
          description: "Full stack developer as freelance developer"
        },
        {
          title: "Front-End Team Leader",
          company: "Credem ( consulente )",
          startDate: "2018",
          endDate: "2019",
          description:
            "Technical manager of Milan pole front-end applications. As team leader I have coordinated a developer’s front-end team at work of company’s applications developments and design of several shared libraries."
        },
        {
          title: "Angular medior developer",
          company: "Findomestic ( consulente )",
          startDate: "2017",
          endDate: "2018",
          description:
            "Front-end developer in an application of loans request and management from a bank. The application has been created for a customer but developed with a specific architecture to guarantee the different customization for future customers."
        },
        {
          title: "Angular junior developer",
          company: "Unicredit ( consulente )",
          startDate: "2017",
          description:
            "Front-end developer for a building’s appraisals application. This was my and my company’s first Angular project. It required a continuous research of this new framework."
        },
        {
          title: "Java developer",
          company: "Unicredit ( consulente )",
          startDate: "2017",
          description:
            "Java programmer for evolutionary and fixing of a big Java application used in production bank’s environment. Participation in the pre development analysis phase and obviously in the real development phase."
        },
        {
          title: "Shell scripting and Database developer",
          company: "Unicredit ( consulente )",
          startDate: "2016",
          description:
            "Technical support of a big java application used by the bank to price the equities. The work was in a big team of developers and economist from different countries and my task was to maintain, fix and develop evolutionary of shall scripting used to launch, monitor and log the main application. This was done with .sh script, sql script and schedulator programs."
        }
      ],
      courses: [
        {
          title: "Corso React.js",
          course: "Udemy",
          startDate: "2019",
          description: "Corso di livello avanzato per sviluppo su React"
        },
        {
          title: "Certificazione di Inglese",
          course: "ABA English",
          startDate: "2019",
          description: "Certificazione di inglese di livello B1"
        }
      ],
      studies: [
        {
          title: "Laurea in Informatica",
          school: "Università degli studi di Milano",
          startDate: "2011",
          endDate: "2016",
          description: "Corso di laurea in Informatica"
        },
        {
          title: "Diploma scientifico",
          school: "Liceo De Amicis",
          startDate: "2005",
          endDate: "2010",
          description: "Diploma di liceo scientifico"
        }
      ],
      services: [
        {
          icon: "icon-paintbrush",
          title: "Web Design",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        },
        {
          icon: "icon-briefcase",
          title: "Branding",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        },
        {
          icon: "icon-search",
          title: "Analytics",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        },
        {
          icon: "icon-bargraph",
          title: "Web Developent",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        },
        {
          icon: "icon-genius",
          title: "Web Marketing",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        },
        {
          icon: "icon-chat",
          title: "Support",
          description:
            "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
        }
      ],
      skills: [
        { name: "HTML5", value: "95" },
        { name: "CSS3", value: "93" },
        { name: "jQuery", value: "90" },
        { name: "PHP", value: "89" },
        { name: "MySQL", value: "95" },
        { name: "AngularJS", value: "90" },
        { name: "Ruby", value: "85" },
        { name: "Java", value: "90" }
      ]
    };
  }

  render() {
    return (
      <div id="page">
        <AboutMe />
        <MyResume
          works={this.state.works}
          courses={this.state.courses}
          studies={this.state.studies}
        />
        <MyServices services={this.state.services} />
        <Skills skills={this.state.skills} />
        <Work />
        <Posts posts={this.state.posts} />
        <HireMe />
        <Contact />
      </div>
    );
  }
}
