import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarCss, setNavbarCss] = useState("collapse navbar-collapse show")
  const [navbarLinks, setNavbarLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => {}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navbarCss}>
          <ul className="navbar-nav mx-auto">
            {navbarLinks.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
