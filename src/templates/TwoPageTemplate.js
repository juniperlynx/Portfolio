import React from "react";
import styled from "styled-components";

{/*
    Define styles to be used later. Here we have BumperContainer to define
    the first full page of content, ContinuedContainer to define the next 
    full page and InnerContainer to style the internal text and provide some
    contrast between the text area and BG.
*/}
const BumperContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #cceeff;
    display: flex;
`

const ContinuedContainer = styled.div`
    top: 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #cceeff;
    display: flex;
`

const InnerContainer = styled.div`
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 12px -2px #00111a;

    overflow-y: auto;
    flex-grow: 1;
    max-width: 1100px;
    margin 6rem 2rem 2rem;

    @media (min-width: 1175px) {
        margin 6rem auto 2rem;
    }
`

const Heading = styled.h1`
    padding-top: 2rem;
    font-size: 4rem;
    color: #0077b3;
`

const Abstract = styled.div`
    text-align: left;
    padding: 0 3rem 1rem;

    & p {
        color: #00334d;
        font-size: 1.5rem;
    }

    & h2{
        color: #0077b3;
        font-size: 2.5rem;
    }
`

const Writeup = styled.div`
    text-align: left;
    padding: 2rem 3rem 1rem;

    & p {
        color: #00334d;
        font-size: 1.3rem;
    }

    & h2{
        color: #0077b3;
        font-size: 2.5rem;
    }
`

function Bumper(props) {
    return (
        <BumperContainer>
            <InnerContainer>
                {props.children}
            </InnerContainer>
        </BumperContainer>
    )
}

function Continued(props) {
    return (
        <ContinuedContainer>
            <InnerContainer>
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