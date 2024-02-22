import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
import Nav from "../components/menunav"
import { navigate } from "gatsby"
import interrogante from "../images/interrogante.png"
//
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

//
import { graphql } from "gatsby"
//import { RichText } from "prismic-reactjs"
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
import "../components/box.scss"
//
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
const title = "Projects"

//const Testing = ({ data }) => {
const getLength = ({ length }, minLength) => minLength > length ? minLength : length;

const Projects = ({ data, minLength = 34 }) => {


    const BlogPosts = () => {
        console.log(data.allPrismicPost)
        const posts = data.allPrismicPost.edges
        const articles = data.allPrismicPost
        const results = []
        for (let i = 0; i < 18; i++) {
            results.push(posts[i] || 'placeholder')
        }
        console.log(results)
        function shuffle(array) {
            let currentIndex = array.length, randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex > 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        //shuffle(results)
        //shuffle(posts)
        //console.log(results)
        if (!posts) return null
        var arrResult = [];
        posts.forEach(function (value) {
            arrResult[value.id] = value;
        });
        const postReverse = posts
            .map(element => {
                return element;
            })
            .reverse();
        //console.log(postReverse)
        posts.forEach((object, i) => object.id = i + 1);
        return (
            <div
                className="grid-sketches"
                style={{
                    maxWidth: "100vw",
                    padding: "0 100px",
                    background: "var(--color-bg-blue)",
                    /* display: "flex",
                    gap: "1rem",
                    margin: "var(--space-5)",
                    //maxWidth: "99vw",
                    padding: "100px",
                    margin: "auto",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    minHeight: "100vh",
                    background: "#f5f5f5",*/

                }}
            >

                {posts.toReversed().map((post, index) => {
                    //const id = index + 1
                    //console.log(id)
                    function pad(d) {
                        return (d < 10) ? '0' + d.toString() : d.toString();
                    }

                    return (
                        <Draggable>
                            <div
                                className="sketchCard"
                                style={{ /*
                                    background: "#fff",
                                borderRadius: "16px",
                                height: "calc((100vw - 100px) / 4)",
                                display: "flex",
                                padding: "16px",
                                    flexDirection: "column",
                            //justifyContent: "space-between",
                                    justifyContent: "flex-start",
                                    gap: "1rem",
                                    overflow: "hidden",*/
                                }}
                                key={post.node.id}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: " space-between",
                                        alignItems: "center",

                                    }}>

                                    <time className="figure">{post.node?.data.date}</time>
                                    <span className="divider"></span>
                                    <p className="figure">
                                        ID {pad(post.id)}
                                    </p>
                                </div>

                                {(() => {
                                    if (!post.node) {
                                        return (

                                            <h2 style={{ margin: "0", lineHeight: "100%" }}>Sorry</h2>


                                        )
                                    } else {
                                        return (
                                            <>
                                                <h2 style={{ margin: "0", lineHeight: "100%", whiteSpace: "pre-line", }}>{post.node?.data.title.text}</h2>

                                                <img className="sketchImage" style={{

                                                }}
                                                    src={post.node?.dataRaw.image.url} />
                                                {/*<div style={{ maxWidth: "100px" }} dangerouslySetInnerHTML={{ __html: post.node?.data.content.html }} />*/}
                                            </>
                                        )
                                    }
                                })()}





                            </div>
                        </Draggable>
                    )
                })}
            </div>
        )
    }


    return (
        <Layout headerChild={title}>
            <div style={{
                minHeight: "100vh",
                background: "var(--color-background)",
                display: "flex", 
                paddingRight: "48px",
                flexDirection: "row",
            //alignItems: "center",
            marginTop: "20px",
            

            }}>
                <div className="bg-noise" 
                style={{
                    //yellow column
                    //background: "var(--color-background)",
                    width: "240px",
                    padding: "48px 32px",
                    height: "100vh",
                    //height: "100%",
                    position: "fixed",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: "32px",
                    
                }}>
                    <StaticImage
                        src="../alex-santafe-head.svg"
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
                            width: "68px",
                            height: "78px",
                            //maxWidth: "111px",
                        }}
                    />
                    <nav style={{
                        display: "flex",
                        width: "100%",
                        gap: "16px",
                        width: "100%",
                        flexDirection: "column",
                        }}>
                    <Nav></Nav>
                    </nav>
                </div>
                <div style={{
                    background: "white",
                    width: "calc(100vw - 240px)",
                    //marginRight: "48px",
                    marginLeft: "240px",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                    <div className="protector top bg-noise">
                        <span className="cornerTopRight"></span>
                        <span className="cornerTopLeft"></span>
                    </div>
                    <div style={{ padding: "88px 48px", background: "#fff",}}>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>

                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                        <p>lorem ipsum dolor sid amet</p>
                    </div>
                    
                    <div className="protector bottom bg-noise">
                        <span className="cornerBottomRight"></span>
                        <span className="cornerBottomLeft"></span>
                    </div>
                    <div className="" style={{
                        background: "#312ffb",
                        height: "48px",
                        position: "fixed",
                        bottom: "0",
                        width: "100%",
                        left: "240px",
                        right: "48px",
                    }}></div>
                    

                </div>
                

                <div className="bg-noise"
                    style={{
                        //yellow column
                        //background: "var(--color-background)",
                        width: "48px",
                        
                        height: "100vh",
                        //height: "100%",
                        position: "fixed",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        gap: "32px",
                        right: "0"

                    }}>
                        </div>
            </div>

        </Layout>
    )
}
export const Head = () => <Seo title={title} />


export const query = graphql`
query hello {
  allPrismicPost {
    edges {
      node {
        data {
          date
          title {
            text
          }
          content {
            html
            richText
          }
        }
        dataRaw
        id
        uid
      }
    }
  }
}
`
export default Projects