import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route-component'

let Routes = ({routes, expanded}) => {
  return <LayoutItem
    className='routes'
    gels='2/10'>
    <div className='routes-container'>{
        routes
          .filter(route => {
            return route.receiver.state.includes('checked') && route.sender.state.includes('checked')
          })
          .map((route, index) => {
            let isExpanded = false
            if (expanded.state && expanded.state.includes('expanded')) {
              isExpanded = route.sender.id === expanded.id
            }
            return <Route
              key={`route-${route.receiver.id}-${route.sender.id}`}
              data={route}
              expanded={isExpanded}
              />
          })
      }</div>
  </LayoutItem>
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Routes
