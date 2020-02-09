import React from "react"
import { Section, Title, SectionButton } from "../../utils/"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us walk you " title="trough the looking glass" />
      <QuickInfoWrapper>
        <p>
          A boat beneath a sunny sky, Lingering onward dreamily In an evening of
          July — Children three that nestle near, Eager eye and willing ear,
          Pleased a simple tale to hear — Long had paled that sunny sky: Echoes
          fade and memories die. Autumn frosts have slain July. Still she haunts
          me, phantomwise, Alice moving under skies Never seen by waking eyes.
          Children yet, the tale to hear, Eager eye and willing ear, Lovingly
          shall nestle near. In a Wonderland they lie, Dreaming as the days go
          by, Dreaming as the summers die: Ever drifting down the stream —
          Lingering in the golden gleam — Life, what is it but a dream?
        </p>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
`
export default QuickInfo
