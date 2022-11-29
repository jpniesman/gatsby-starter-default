import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Comments from '../components/Comments'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const PostTemplate = () => (
    <Layout>
        <h1>Meet John Niesman...</h1>
        <StaticImage
            src="../images/john_headshot.jpg"
            loading="eager"
            height={600}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>About Me</h2>
            <p>Hello my name is John Niesman. I am a CSE student at Iowa. I will be graduating in May of 2023 and going on to work at CNH Industrial. I interned with CNH last summer as a software test engineer and created a new data tool for them to use. I plan on living in the Chicago area starting next summer. </p>
        <StaticImage
            src="../images/john_family.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Other Interests</h2>
             <p>Besides school, I have many other things going on in my life. During the winter I do a lot of skiing. My favorite places to ski are Jackson Hole Wy and Breckeridge CO. I spend a lot of time with friedns goingto concerts, sports games, and just hanging out. I am a huge Chicago sports fan and love going to all games especially the Cubs. Lastly, I spend a lot of time outdoors doing thigs like hiking, fishing, and camping.</p>
        <StaticImage
            src="../images/john_group.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Contact Information</h2>
            <p>Email: jpniesman@gmail.com</p>
            <p>Phone Number: 847-363-7903</p>

        <h3>Leave a comment below</h3>
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