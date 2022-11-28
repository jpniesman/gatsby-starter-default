import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Disqus } from 'gatsby-plugin-disqus';

const PostTemplate = () => (
  <Layout>
    <h1>Hi from the comments page</h1>
    <p>Leave a comment below</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

// const Template = () => (
//     /* Page contents */
//
//     <Disqus
//         config={
//             /* Replace PAGE_URL with your post's canonical URL variable */
//             url: 'PAGE_URL',
//             /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
//             identifier: 'PAGE_IDENTIFIER',
//             /* Replace PAGE_TITLE with the title of the page */
//             title: 'PAGE_TITLE',
//         }
//     />
// );

export const Head = () => <Seo title="Page two" />

export default PostTemplate
