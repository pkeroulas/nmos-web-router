import React, { PropTypes } from 'react'
import Icon from '../routable/icon-component'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let RightRoutable = ({routable}) => {
  return <LayoutItem gels='1/1' className={`routable ${routable.state}`}>
    <div className={`node ${routable.node.status}`} />
    <Button
      icon={<Icon format={routable.format} />}
      label={routable.label}
      fill
      />
  </LayoutItem>
}

RightRoutable.propTypes = {
  routable: PropTypes.object.isRequired
}

export default RightRoutable