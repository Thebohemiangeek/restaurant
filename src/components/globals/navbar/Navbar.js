import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  return (
    <NavWrapper>
      <NavbarHeader isOpen={isOpen} setNav={setNav} />
      <NavbarLinks isOpen={isOpen} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export default Navbar
