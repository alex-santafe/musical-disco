import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
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

const Contact = ({data, minLength = 34 }) => {


const BlogPosts = () => {
  const posts = data.allPrismicPost.edges
  const results = []
  for (let i = 0; i < 18; i++) {
    results.push(posts[i] || 'placeholder')
  }
  console.log(results)
  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

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
  shuffle(posts)
console.log(results)
  if (!posts) return null
  return (
    <div
    style={{
      display: "flex",
      gap: "1rem",
      margin: "var(--space-5)",
      maxWidth: "99vw",
      margin: "auto",
      flexDirection: "row",
    flexWrap: "wrap",
    minHeight: "100vh",
      }}
  >
      {posts.map(post => {
        return (
          <Draggable>
          <div 
          className="post-it real"
          //key={post.node.id}
          >
            
          
              {(() => {
                if (!post.node) {
                  return (
                   
                      <h2 style={{ margin: "0" }}>Sorry</h2>
                      
                
                  )
                } else {
                  return (
                    <>
                      <h2 style={{ margin: "0" }}>{post.node?.data.title.text}</h2>
                      <p>
                        <time>{post.raw?.data.date}</time>
                      </p>
                      <p>
                        <time>{post.raw?.data.date}</time>
                      </p>
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