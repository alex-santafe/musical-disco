import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faWeixin,
  faSquareWhatsapp,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"
import "../components/caja.css"
//
const socialLinks = [
  {
    text: "Email",
    url: "mailto:alexsantafe@gmail.com",
    description: "faLinkedin",
  },
  {
    text: "Linked In",
    url: "https://www.linkedin.com/in/alexsantafe/",
    description: "faLinkedin",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/alexsantafe/",
    description: "faSquareInstagram",
  },
  {
    text: "Whatsapp",
    url: "https://www.instagram.com/alexsantafe/",
    description: "fas faSquareWhatsapp",
  },
]
const title = " "

const Thankyou = () => (
  <Layout headerChild={title} style={{ background: "var(--color-primary)" }}>
    <div
      style={{
        display: "flex",
        gap: "2rem",
        margin: "var(--space-5)",
        minHeight: "80vh",
        //fontSize: "1.25rem",
        //justifyContent: "space-around",
      }}
    >
      <div style={{ width: "100%", maxWidth: "60vw" }}>
        <StaticImage
          src="../images/kids-bn.png"
          alt="A drawing by Alex Santafe"
          placeholder="blurred"
          //layout="fixed"
          //width={600}
          //height={600}
          objectFit="cover"
          objectPosition="left center"
          style={{
            objectFit: "cover",
            objectPosition: "right center",
            width: "400px",
            display: "flex",
          }}
        />
        <h2
          style={{
            fontSize: "2rem",
            //fontWeight: "300",
            margin: "0",
            maxWidth: "30ch",
          }}
        >
          Thank you!
        </h2>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "300",
            marginTop: "0",
            maxWidth: "38ch",
          }}
        >
          I will read your message carefully and get back to you as soon as
          possible.
        </h3>
        <div
          className="buttonlinks"
          style={{
            display: "flex",
            //fontSize: `var(--font-sm)`,
            fontSize: `1rem`,
            textDecoration: `none`,

            lineHeight: `100%`,
            color: `var(--color-font)`,
            marginTop: "2rem",
          }}
        >
          <p style={{ marginTop: "8px" }}>In the meantime:</p>

          <li style={{ color: "var(--color-link)" }} className="socialLinks">
            <a
              href="mailto:alexsantafe@gmail.com"
              style={{
                color: "var(--color-link)",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "2px",
              }}
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ marginRight: "16px", width: "24px" }}
                icon={faEnvelope}
              />
              Email
            </a>
          </li>
          <li style={{ color: "var(--color-link)" }} className="socialLinks">
            <a
              href="https://www.linkedin.com/in/alexsantafe/"
              style={{
                color: "var(--color-link)",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "2px",
              }}
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ marginRight: "16px", width: "24px" }}
                icon={faLinkedin}
              />
              LinkedIn
            </a>
          </li>
          <li style={{ color: "var(--color-link)" }} className="socialLinks">
            <a
              href="https://www.instagram.com/alexsantafe/"
              style={{
                color: "var(--color-link)",
                gap: "1.25rem",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "2px",
              }}
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ marginRight: "16px", width: "24px" }}
                icon={faSquareInstagram}
              />
              Instagram
            </a>
          </li>
          <li style={{ color: "var(--color-link)" }} className="socialLinks">
            <a
              href="https://www.instagram.com/alexsantafe/"
              style={{
                color: "var(--color-link)",
                gap: "1.25rem",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "2px",
              }}
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ marginRight: "16px", width: "24px" }}
                icon={faWeixin}
              />
              WeChat
            </a>
          </li>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default Thankyou
