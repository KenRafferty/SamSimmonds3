import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStlyes from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background:"#005EB8",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={headerStlyes.navList}>
           <li>
            <Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/">Home</Link> 
            </li>
          <li>
            <Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/page-2">Venue</Link> 
            </li>
            <li>
            <Link className={headerStlyes.navItem} activeClassName={headerStlyes.activeNavItem} to="/">Sponsors</Link> 
            </li>

          </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
