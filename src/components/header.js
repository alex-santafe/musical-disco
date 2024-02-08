import * as React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, headerChild }) => (
  <header
    style={{
      //margin: `0 auto`,
      marginTop: `1rem`,

      paddingTop: "40px",
      paddingLeft: "32px",
      paddingRight: "32px",
      paddingBottom: "32px",
      maxWidth: "70vw",
      margin: "auto",
      display: "flex",
      //flexDirection: "column",

      display: `flex`,
      alignItems: `flex-start`,
      justifyContent: `space-between`,
      zIndex: "1",
      position: "sticky",
    }}
  >
    <nav style={{ gap: "8px", display: "flex", width: "40%" }}>
      <Link
        style={{
          //fontFamily: "Henken Grotesk",
          padding: "4px 16px",
          fontSize: "18px",
          background: "#f3f3f3",
          borderRadius: "8px",
          fontWeight: "700",
          color: "#000",
          textDecoration: "none",
        }}
        to="/"
      >
        Projects{" "}
      </Link>
      <Link
        style={{
          //fontFamily: "Henken Grotesk",
          padding: "4px 16px",
          fontSize: "18px",
          fontWeight: "700",
          background: "#f3f3f3",
          borderRadius: "8px",
          color: "#939393",
          textDecoration: "none",
        }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{
          //fontFamily: "Henken Grotesk",
          padding: "4px 16px",
          fontSize: "18px",
          fontWeight: "700",
          background: "#f3f3f3",
          borderRadius: "8px",
          color: "#939393",
          textDecoration: "none",
        }}
        to="/contact"
      >
        Contact
      </Link>
      <Link
        style={{
          //fontFamily: "Henken Grotesk",
          padding: "4px 16px",
          fontSize: "18px",
          fontWeight: "700",
          background: "#f3f3f3",
          borderRadius: "8px",
          color: "#939393",
          textDecoration: "none",
        }}
        to="/ideas"
      >
        Ideas
      </Link>
    </nav>
    <div
      style={{ display: "flex", width: "50%", justifyContent: "space-between" }}
    >
      <span>
        <p style={{ margin: "0", fontSize: "16px", color: "#888888" }}>
          {" "}
          Creative Agency
        </p>
        <p style={{ margin: "0", fontSize: "16px", color: "#888888" }}>
          {" "}
          Hong Kong - Barcelona
        </p>
      </span>
      <span>
        <p style={{ margin: "0", fontSize: "16px", color: "#888888" }}>
          {" "}
          ©2024
        </p>
      </span>
      <div className="header_title" style={{}}>
        <Link
          to="/"
          style={{
            //fontSize: `var(--font-sm)`,
            fontSize: `2em`,
            textDecoration: `none`,
            fontFamily: `Hanken Grotesk`,
            fontWeight: `700`,
            letterSpacing: `-1.7px`,
            lineHeight: `100%`,
            color: "#000",
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)

export default Header
