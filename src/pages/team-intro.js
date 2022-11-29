import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Comments from '../components/Comments'
import {Link} from "gatsby";

const PostTemplate = () => (
  <Layout>
    <h1>Hi from the comments page</h1>
    <p>Leave a comment below</p>
    <div><Comments/></div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />
export default PostTemplate

// import {graphql, Link} from "gatsby"
// export const Head = ({ data: { markdownRemark: post } }) => {
//     return (
//         <Seo
//             title={post.frontmatter.title}
//             description={post.frontmatter.description || post.excerpt}
//         />
//     )
// }

// export default PostTemplate
// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `