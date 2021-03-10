import { rem } from 'polished'
import { oneOf } from 'prop-types'
import styled from 'styled-components'

import { TABLET_SMALL_SIZE, COLOR_VARIATIONS } from 'styles/constants'

import CompactMenu from './compact'
import Logo from './logo'
import StandardMenu from './standard'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  font-size: ${rem('18px')};
  font-weight: 500;
  line-height: ${rem('36px')};
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${rem('32px')} ${rem('48px')} 0;
  @media only screen and (max-width: ${TABLET_SMALL_SIZE}) {
    line-height: 0.5;
    margin: ${rem('24px')} ${rem('24px')} 0;
  }
`

const SiteHeader = ({ variation }) => (
  <StyledHeader>
    <Logo variation={variation} />
    <StandardMenu variation={variation} />
    <CompactMenu variation={variation} />
  </StyledHeader>
)

SiteHeader.VARIATIONS = COLOR_VARIATIONS

SiteHeader.propTypes = {
  variation: oneOf(
    Object.keys(COLOR_VARIATIONS).map((k) => COLOR_VARIATIONS[k]),
  ),
}

SiteHeader.defaultProps = {
  variation: COLOR_VARIATIONS.dark,
}

export default SiteHeader
