import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  if (!data) return null
  const post = data.prismicPost

  return (
    <React.Fragment>
      <h1>{post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
    </React.Fragment>
  )
}

export default Post //sd

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`