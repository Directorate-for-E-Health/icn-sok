import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export const Footer = class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="wrapper">
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <img
                className="alignLeft"
                src="assets/footer_logo.png"
                alt="Logo e-helse"
                width="296px"
              ></img>
            </div>

            <div class="col-lg-4 col-md-6">
              <p>
                Dette verktøyet er utviklet for å understøtte behov for
                forvaltning av referansesett i programperioden til Program
                Kodeverk og Terminologi. Videre forvaltning etter
                programperioden er ikke planlagt. Verktøyet er under utvikling
                og brukes på egen risiko.
              </p>
            </div>

            <div class="col-lg-4 col-md-6"></div>
          </div>
          <div class="row line">
            <div class="col-lg-4 col-md-12"></div>

            <div class="col-lg-4 col-md-6">
              <p>
                <a
                  className="foooterLink"
                  href="https://www.ehelse.no/prosjekt/program-for-kodeverk-og-terminologi"
                >
                  Program kodeverk og terminolog
                </a>
              </p>
            </div>

            <div class="col-lg-4 col-md-6">
              <p>
                <a className="foooterLink" href="https://www.ehelse.no">
                  ehelse.no
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
