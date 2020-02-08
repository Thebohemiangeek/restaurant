import React from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import socialIcons from "./social-icons"

const NavbarIcons = () => {
  return (
    <IconWrapper>
      {socialIcons.map(item => {
        return (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction({})};
  }
  .icon:hover {
    color: ${styles.colors.mainBlack};
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
