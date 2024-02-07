import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
//
import Layout from "../components/layout"
import Slider from "../components/slider"
//import Slider3 from "../components/slider4"
//import CardSlider from "../components/card-slider"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "../components/caja.css"
import JSONData from "../pages/images.json"

const Cards = [
  {
    year: "2013",
    name: "2nd Prize - BBVA Bank Ricard Cami Award",
    color: "red",
    zindex: "5",
  },
  {
    year: "2011",
    name: "2nd Prize - XIII Miquel Viladrich Painting Awards",
    color: "blue",
    zindex: "4",
  },
  {
    year: "2011",
    name: "1st Prize - Spanish National Association of Neurology Painting Awards",
    color: "yellow",
    zindex: "3",
  },
]

const Testing = ({ data }) => {
  const headerChild = "Illustration"
  //const pics = data.allFile.edges.node
  //const image = getImage(data.allFile.edges.node)
  const newData = data.allFile.edges.slice().reverse()
  //
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxAltImage, setLightboxAltImage] = useState("")
  const [lightboxTitle, setLightboxTitle] = useState("")
  const [lightboxColor, setLightboxColor] = useState("")
  const [lightboxDescription, setLightboxDescription] = useState("")
  const [lightboxTextColor, setLightboxTextColor] = useState("")
  const [lightboxClient, setLightboxClient] = useState("")
  const [lightboxUrl, setLightboxUrl] = useState("")
  const [lightboxIndex, setLightboxIndex] = useState("")

  const openLightbox = (
    src,
    alt,
    title,
    color,
    description,
    textcolor,
    client,
    url,
    index
  ) => {
    setLightboxImage(src)
    setLightboxAltImage(alt)
    setLightboxTitle(title)
    setLightboxColor(color)
    setLightboxDescription(description)
    setLightboxTextColor(textcolor)
    setLightboxClient(client)
    setLightboxUrl(url)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage("")
    setLightboxAltImage("")
  }
  //

  //
  return (
    <Layout headerChild={headerChild}>
      <div
        style={{
          padding: "0 32px",
          maxWidth: "70vw",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="hero"
          style={{
            height: "calc(100vh - 90px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontWeight: "800",
              fontSize: "7vw",
              whiteSpace: "pre",
              fontFamily: "Hanken Grotesk",
              letterSpacing: "-0.5vw",
              lineHeight: "100%",
              color: "000",
              marginBottom: "2vh",
            }}
          >
            No siesta until{"\n"}the job is done.
          </h1>
          {/** here display box */}
          <div
            style={{
              //background: "var(--color-primary)",
              height: "100%",
              display: "flex",
              //flexDirection: "column",
            }}
          >
            <span style={{ background: "var(--color-primary)" }}>
              <p style={{ lineHeight: "100%", marginTop: ".5rem" }}>
                From Barcelona, based in Hong Kong
              </p>
            </span>
            <span style={{ width: "80%" }}>
              {/*<p
                style={{
                  lineHeight: "100%",
                  marginTop: ".5rem",
                  border: "1px solid #000",
                  borderRadius: "32px",
                  padding: "32px",
                }}
              >
                From Barcelona, based in Hong Kong
              </p>
              <StaticImage
                src="../gallery/alex-santafe-01.jpg"
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
                  //position: "absolute",
                  objectFit: "cover",
                  objectPosition: "right center",
                  //width: "760px",
                  //bottom: "1rem",
                  // right: "-170px",
                  width: "80%",
                  display: "flex",
                  borderRadius: "32px",
                }}
              />
              <StaticImage
                src="../gallery/alex-santafe-02.jpg"
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
                  //position: "absolute",
                  objectFit: "cover",
                  objectPosition: "right center",
                  //width: "760px",
                  //bottom: "1rem",
                  // right: "-170px",
                  width: "80%",
                  display: "flex",
                  borderRadius: "32px",
                }}
              />
              */}
              {/*{Cards.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="card"
                    style={{
                      backgroundColor: item.color,
                      borderRadius: "32px",
                      height: "90%",
                      position: "relative",
                      zIndex: item.zindex,
                    }}
                  >
                    {item.name}
                    {item.year}
                  </div>
                </React.Fragment>
                  ))}*/}
                  
            </span>
          </div>
          {/** here menu below */}
          <div
            style={{
              padding: "2vh 0",
              display: "flex",
              //width: "50%",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <span style={{ width: "40%" }}>
              <p style={{ lineHeight: "100%", marginTop: ".5rem" }}>
                From Barcelona, based in Hong Kong
              </p>
            </span>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  lineHeight: "100%",
                  //marginTop: ".5rem",
                  fontSize: "2vw",
                  letterSpacing: "-0.1vw",
                  fontWeight: "700",
                }}
              >
                Work
              </p>
              <ul className="navbar">
                <li style={{}}>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
              </ul>
              <ul className="navbar">
                <li style={{}}>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontSize: "16px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Menu Item here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gallery">
          {newData?.map(item => {
            //src, alt, title, description
            const src = item.node.childImageSharp.gatsbyImageData
            //console.log(src)
            const color =
              item.node.childImageSharp.gatsbyImageData.backgroundColor

            function pickTextColorBasedOnBgColorAdvanced(
              bgColor,
              lightColor,
              darkColor
            ) {
              var color =
                bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor
              var r = parseInt(color.substring(0, 2), 16) // hexToR
              var g = parseInt(color.substring(2, 4), 16) // hexToG
              var b = parseInt(color.substring(4, 6), 16) // hexToB
              var uicolors = [r / 255, g / 255, b / 255]
              var c = uicolors.map(col => {
                if (col <= 0.03928) {
                  return col / 12.92
                }
                return Math.pow((col + 0.055) / 1.055, 2.4)
              })
              var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
              return L > 0.179 ? darkColor : lightColor
            }

            const textColor = pickTextColorBasedOnBgColorAdvanced(
              color,
              "#FFFFFF",
              "#000000"
            )
            //console.log(textColor)
            //console.log(backgroundColor)
            //console.log("item is " + item.node.relativePath)
            //return JSONData.content.map((jItem, jIndex) => {
            return JSONData.content.map((jItem, jIndex) => {
              const alt = jItem.alt
              const title = jItem.title
              const image = jItem.image
              const description = jItem.description
              const client = jItem.client
              const url = jItem.url
              const index = jIndex
              //const [isHovering, setIsHovering] = useState(false)
              //
              //
              //console.log(src)
              //console.log(alt)
              //console.log(title)
              //console.log("jItem is " + item.node.relativePath)

              if (image == item.node.relativePath)
                return (
                  <span
                    type="button"
                    className="gallery__item"
                    style={{ justifyContent: "center" }}
                    key={jIndex}
                    style={{ display: "flex", flexDirection: "column" }}
                    //onHover={}
                    onClick={
                      () =>
                        openLightbox(
                          src,
                          alt,
                          title,
                          color,
                          description,
                          textColor,
                          client,
                          url,
                          index
                        ) //,
                      // console.log("open!") // //
                    }
                  >
                    {/* <p>
                    {title} - {alt}
              </p> */}

                    <GatsbyImage
                      className="gallery__image"
                      image={item.node.childImageSharp.gatsbyImageData}
                      objectPosition={jItem.position}
                      alt={alt}
                      key={jIndex}
                      loading="lazy"
                      width="250px"
                      height="250px"
                      layout="constrained"
                      placeholder="dominantColor"
                    />
                    <p>hello xizhaoma</p>
                    <p>other thing here</p>
                  </span>
                )

              //}
            })
          })}
        </div>
      </div>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Illustration" />
export const query = graphql`
  query Testing {
    allFile(
      filter: { sourceInstanceName: { eq: "gallery" } }
      sort: { relativePath: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              backgroundColor: ""
              layout: CONSTRAINED
              quality: 75
              width: 1920
            )
          }
          relativePath
        }
      }
    }
  }
`

export default Testing
