import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
const NavbarHeader = props => {
  const toggleNav = () => {
    props.setNav(isOpen => !isOpen)
  }
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="company name" className="logo"></img>
      </Link>
      <FaAlignRight className="toggle-icon" onClick={toggleNav}></FaAlignRight>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 40px;
  }
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavbarHeader
