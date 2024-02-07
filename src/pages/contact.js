import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
import { navigate } from "gatsby"
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
const handleSubmit = event => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => navigate("/thank-you/"))
    .catch(error => alert(error))
}
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
const title = "Contact"

const Contact = () => (
  <Layout headerChild={title}>
    <div
      style={{
        display: "flex",
        //gap: "2rem",
        margin: "var(--space-5)",
        minHeight: "80vh",
        //fontSize: "1.25rem",
        //justifyContent: "space-around",
      }}
    >
      <div>
        <StaticImage
          src="../images/soldiers.png"
          alt="A drawing by Alex Santafe"
          placeholder="none"
          loading="lazy"
          className="hidemobile"
          //layout="fixed"
          //width={600}
          //height={600}
          objectFit="cover"
          objectPosition="left center"
          style={{
            position: "absolute",
            objectFit: "cover",
            objectPosition: "right center",
            width: "760px",
            bottom: "1rem",
            right: "-170px",
            display: "flex",
          }}
        />
      </div>
      <div style={{ width: "100%", maxWidth: "740px" }}>
        <h2 style={{ fontWeight: "300" }}>
          Write down some of your ideas or simply say hello
        </h2>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label style={{ display: "flex", flexDirection: "column" }}>
            Your Name
            <input type="text" name="name" id="name" />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            Your Email
            <input type="email" name="email" id="email" />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            What is it About?
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Hey Alex"
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            Your Message
            <TextareaAutosize
              name="message"
              id="message"
              rows="5"
              style={{ paddingTop: "1rem" }}
              placeholder="I've got an idea for.."
              minRows={2}
            />
          </label>
          <button
            type="submit"
            className="button-primary"
            //onClick
            style={{
              //padding: "24px",
              fontSize: "2rem",
              //background: "var(--color-link)",
              color: "var(--color-link)",
              textDecoration: "underline",
              fontFamily: "Cormorant Garamond",
              textAlign: "left",
              textDecorationThickness: "1.5px",
              textUnderlineOffset: "2px",
            }}
          >
            Send
          </button>
        </form>
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
          <p style={{ marginTop: "8px" }}>Or you can find me here</p>

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
          {/*
                    
                    {socialLinks.map(link => (
                      <li style={{ color: "var(--color-font)" }} className="socialLinks">
                        <FontAwesomeIcon icon={`${link.description}`} />
                        {/* <FontAwesomeIcon icon={faWeixin} />
                          <FontAwesomeIcon icon={faSquareWhatsapp} />
                    <FontAwesomeIcon icon={faSquareInstagram} /> 
                        {console.log(link.description)}
                        <a
                          href={`${link.url}`}
                          style={{ color: "var(--color-font)" }}
                          target="_blank"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))
                    */}
        </div>
      </div>
      {/*}
      <div>
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
            position: "absolute",
            objectFit: "cover",
            objectPosition: "right center",
            width: "760px",
            top: "80px",
            right: "-170px",
            display: "flex",
          }}
        />
        </div>*/}
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default Contact
/*  <Layout headerChild={title} style={{ padding: "0", margin: "0" }}>
    <div>
      <div
        style={{
          maxWidth: "60%",
          minHeight: "100vh",
          padding: "var(--space-5)",
          //margin: "auto",
        }}
      >
        
        <p>
          I'm Alex, an award-winning visual artist and creative director,
          focusing on illustration and product design with a passion for
          creating useful, engaging & beautiful things. Originally from
          Barcelona, have been living Beijing for more than 8 years, now based
          in Hong Kong.
        </p>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
          }}
        >
          <strong>Title</strong>
        </p>
        {cvItems.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              display: "flex",
              gap: "2rem",
              borderBottom: "1px solid #ebebeb",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p>{item.year}</p>
            </div>
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p style={{ textTransform: "capitalize" }}>
                <strong>{item.name}</strong>
              </p>
            </div>
            <div
              className="right"
              style={
                {
                  // width: "80%"
                }
              }
            >
              <p>{item.feat}</p>
            </div>
          </div>
        ))}

        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default SecondPage
/*
<Layout headerChild={title}>
    <h1>Hello I'm Alex Santafe</h1>
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <div>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
        <p>
          An award-winning visual artist and creative director, focusing on
          illustration and product design with a passion for creating useful,
          engaging & beautiful things. Originally from Barcelona, have been
          living Beijing for more than 8 years, now based in Hong Kong.
        </p>
      </div>
      <div>
        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
          }}
        >
          <strong>Title</strong>
        </p>
        {cvItems.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              display: "flex",
              gap: "2rem",
              borderBottom: "1px solid #ebebeb",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p>{item.year}</p>
            </div>
            <div
              className="left"
              style={
                {
                  //width: "20%"
                }
              }
            >
              <p style={{ textTransform: "capitalize" }}>
                <strong>{item.name}</strong>
              </p>
            </div>
            <div
              className="right"
              style={
                {
                  // width: "80%"
                }
              }
            >
              <p>{item.feat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default Contact

*/
