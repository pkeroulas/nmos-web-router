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

import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import removeRoute from './remove-route'

export default ({data, sender, receiver}) => {
  let unstageSender = true
  data.changes.forEach(change => {
    if (change.sender.id === sender.id && change.receiver.id !== receiver.id) {
      unstageSender = false
    }
  })
  if (unstageSender) {
    sender.state = mapState(sender).unstageRoute().state()
    sender.stateString = stateToString(sender.state)
  }

  receiver.state = mapState(receiver).unstageRoute().state()
  receiver.stateString = stateToString(receiver.state)
  removeRoute({data, receiver})
}
