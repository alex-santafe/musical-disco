import * as React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"

const quotes = [
  {
    quote: "Alex is such a delight to work with.",
    person: "Jeremy Goldkorn",
    media: ", Chief editor at The China Project",
  },
  {
    quote: "We are so thankful for the illustrations you did for us.",
    person: "Antonia Timmerman",
    media: ", Editor at The China-Global South Project",
  },
]

const samplePageLinks = [
  {
    text: "Send me a message",
    url: "contact",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "Read about me",
    url: "about",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "See some work",
    url: "",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

function Cta() {
  return (
    <div
      className="quote"
      style={{
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        //background: "#dadada",
        background: "var(--color-primary)",
        color: "var(--color-font)",
        padding: "var(--space-5)",
        //display: "flex",
        gap: "3rem",
        //maxWidth: "70vw",
      }}
    >
      <div style={{margin: "auto", maxWidth: "70vw", display: "flex", width: "100%"}}>
      <div
        style={{
          //width: "50%",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            display: "flex",
            //fontSize: "2em",
            marginBlockStart: "0.67em",
            margin: "0px",
            whiteSpace: "pre-line",
            //fontWeight: "bold",
            fontSize: `2em`,
            textDecoration: `none`,
            fontFamily: `Hanken Grotesk`,
            fontWeight: `700`,
            letterSpacing: `-1.7px`,
            lineHeight: `100%`,
            marginBottom: "1rem",
          }}
        >
          {`Want to collaborate?`}
        </h2>
        <div className="navbar" style={{ marginTop: "1.5rem" }}>
          <ul>
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <li>
                  {/* <span>0{i + 1}</span>- */}
                  <Link to={`/${link.url}`} style={{ fontSize: "2rem" }}>
                    {link.text}
                  </Link>
                  {/* i !== samplePageLinks.length - 1 && <> · </> */}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div 
        className="quotesbar"
        style={{ 
        display: "flex", 
        flexDirection: "column", 
        //width: "40%" 
      }}>
        <p>Nice words from previous collaborators</p>
        {quotes.map((item, index) => (
          <div
            style={{
              //width: "66%",
              //borderLeft: "2px solid var(--color-font)",
              //paddingLeft: "1rem",
              marginBottom: "1rem",
              //content: "“",
            }}
          >
            <p
              style={{
                //marginTop: "1rem",
                fontSize: "1.75rem",
                maxWidth: "100%",
                lineHeight: "100%",

                marginBottom: ".5rem",
              }}
            >
              "{item.quote}"
            </p>

            <p style={{ lineHeight: "100%" }}>
              <strong>{item.person}</strong>
              {item.media}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Cta
