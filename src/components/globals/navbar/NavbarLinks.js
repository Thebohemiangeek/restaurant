import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"
import links from "./links"

const NavbarLinks = props => {
  return (
    <LinkWrapper open={props.isOpen}>
      {links.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({
    time: "1s",
  })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: var(--mainOrange);
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: ${styles.colors.mainWhite};
    }
  }
`
export default NavbarLinks
