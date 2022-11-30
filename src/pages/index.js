import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Team Intro Page",
    url: "team-intro",
    description:
      "Click to learn more about the members of Group 6.",
  },
  {
    text: "Brett Dresbach",
    url: "Brett-Page",
    description:
      "Click to learn more about Brett.",
  },
  {
    text: "Zach Hogan",
    url: "Zach-Page",
    description:
      "Click to learn more about Zach.",
  },
  {
    text: "John Niesman",
    url: "John-Page",
    description:
      "Click to learn more about John.",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/engineering_logo.png"
        loading="eager"
        width={200}
        // quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Team 6 Portfolio
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <div className={styles.textCenter}>
        <StaticImage
            src="../images/group_pic_bluelab.png"
            loading="eager"
            width={200}
            // quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
