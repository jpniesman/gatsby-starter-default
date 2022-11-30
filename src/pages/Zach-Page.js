import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Comments from '../components/Comments'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const PostTemplate = () => (
    <Layout>
        <h1>Meet Zach Hogan...</h1>
        <StaticImage
            src="../images/zach_wedding.png"
            loading="eager"
            height={600}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>About Me</h2>
        <p>Hello, my name is Zach Hogan and I am a CSE at the University of Iowa. I will be graduating in the spring of 2023. My focus area is Software Engineering. I have had two internships: one as a software developer at Specialized Accounting Services in Pleasant Prarie, WI, and another as a Technology intern at Genuine Parts Company in Atlanta, GA. Following graduation, I will be working at Epic Systems in Verona, WI as a Software Developer.</p>
        <StaticImage
            src="../images/zach_atlanta.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Other Interests</h2>
        <p>Outside of school I have a lot of other interests. Some of these include being active and playing sports such as basketball and pickleball. I love hanging out with family and friends and playing/watching sports with them, too. I really enjoy listening to music whenever and wherever I can and I also like playing video games. My favorite sports teams are the Packers, the Iowa Hawkeyes and the Cubs.</p>
        <StaticImage
            src="../images/zach_cubs.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Contact Information</h2>
        <p>Email: zhogan137@gmail.com</p>
        <p>Phone Number: 847-840-8939</p>

        <h3>Leave a comment below</h3>
        <div><Comments /></div>
    </Layout>
)

export const Head = () => <Seo title="Page two" />
export default PostTemplate