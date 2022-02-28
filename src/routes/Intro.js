import React from "react";
import {
    Bumper,
    Heading,
    Abstract,
    Continued,
    Writeup
} from "../templates/TwoPageTemplate"

function Intro() {
    return (
        <>
            <Bumper>
                <Heading>Welcome!</Heading>
                <Abstract>
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
            </Bumper>
            <Continued>
                <Writeup>
                    <h2>Still here? Awesome!</h2>
                    <p>&emsp;Would you like to learn more?</p>
                </Writeup>
            </Continued>
        </>
    )
}

export default Intro;