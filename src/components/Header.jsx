import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../index.css"

export const Header = class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "nb-No",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
    if (this.state.value === "nn-No") {
      window.location.href = "https://icn-sok-nonn.netlify.app/"
    }
  }

  render() {
    return (
      <header>
        <a href="/">
          <img
            className="alignLeft"
            src="assets/ehelse_logo_white.png"
            alt="Logo e-helse"
            height="132px"
          ></img>
        </a>

        <select
          id="lang"
          value={this.state.value}
          onChange={this.handleChange}
          className="headerLink"
        >
          <option value="nn-No">Bokmål</option>
          <option value="nb-No">Nynorsk</option>
        </select>
      </header>
    )
  }
}

export default Header
