import React, { useRef } from "react";
import { useSpring } from "react-spring";

import {
    Bumper,
    Heading,
    Abstract,
    Continued,
    Writeup,
    FootBox
} from "./Elements"
import ScrollToTop, { ScrollButton } from "../Scroll";

function OnePage(props) {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 400
    });

    return (
        <>
            <ScrollToTop/>
            <Bumper>
                <Heading style={fadeIn}>{props.heading}</Heading>
                <Abstract style={fadeIn}>
                    {props.abstract}
                </Abstract>
                {props.footer && <FootBox>{props.footer}</FootBox>}
            </Bumper>
        </>
    )
}

function TwoPage(props) {
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
                    <Heading style={fadeIn}>{props.heading}</Heading>
                    <Abstract style={fadeIn}>
                        {props.abstract}
                    </Abstract>
                    {props.footer && <FootBox>{props.footer}</FootBox>}
                    <ScrollButton onClick={scrollBottom}>{'\u25bc'}</ScrollButton>
                </Bumper>
            </div>
            <div ref={bottomRef}>
                <Continued>
                    <Writeup style={fadeIn}>
                        {props.writeup}
                    </Writeup>
                    <ScrollButton onClick={scrollTop}>{'\u25b2'}</ScrollButton>
                </Continued>
            </div>
        </>
    )
}

export default TwoPage;
export { OnePage };