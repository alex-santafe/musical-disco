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
import "../components/postit.scss"
//
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

//const Testing = ({ data }) => {
const getLength = ({ length }, minLength) => minLength > length ? minLength : length;

const Contact = ({ data, minLength = 34 }) => {


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
                                        justifyContent:" space-between",
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
                                                src={post.node?.dataRaw.image.url}/>
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
            <div className="sketchcard"
            style={{
                background: "var(--color-bg-blue)",
                maxWidth: "100%",
                padding: "100px 100px 6px 100px",
                display: "flex",
            }}>
                <div className="sketchcard"
                style={{
                    height: "500px",
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    //minHeight: "calc((100vw - 100px) / 4)",
                    display: "grid",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "space-between",
                    width: "100%",
                    //height: "100%",
                    gap: "30px",
    gridAutoRows: "minmax(0,1fr)",
    gridTemplateColumns: "repeat(2,minmax(200px,1fr))",
    gridTemplateRows: "repeat(2,minmax(0,1fr))",
                }}
                >
                    
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        gap: "32px",
                        width: "100%",
                        height: "100%",
                    }}>
                        
                            <h1>ThinkThank</h1>
                            
                   </div>
                    <div id="2" style={{
                        display: "flex", width: "100%",
                        height: "100%", }}>

                        <Nav></Nav>

                    </div>
                    <div id="3" style={{
                        display: "flex", width: "100%",
                        height: "100%", 
                        alignItems: "flex-end"}}>
                        
                        <p style={{ margin: "0" }}>
                            This is the process. Every day sketches, brainfarts and ideas flying around in my backpack and apartment. I hope they can inspire or help someone out there.
                        </p>
                    </div>
                    <div id="4" style={{
                        display: "flex", width: "100%",
                        height: "100%", }}>
                        <h1>right bottom</h1>
                        <p style={{ margin: "0" }}>hello</p>
                    </div>
                    
                    
                </div>
                
            </div>
            <BlogPosts></BlogPosts>
            
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
export default Contact