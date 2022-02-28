import React from "react";
import styled from "styled-components";

{/* Lotsa styles to position, animate, and define states of Burger button */}
const HamBurger = styled.button`
    float: right;
    margin: 0.5rem 0.5rem 0.5rem auto;
    font-size: 1.8rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0;
    padding-bottom: 0.1rem;

    color: #ffffff;
    background-color: ${props => (props.toggled ? '#005580' : '#00334d')};
    border: 2px solid #cceeff; 
    border-radius: 10px;

    &:hover {
      border: 2px solid #ffd633;
    }

    &:focus {
      border: 2px solid #ffd633;
    }

    &:active {
      background-color: #004466;
    }

    @media (min-width: 749px) {
      display: none;
    }
`

function Burger(props) {
    return (
        <HamBurger
          toggled={ props.navMenuOpen }
          onClick={() => props.onClick()}
        >
          {'\u2630'} {/* Unicode glyph for hamburger menu */}
        </HamBurger>
      );
}

export default Burger;