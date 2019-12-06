import React from "react";

function AboutMe() {
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li>
                <span className="first-block">Full Name:</span>
                <span className="second-block">Lorenzo Licheri</span>
              </li>
              <li>
                <span className="first-block">Phone:</span>
                <span className="second-block">+39 338 9410207</span>
              </li>
              <li>
                <span className="first-block">Email:</span>
                <span className="second-block">lorenzolicheri@gmail.com</span>
              </li>
              <li>
                <span className="first-block">Website:</span>
                <span className="second-block">www.lorenzolicheri.com</span>
              </li>
              <li>
                <span className="first-block">Address:</span>
                <span className="second-block">
                  Peschiera Borromeo (MI) - ITALY
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Ciao e benvenuto sul mio sito!</h2>
            <p>
              Troverai nelle sezioni sottostanti del sito tutte le mie
              competenze e precedenti esperienze lavorative descritte in maniera
              puntuale e dettagliata, in questa sezione mi limiterò quindi a
              dirti brevemente chi sono.
            </p>
            <p>
              Sono un programmatore laureato in Informatica presso l'Università
              degli studi di Milano e attualmente Sviluppatore Web con
              competenze da Full Stack Developer.
            </p>
            <p>
              Lavorando sia in grandi contesti aziendali che in progetti portati
              avanti in autonomia sono in grado di adattarmi senza problemi a
              progetti di diversa natura e diversa strutturazione del lavoro.
            </p>
            <p>
              Se stai cercando una figura con il giusto equilibrio tra
              competenze tencniche, creatività e professionalità hai trovato il
              sito giusto.
            </p>
            <br />
            <ul className="fh5co-social-icons">
              <li>
                <a href="https://github.com/llicheri">
                  <i className="icon-github2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lorenzo-licheri-28630b61/">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_lorenzolicheri/">
                  <i className="icon-instagram2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="icon-facebook2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
