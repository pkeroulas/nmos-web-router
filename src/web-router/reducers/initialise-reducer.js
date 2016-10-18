function getNotLoading (data) {
  let notLoaded = []
  if (data.receivers.length === 0) notLoaded.push('receivers')
  if (data.senders.length === 0) notLoaded.push('senders')
  if (data.flows.length === 0) notLoaded.push('flows')
  return notLoaded
}

function getLoaded (data) {
  let loaded = []
  if (data.receivers.length !== 0) loaded.push('receivers')
  if (data.senders.length !== 0) loaded.push('senders')
  if (data.flows.length !== 0) loaded.push('flows')
  return loaded
}

function updateSendersWithFormat (data) {
  let senders = data.senders.map(sender => {
    let flow = data.flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0]
    if (flow) sender.format = flow.format
    else sender.format = 'no'
    return sender
  })

  senders.sort((left, right) => {
    if (left.format === right.format || left.format === undefined || right.format === undefined) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
    else if (left.format.includes('video')) return -1
    else if (right.format.includes('video')) return 1
    else if (left.format.includes('audio')) return -1
    else if (right.format.includes('audio')) return 1
    return 0
  })

  return senders
}

function getSender (data, id) {
  return data.senders.filter(sender => {
    return sender.id === id
  })[0]
}

function getRoutes (data) {
  return data.receivers
    .filter(receiver => {
      let senderId = receiver.subscription.sender_id
      return senderId !== null && getSender(data, senderId)
    })
    .map(receiver => {
      let sender = getSender(data, receiver.subscription.sender_id)
      return {receiver, sender}
    })
}

function isRouted (data, routable, type) {
  return data.routes
    .filter(route => {
      return route[type].id === routable.id
    }).length > 0
}

function getConnectionsRoutables (data, type, singularType) {
  return data[type].map(routable => {
    return {
      id: routable.id,
      routable: true,
      connected: false,
      routed: isRouted(data, routable, singularType),
      preview: false,
      contracted: true,
      format: routable.format
    }
  })
}

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows,
    routes: action.routes || state.data.routes
  }

  data.senders = updateSendersWithFormat(data)
  data.routes = getRoutes(data)

  let connections = Object.assign({}, state.view.connections)
  connections.senders = getConnectionsRoutables(data, 'senders', 'sender')
  connections.receivers = getConnectionsRoutables(data, 'receivers', 'receiver')
  connections.routes = data.routes.map(route => {
    return {
      status: 'system',
      left: {
        id: route[state.sides.left.singular].id
      },
      right: {
        id: route[state.sides.right.singular].id
      }
    }
  })

  let view = Object.assign({}, state.view, {
    loading: {
      notLoaded: getNotLoading(data),
      loaded: getLoaded(data),
      errored: state.view.loading.errored
    },
    connections,
    scroll: false
  })

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
