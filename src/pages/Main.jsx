import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { MaalAutosuggest } from "../components/MaalAutosuggest";
import { DiagnoseAutosuggest } from "../components/DiagnoseAutosuggest";
import { IntervjensjonAutosuggest } from "../components/IntervjensjonAutosuggest";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";

export const Main = class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sctidDiagnose: "",
      sctidMaal: "",
      sctidIntervensjon: "",

      dignoseData: {},
      maalData: {},
      intervensjonsData: {},
    };
  }

  getDiagnoseData = (suggestion) => {
    if (!suggestion) return;
    this.setState({
      sctidDiagnose: suggestion.concept.conceptId,
      diagnoseData: suggestion,
    });
  };

  getMaalData = (suggestion) => {
    if (!suggestion) return;
    this.setState({
      sctidMaal: suggestion.concept.conceptId,
      maalData: suggestion,
    });
  };

  getIntervensjonsData = (suggestion) => {
    if (!suggestion) return;
    this.setState({
      sctidIntervensjon: suggestion.concept.conceptId,
      intervensjonsData: suggestion,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <article>
          <div className="form group">
            <h1>Funn eller diagnose</h1>

            <DiagnoseAutosuggest
              id="diagnose"
              suggestCallback={this.getDiagnoseData}
              placeholder="Søk diagnose"
              clearCallback={() => this.setState({ sctidDiagnose: "" })}
            />
            {this.state.diagnoseData && this.state.sctidDiagnose ? (
              <div className="form group">
                <p>
                  Foretrukken term: {this.state.diagnoseData.concept.pt.term}
                  <br />
                  SNOMED-id: {this.state.sctidDiagnose}
                </p>
              </div>
            ) : null}
          </div>
        </article>

        <article>
          <div className="form group">
            <h1>Mål</h1>

            <MaalAutosuggest
              suggestCallback={this.getMaalData}
              placeholder="Søk mål"
              clearCallback={() => this.setState({ sctidMaal: "" })}
            />
            {this.state.maalData && this.state.sctidMaal ? (
              <div className="form group">
                <p>
                  Foretrukken term: {this.state.maalData.concept.pt.term}
                  <br />
                  SNOMED-id: {this.state.sctidMaal}
                </p>
              </div>
            ) : null}
          </div>
        </article>

        <article>
          <div className="form group">
            <h1>Intervensjon</h1>
            <IntervjensjonAutosuggest
              suggestCallback={this.getIntervensjonsData}
              placeholder="Søk intervensjon"
              clearCallback={() => this.setState({ sctidIntervensjon: "" })}
            />
            {this.state.intervensjonsData && this.state.sctidIntervensjon ? (
              <div className="form group">
                <p>
                  Foretrukken term:{" "}
                  {this.state.intervensjonsData.concept.pt.term}
                  <br />
                  SNOMED-id: {this.state.sctidIntervensjon}
                </p>
              </div>
            ) : null}
          </div>
        </article>
        <Footer />
      </div>
    );
  }
};

export default Main;
