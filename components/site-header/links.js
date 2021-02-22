import Link from 'next/link'
import { rem } from 'polished'
import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: none;
  margin-left: ${rem('32px')};
  cursor: pointer;
`

// TODO: update links once pages exist
const Links = ({ closeMenu }) => (
  <>
    <Link href="/about" passHref>
      <Anchor onClick={closeMenu}>About</Anchor>
    </Link>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Blog
    </Anchor>
    <Anchor href="https://blog.commit.dev/" target="_blank" rel="noreferrer">
      Startups
    </Anchor>
  </>
)

Links.propTypes = {}

Links.defaultProps = {}

export default Links
