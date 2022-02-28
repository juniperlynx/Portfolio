import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo576.png";

const LogoImage = styled.img`
  height: 85%;
  margin: 0.2rem auto auto 0.5rem;
  float: left;
`

const Logo = () => {
  return (
    <LogoImage src={logo} alt="Juniper Pixel Logo" />
  )
}

export default Logo