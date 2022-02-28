import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';

{/* Ensure page content fills parent and is behind menu / navbar */}
const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenuOpen: false
        };
    }

    /* 
        Define function that will toggle our nav menu state
        Note this is a standard JS comment, not JSX style. Makes sense but weird.
    */
    handleNavMenu() {
        this.setState({ navMenuOpen: !this.state.navMenuOpen});
    }

    /* 
        Render the basic structure of page content (from router) & navbar. 
        This is also where we call glogal style
    */
    render() {
        return (
            <>
                <NavBar
                  navMenuOpen={this.state.navMenuOpen}
                  handleNavMenu={() => this.handleNavMenu()}
                />
                <Container>
                    <Outlet />
                </Container>
                <GlobalStyle />
            </>
        );
     }
}

export default App;