import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

{/*
    Define styles to be used later. Here we have BumperContainer to define
    the first full page of content, ContinuedContainer to define the next 
    full page and InnerContainer to style the internal text and provide some
    contrast between the text area and BG.
*/}
const BumperContainer = styled.div`

    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #cceeff;
    display: flex;
    flex-flow: column;
`

const ContinuedContainer = styled.div`
    top: 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #cceeff;
    display: flex;
    flex-flow: column;
`

const InnerContainer = styled(animated.div)`
    position: relative;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 10px -2px #00111a;

    overflow-y: auto;
    flex-grow: 1;
    width: 90%;
    max-width: 1100px;
    margin: 6rem auto 2rem;
    display: flex;
    flex-flow: column;
`

const Heading = styled(animated.h1)`
    padding-top: 2rem;
`

const Abstract = styled(animated.div)`
    text-align: left;
    padding: 0 3rem 2rem;
    flex-grow: 1;
`

const Writeup = styled(animated.div)`
    text-align: left;
    padding: 2rem 3rem 2rem;
    flex-grow: 1;
`

function Bumper(props) {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 200
    });

    return (
        <BumperContainer>
            <InnerContainer style={fadeIn}>
                {props.children}
            </InnerContainer>
        </BumperContainer>
    )
}

function Continued(props) {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 200
      });

    return (
        <ContinuedContainer>
            <InnerContainer style={fadeIn}>
                {props.children}
            </InnerContainer>
        </ContinuedContainer>
    )
}

export {
    Bumper,
    Heading,
    Abstract,
    Continued,
    Writeup
}