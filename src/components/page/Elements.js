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
    min-height: 100vh;
    width: 100vw;
    text-align: center;
    background-color: #cceeff;
    display: flex;
    flex-flow: column;
`

const ContinuedContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
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

const FootBox = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 60%;
    margin: 1rem auto 1rem;
    background-color: #ffffff;
    border: 2px solid #0077b3;
    border-radius: 10px;
    box-shadow: 2px 2px 10px -2px #00111a;
    flex-shrink: 0;

    @media (max-width: 750px) {
        margin: 1rem auto 2.5rem;
    }
`

const Badge = styled.span``

function Bumper(props) {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 200
    });

    return (
        <BumperContainer id={props.id}>
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
        <ContinuedContainer id={props.id}>
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
    Writeup,
    FootBox,
    Badge
}