import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

{/*
    Define custom hooks for window height so it will be updated on resize
    We'll use it later.
 */}
function getWindowHeight() {
    const height = window.innerHeight;
    return height;
}

function useWindowHeight() {
    const [ windowHeight, setWindowHeight ]= useState(getWindowHeight());

    useEffect(() => {
        function handleResize() {
            setWindowHeight(getWindowHeight());
        }

        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowHeight;
}

{/* 
    Set up styles for scroll button. Note the funky combo of positioning,
    margins, and flex. The position: sticky forces the element to the
    bottom in situations where the window is too small and the flexbox
    above should grow to squish the button down when window is larger.
    The margins are set so the button is squeezed to the right.
*/}
const ScrollButton = styled.button`
    position: sticky;
    bottom: 1.5rem;
    margin-left: auto;
    margin-right: 1.5rem;
    flex-shrink: 0;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #0077b3;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    box-shadow: 1px 1px 5px -2px #00111a;

    &:hover {
        background-color: #006699;
    }
  
    &:focus {
        border: 2px solid #ffd633;
    }
  
    &:active {
        background-color: #004466;
    }
`

function ScrollBottomButton() {
    const height = useWindowHeight();

    function scrollBottom() {
        window.scroll({
            top: height,
            left: 0, 
            behavior: 'smooth',
        });
    }
    
    return <ScrollButton onClick={scrollBottom}>{'\u25bc'}</ScrollButton>;
}

function ScrollTopButton() {
    function scrollTop() {
        window.scroll({
            top: 0,
            left: 0, 
            behavior: 'smooth',
        });
    }
    
      return <ScrollButton onClick={scrollTop}>{'\u25b2'}</ScrollButton>;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0, 
        behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
export { ScrollTopButton, ScrollBottomButton };