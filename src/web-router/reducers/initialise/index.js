/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import loading from './loading'
import Routables from '../../routables'
import allVisibleState from './all-visible-state'
import restoreChanges from './restore-changes'
import checkTokenExpiry from '../../security/check-token-expiry'
import removeToken from '../../security/remove-token'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows
  }
  let routables = Routables(data)
  routables.insert.receivers(data.receivers)
  routables.insert.senders(data.senders)
  routables.insert.flows(data.flows)
  routables.filter(state.view.choose.term)

  if (state.view.useSessionStorage) {
    routables.check.senders('saved')
    routables.check.receivers('saved')

    restoreChanges(data, routables)
  }
  // If a page refresh has occurred then this will ensure the user stays in the same
  // routing mode, and checks to see if the token in sessionStorage is still valid
  let routingMode = window.location.href.includes('manual') ? 'manual' : 'automatic'
  let loggedIn = !!checkTokenExpiry()
  if (!loggedIn) removeToken()

  let view = Object.assign({}, state.view, {
    loading: loading(routables.view(), state.view, action),
    choose: allVisibleState(data.senders, data.receivers, state.view.choose),
    routingMode: routingMode,
    loggedIn: loggedIn
  }, routables.view())

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
