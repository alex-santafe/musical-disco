import * as React from "react"
import { navigate } from "gatsby"

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

function CtaNocalling() {
  return (
    <div
      className="quote"
      style={{
        marginTop: "2rem",
        display: "flex",
        //background: "#dadada",
        background: "var(--color-primary)",
        color: "var(--color-font)",
        padding: "var(--space-5)",
        //display: "flex",
        gap: "3rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
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
  )
}

export default CtaNocalling
