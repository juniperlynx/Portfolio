import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

{/* Set up styles for scroll buttons */}
const ScrollButton = styled.button`
    position: sticky;
    bottom: 2rem;
    margin-left: auto;
    margin-right: 2rem;
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

{/* Define page to page scroll buttons to be used elsewhere */}
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

function ScrollBottomButton() {
    const height = window.innerHeight;

    function scrollBottom() {
        window.scroll({
            top: height,
            left: 0, 
            behavior: 'smooth',
        });
    }
    
    return <ScrollButton onClick={scrollBottom}>{'\u25bc'}</ScrollButton>;
}

{/* Simple component to force a scroll to top when rendered */}
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