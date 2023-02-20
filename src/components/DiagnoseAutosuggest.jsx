import React from "react";
import Autosuggest from "react-autosuggest";
import "./SNOMEDAutosuggestRender.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { branchForAutosuggest, terminlogyServer } from "../config.ts";
import { Spinner } from "reactstrap";

export const DiagnoseAutosuggest = class DiagnoseAutosuggest extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      showSpinner: false,
      value: "",
      suggestions: [],
      sourceId: null,
    };
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => {
    // this.props.suggestCallback(suggestion);
    console.log(
      "selected suggestion conceptId: ",
      suggestion.concept.conceptId
    );

    this.props.suggestCallback(suggestion);

    return suggestion.term + " (" + suggestion.concept.conceptId + ")";
    // return suggestion.term;
  };

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => (
    <>
      {suggestion.term} ({suggestion.concept.conceptId})
    </>
  );

  fetchSuggestions = (value) => {
    if (!value || value !== this.state.value) return;

    const currentValue = value;
    const term = value.trim().toLowerCase();

    // TODO: get branch and server from input
    // previouse day of release before the actul date release?

    let getTermsUrl =
      terminlogyServer +
      "browser/" +
      branchForAutosuggest +
      "/descriptions?" +
      "term=" +
      term +
      "&conceptRefset=138441000202109&active=true&conceptActive=true&groupByConcept=true&offset=0&limit=10";

    console.log("getTermsUrl with suggestion", getTermsUrl);

    if (term && term.length >= 3) {
      // First request to Snomed: search by term
      this.setState({ showSpinner: true });
      fetch(getTermsUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Language": "no-x-61000202103",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("datta", data);
          // check if input is still the same after fetch (fetch takes time)
          if (this.state.value === currentValue && Array.isArray(data.items)) {
            this.setState({
              suggestions: data.items,
              showSpinner: false,
            });
          }
        });
    } else {
      this.setState({
        suggestions: [],
      });
    }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    //' Pneu  ' -> 'pneu'
    setTimeout(() => this.fetchSuggestions(value), 350);
    console.log("on fetch requested!");
    if (typeof this.props.clearCallback === "function")
      this.props.clearCallback();
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onChange = (event, { newValue }) => {
    console.log("onchange!");
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      value,
      onChange: this.onChange,
      placeholder: this.props.placeholder,
    };

    // Finally, render it!
    return (
      // add custom border if invalid
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        {this.state.showSpinner ? <Spinner color="success" /> : null}
      </div>
    );
  }
};

export default DiagnoseAutosuggest;
