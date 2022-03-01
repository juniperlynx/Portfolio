import React, { useRef } from "react";
import { useSpring } from "react-spring";

import {
    Bumper,
    Heading,
    Abstract,
    Continued,
    Writeup
} from "../components/PageTemplate"
import ScrollToTop, { ScrollButton } from "../components/Scroll";

function Intro() {
    const topRef = useRef();
    const bottomRef = useRef();

    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 400
    });

    function scrollTop() {
        topRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    function scrollBottom() {
        bottomRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <>
            <ScrollToTop/>
            <div ref={topRef}>
                <Bumper>
                    <Heading style={fadeIn}>Welcome!</Heading>
                    <Abstract style={fadeIn}>
                        <p>&emsp;Hi, my name is Juniper. I'm a jack of all 
                            trades in IT with skills in networking, 
                            electronics, and programming. Here in my Portfolio 
                            you'll find links to writeups showcasing some of my 
                            projects. Click a link above to read about a project
                            or scroll down to read about the development of 
                            this site.
                        </p>
                        <p>&emsp;If you'd like to get in touch, shoot me an email
                            at <a href="mailto:juniper@jnp-3r.net">juniper@jnp-3r.net</a>
                        </p>
                        <p>Enjoy your stay!</p>
                    </Abstract>
                    <ScrollButton onClick={scrollBottom}>{'\u25bc'}</ScrollButton>
                </Bumper>
            </div>
            <div ref={bottomRef}>
                <Continued>
                    <Writeup style={fadeIn}>
                        <h2>Still here? Awesome!</h2>
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
                    </Writeup>
                    <ScrollButton onClick={scrollTop}>{'\u25b2'}</ScrollButton>
                </Continued>
            </div>
        </>
    )
}

export default Intro;