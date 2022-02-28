import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

{/* 
    Define styling and positioning for menu drawer. 
    top attribute will be animated later.
*/}
const Drawer = styled(animated.div)`
    position: fixed;
    left: 0;
    right: 0;
    padding-top: 2rem;
    z-index: 2;

    background-color: #00111a;
    color: #ffffff;
`

{/* Style links and list wrapper together for consistency */}
const LinkWrapper = styled.ul`
    list-style-type: none;

    & li {
        transition: all 300ms linear 0s;
        margin-top: 0.4rem;
        margin-left: 0.5rem;
        height: 2.2rem;
    }

    & a {
        color: #b3e4ff;
        text-decoration: none;
        cursor: pointer;
        display: inline-block;

        font-size: 1.5rem;

        &:hover {
            color: #ffffff;
            border-bottom: 2px solid #ffd633;
        }
    }
`

{/* Menu component */}
function Menu(props) {
    {/* Animate top value depending on nav menu open / closed state */}
    const drawerAnimation = useSpring({
        config: { friction: 17 },
        top: props.navMenuOpen ? "2rem" : "-20rem",
      });

    return (
        <Drawer style={drawerAnimation}>
            <LinkWrapper>
                {/*
                    Navlinks go here
                    TODO: Load these from same place as Navbar.js
                */}
                <li><NavLink to="/">Intro</NavLink></li>
                <li><NavLink to="/uno">Uno Computer</NavLink></li>
            </LinkWrapper>
        </Drawer>
    );
}

export default Menu;