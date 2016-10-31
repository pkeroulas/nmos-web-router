import './connections.css'

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Header from './header-component'
import Senders from './senders-component'
import Receivers from './receivers-component'

let Connections = ({view, actions}) => {
  return <Layout className={'connections'}>
    <Header />
    <LayoutItem gels='1/1'>
      <Senders
        senders={view.senders}
        actions={actions}
        />
      <LayoutItem gels='2/10' />
      <Receivers
        senders={view.senders}
        receivers={view.receivers}
        actions={actions}
        />
    </LayoutItem>
  </Layout>
}

Connections.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
