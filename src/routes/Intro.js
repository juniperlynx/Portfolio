import React from "react";
import TwoPage from "../components/page/Templates"
import { Badge } from "../components/page/Elements";

function Intro() {
    return (
        <TwoPage
            heading="Welcome!"
            abstract={<>
                <p>&emsp;Hi, my name is Juniper. I'm a jack of all 
                    trades in IT with skills in networking, 
                    electronics, and programming. Here in my Portfolio 
                    you'll find links to writeups showcasing some of my 
                    projects. Click a link above to read about a project
                    or scroll down to read about the development of 
                    this site.
                </p>
                <p>&emsp;I'd love to hear any feedback or questions you may have,
                    so feel free to get in touch with the info below.
                    Enjoy your stay!
                </p>
            </>}
            footer={<>
                <h3>Contact:&ensp;<Badge><a href='mailto:juniper@jnp-3r.net'>{'\u2709'} juniper@jnp-3r.net</a></Badge></h3>
            </>}
            heading2="Still here? Awesome!"
            writeup={<>
                <p>&emsp;It felt a little silly to write a separate feature
                    for this site, <em>on</em> this site, but it still
                    represents a huge amount of work and is my first ever
                    React.js app, so it deserves some credit.
                </p>
                <p>&emsp;Writing this site has pushed me to develop my 
                    skills in JavaScript and deepened my knowledge of HTML,
                    CSS, and the DOM. It's been some time since I've used 
                    JS on the web (the last web app I wrote used PHP and
                    JQuery), and I'm excited to see how far things have come
                    with modern frameworks bringing much better integration
                    and reusability to the web as a platform.
                </p>
                <p>&emsp;This project is still a work in progress, but feel
                    free to check out the source and tag along with 
                    future updates on my <a href="https://github.com/juniperlynx/Portfolio">Github</a>.
                </p>
            </>}
            footer2={<>
                <h3>Skills:&ensp;
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>CSS</Badge>
                    <Badge>HTML</Badge>
                </h3>
            </>}
        
        />
    )
}

export default Intro;