import React from 'react'
import { LayoutItem, Layout } from '../../../gel-react/grid'
import { LongPrimer } from '../../../gel-react/typography'

let Header = () => {
  return <Layout gels='1/1' layouts='flush'>
    <LayoutItem gels='4/10' className='column-title'>
      <LongPrimer>Senders</LongPrimer>
    </LayoutItem>
    <LayoutItem gels='2/10' />
    <LayoutItem gels='4/10' className='column-title'>
      <LongPrimer>Receivers</LongPrimer>
    </LayoutItem>
  </Layout>
}

export default Header
