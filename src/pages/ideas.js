import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
import { navigate } from "gatsby"
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
const Contact = ({data}) => {


const BlogPosts = () => {
  const posts = data.allPrismicPost.edges
  if (!posts) return null
  return (
    <div
    style={{
      display: "flex",
      gap: "1rem",
      margin: "var(--space-5)",
      maxWidth: "70vw",
      margin: "auto",
      flexDirection: "row",
    flexWrap: "wrap",
      }}
  >
      {posts.map(post => {
        return (
          <div 
          className="cards"  
          style={{
            //width: "256px", 
            
            
            }}  
            key={post.node.id}>
            <h2 style={{margin: "0"}}>{post.node.data.title.text}</h2>
            <p>
              <time>{post.node.data.date}</time>
            </p>
            <div style={{maxWidth: "100px"}} dangerouslySetInnerHTML={{ __html: post.node.data.content.html }} />
            
          </div>
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