import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export const Footer = class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <section>
          <img
            className="alignLeft"
            src="assets/footer_logo.png"
            alt="Logo e-helse"
            width="296px"
          ></img>
        </section>

        <section>
          <p>
            Dette verktøyet er utviklet for å understøtte behov for forvaltning
            av referansesett i programperioden til Program Kodeverk og
            Terminologi. Videre forvaltning etter programperioden er ikke
            planlagt. Verktøyet er under utvikling og brukes på egen risiko.
          </p>
        </section>

        <section>
          <p>
            <a
              className="foooterLink"
              href="https://www.ehelse.no/prosjekt/program-for-kodeverk-og-terminologi"
            >
              Program kodeverk og terminolog
            </a>
            <br />
            <a className="foooterLink" href="https://www.ehelse.no">
              ehelse.no
            </a>
          </p>
        </section>
      </div>
    );
  }
};

export default Footer;
