import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { GreatPrimer, Pica } from '../../../gel-react/typography'

let Header = ({left, right}) => {
  return <div>
    <LayoutItem gels='1/3' >
      <GreatPrimer bold>Connections</GreatPrimer>
    </LayoutItem>
    <LayoutItem gels='2/3' />
    <LayoutItem gels='1/3' >
      <Pica bold>{left}</Pica>
    </LayoutItem>
    <LayoutItem gels='1/3' />
    <LayoutItem gels='1/3' >
      <Pica bold>{right}</Pica>
    </LayoutItem>
  </div>
}

Header.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
}

export default Header