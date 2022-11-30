import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BrettComments from '../components/BrettComments'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const PostTemplate = () => (
    <Layout>
        <h1>Meet Brett Dresbach...</h1>
        <StaticImage
            src="../images/brett_family.png"
            loading="eager"
            height={600}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>About Me</h2>
        <p>What’s up, I’m Brett Dresbach and I am currently a senior and studing electrical engineering at the University of Iowa. I plan to graduate in May 2023. In the summer of 2022, I finished my first internship with Honda Development and Manufacturing in Marysville, Ohio. Post graduation, I am happy to announce that I have accepeted a job as a system design engineer for Constellation Energy!</p>
        <StaticImage
            src="../images/brett_mm.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Other Interests</h2>
        <p>Believe it or not, I have a life outside of school. I enjoy spending time with my friends, watching sports, and baking. Some of my favorite sport teams are the Chicago Cubs, Chicago Bears, and Iowa Hawkeyes. One of my favorite sweets to bake is banana bread chocolate chip muffins. These muffins are single handedly why me and Zach are friends. All jokes asides, my roomates and friends seem to like my baking, so I would say I’m good at it. </p>
        <StaticImage
            src="../images/brett_baseball.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Contact Information</h2>
        <p>Email: bdres34@yahoo.com</p>
        <p>Phone Number: 815-822-3892</p>

        <h3>Leave a comment below</h3>
        <div><BrettComments /></div>
    </Layout>
)

export const Head = () => <Seo title="Page two" />
export default PostTemplate
