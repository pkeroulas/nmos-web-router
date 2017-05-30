import Routables from '../../routables'

export default (state, action, merge) => {
  console.log(action)
  let routables = Routables(state.view)
  let updatedView = routables.route(action.receiver.id, action.sender.id).view()
  let view = Object.assign({}, state.view, updatedView)

  let updatedChanges = state.data.changes
  updatedChanges[action.changeIndex].state = 'deployed'
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: updatedChanges
  }

  let newState = {
    data: data,
    initialised: state.initialised,
    location: state.location,
    view: view
  }

  return merge({newState})
}
