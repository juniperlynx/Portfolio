import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import Burger from "./Burger";
import Menu from "./Menu";
import Logo from "./Logo";

{/*Style the navbar container, use animated.nav so we can animate later */}
const AnimatedNav = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    height: 4rem;
    text-align: right;
    background-color: #00111a;
    color: #ffffff;
    border-bottom: 2px solid #ffd633;
    box-shadow: 0px 0px 2px 2px #00111a;
`

{/*Style NavLinks that will be "Fixed" to the navbar */}
const FixedLink = styled(NavLink)`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.5rem;
    margin-top: 0.4rem;
    margin-bottom: 0.6rem;

    font-size: 1.7rem;

    color: #b3e4ff;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;

    &:hover {
        color: #ffffff;
        border-bottom: 2px solid #ffd633;
    }

    &:visited {
        color: #b3e4ff;
    }

    @media (max-width: 750px) {
        display: none;
    }
`

function NavBar(props) {
    {/* Define animation as navbar slides in on page load*/}
    const navAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    {/* NavLinks go here */}
    const links = [
        {'text': 'Intro', 'path': '/'},
        {'text': 'Uno Computer', 'path': '/uno'}
    ];

    return (
        <>
            <AnimatedNav style={navAnimation}>
                <Logo /> 
                {links.map(link => (
                    <FixedLink to={link.path}>{link.text}</FixedLink>
                ))}
                <Burger
                    className="navbar"
                    navMenuOpen={props.navMenuOpen}
                    onClick={() => props.handleNavMenu()}
                />
            </AnimatedNav>
            <Menu 
              navMenuOpen={props.navMenuOpen}
              links={links}
            />
        </>
      );
}

export default NavBar;