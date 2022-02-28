import React from "react";
import { useSpring } from "react-spring";

import {
    Bumper,
    Heading,
    Abstract,
    Continued,
    Writeup
} from "../components/PageTemplate"
import ScrollToTop, { ScrollTopButton, ScrollBottomButton } from "../components/Scroll";

function Intro() {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 400
    });

    return (
        <>
            <ScrollToTop/>
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
                    <p>Enjoy your stay!</p>
                </Abstract>
                <ScrollBottomButton/>
            </Bumper>
            <Continued>
                <Writeup style={fadeIn}>
                    <h2>Still here? Awesome!</h2>
                    <p>&emsp;Would you like to learn more?</p>
                </Writeup>
                <ScrollTopButton/>
            </Continued>
        </>
    )
}

export default Intro;