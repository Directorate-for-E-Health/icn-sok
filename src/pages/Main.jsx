import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { MaalAutosuggest } from "../components/MaalAutosuggest";
import { DiagnoseAutosuggest } from "../components/DiagnoseAutosuggest";
import { IntervjensjonAutosuggest } from "../components/IntervjensjonAutosuggest";

export const Main = class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sctid: "",
      data: {},
    };
  }

  suggestCallback = (suggestion) => {
    if (!suggestion) return;
    console.log("got suggestion:", suggestion);
    this.setState({ sctid: suggestion.concept.conceptId, data: suggestion });
  };

  renderSuggestionOnThePage = (data) => {
    if (data.term && this.state.sctid)
      return (
        <div>
          Term: {data.term}
          <br />
          ConceptId: {this.state.sctid}
        </div>
      );
  };

  render() {
    return (
      <div className="App">
        <article>
          <div className="form group">
            <h1>Funn eller diagnose</h1>

            <DiagnoseAutosuggest
              suggestCallback={this.suggestCallback}
              placeholder="Søk diagnose"
              clearCallback={() => this.setState({ sctid: "" })}
            />
          </div>
          <div className="form group">
            {this.renderSuggestionOnThePage(this.state.data)}
          </div>
        </article>
        <article>
          <div className="form group">
            <h1>Mål</h1>

            <MaalAutosuggest
              suggestCallback={this.suggestCallback}
              placeholder="Søk mål"
              clearCallback={() => this.setState({ sctid: "" })}
            />
          </div>
          <div className="form group">
            {this.renderSuggestionOnThePage(this.state.data)}
          </div>
        </article>

        <article>
          <div className="form group">
            <h1>Intervjensjon</h1>

            <IntervjensjonAutosuggest
              suggestCallback={this.suggestCallback}
              placeholder="Søk intervjensjon"
              clearCallback={() => this.setState({ sctid: "" })}
            />
          </div>
          <div className="form group">
            {this.renderSuggestionOnThePage(this.state.data)}
          </div>
        </article>
      </div>
    );
  }
};

export default Main;
