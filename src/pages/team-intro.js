import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const PostTemplate = () => (
    <Layout>
        <h1>Meet The Team 6 Group Members...</h1>
        <StaticImage
            src="../images/team_pic_brothers.jpg"
            loading="eager"
            // height={600}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
        />
        <h2>Zach Hogan</h2>
        <p>Hello my name is Zach Hogan. I am a CSE at Iowa with a focus area in Software Engineering. I am proficient in Java, C#, and Python. I have experience writing tests for my code and working with test-driven-development in mind. I have developed using MVC in class (using Ruby on Rails) and in a prior internship (using Java Springboot). I also have experience in an agile work environment.
                I am interested in working in teams, helping other people, and continuing to learn more about the tech industry and some of the cool things I can create by writing code.</p>
        <h3>Zach's Contact Info</h3>
            <p>Email: zhogan137@gmail.com</p>
            <p>Phone Number: 847-840-8939</p>

        <h2>Brett Dresbach </h2>
        <p>Hello my name is Brett Dresbach. I am an EE at Iowa with a focus area in Power Systems. I am proficient at circuit design,  analysis, and  building. I also have experience writing MATLAB scripts and object oriented programming. Some projects that I have worked on include IR receiver and transmitter, receptacle panel replacement, and substation design.
                Teams are a great form of collaberation, which is why I love them. Every project goes a lot smoother with someone else to bounce ideas off of. </p>
        <h3>Brett's Contact Info</h3>
            <p>Email: bdres34@yahoo.com</p>
            <p>Phone Number: 815-822-3892</p>

        <h2>John Niesman</h2>
        <p>Hello, my name is John Niesman. I am a
                senior CSE student at Iowa. My focus area
                is in Software Enginnering. I have
                extensive progrmaming expereicne with
                Pyhton, Java, and C++.  I have built
                applications using the Flask framework
                as well as Ruby on Rails. I have developed
                these apps using TDD principles.

                In school as well as in my own life, I enjoy
                working with others and learning new
                things. I love trying to things with code
                and seeing what I am able to do with
                modern languages. </p>
        <h3>John's Contact Info</h3>
                <p>Email: jpniesman@gmail.com</p>
                <p>Phone Number: 847-363-7903</p>
    </Layout>
)

export const Head = () => <Seo title="Page two" />
export default PostTemplate
