import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import socialIcons from "./navbar/social-icons"

const Footer = () => {
  return (
    <FootWrapper>
      <div className="title"> toomalie day</div>
      <div className="icons">
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
      </div>
      <p className="copyright"> copyright &copy; {new Date().getFullYear()}</p>
    </FootWrapper>
  )
}
const FootWrapper = styled.nav`
  padding: 2rem 0;
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem, 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.2rem;
    ${styles.border({ color: "white" })};
  }
`
export default Footer
