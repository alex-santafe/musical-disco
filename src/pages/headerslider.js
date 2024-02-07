import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
//
const title = "HeaderSlider"

/*const cvItems = [
  {
    year: "2013",
    name: "BBVA Bank",
    feat: "2nd Prize, Ricard Cami Award",
  },
  {
    year: "2011",
    name: "Torrelameu City Hall",
    feat: "XIII Miquel Viladrich Painting Awards",
  },
  {
    year: "2011",
    name: "Spanish National Association of Neurology",
    feat: "1st Prize Neurology Association Painting Awards",
  },
]*/
const cvItems = [
  {
    year: "2013",
    name: "2nd Prize - BBVA Bank Ricard Cami Award",
  },
  {
    year: "2011",
    name: "2nd Prize - XIII Miquel Viladrich Painting Awards",
  },
  {
    year: "2011",
    name: "1st Prize - Spanish National Association of Neurology Painting Awards",
  },
]
const clients = [
  {
    name: "Statrys",
  },
  {
    name: "AmCham China",
  },

  {
    name: "The China Project",
  },
  {
    name: "Serica Podcast",
  },
  {
    name: "China-Global South Project",
  },
  {
    name: "Yale University",
  },
]
const HeaderSlider = () => (
  <Layout headerChild={title}>
    <Slider></Slider>
    <div
      style={{
        display: "flex",
        gap: "2rem",
        margin: "var(--space-5)",
        minHeight: "80vh",
        //fontSize: "1.25rem",
      }}
    >
      <div>
        <p>
          Hi, I'm Alex Santafé, an illustrator passionate about bringing stories
          to life with a detailed black line and a hint of rough painting. My
          journey started with traditional painting, ventured into digital art,
          and landed in editorial work where I get to explore diverse topics
          with a photorealistic touch.
        </p>

        <strong>Process is about collaboration</strong>
        <p>
          I like to dive into each article, working hand-in-hand with editors to
          fine-tune concepts and ensure the illustration seamlessly aligns with
          the content.
        </p>
        <p>
          I also enjoy the challenge of grabbing attention with a single image,
          urging readers to dig into the content. Embracing the idea that{" "}
          <strong>"1 image is worth a thousand words"</strong>, I strive to
          synthesize the essence of each article visually.
        </p>

        <p>
          Appreciate you checking in! This is the space where I infuse
          dedication into every illustration, crafting a narrative within a
          single frame.
        </p>

        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
            marginTop: "2rem",
          }}
        >
          <strong>Selected Clients</strong>
        </p>

        <div
          style={{ maxWidth: "680px", marginBottom: "2rem", fontSize: "28px" }}
        >
          {clients.map((item, index) => (
            <React.Fragment key={index}>
              {item.name}
              {index !== clients.length - 1 && (
                <>
                  <span
                    className="dot"
                    style={{ position: "relative", verticalAlign: "sub" }}
                  >
                    ·
                  </span>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        {/*
        <p
          className="titleP"
          style={{
            borderBottom: "1px solid var(--color-primary)",
            width: "100%",
            display: "flex",
          }}
        >
          <strong>Awards</strong>
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
              <p style={{ textTransform: "capitalize" }}>{item.name}</p>
            </div>
            {/*<div
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
        */}

        {<Link to="/">Go back to the homepage</Link>}
      </div>

      <div></div>
    </div>
  </Layout>
)

export const Head = () => <Seo title={title} />

export default HeaderSlider
