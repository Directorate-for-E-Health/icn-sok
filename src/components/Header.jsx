import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../index.css"

export const Header = class Header extends React.Component {
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
        <a href="/" className="headerLink">
          Nynorsk
        </a>
      </header>
    )
  }
}

export default Header
