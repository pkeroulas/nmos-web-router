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

/*
Filter is used to filter routables out of the 'Choose' view according to
  search text entered by the user
*/

import View from '../view'
import mapFuzzymatch from './map-fuzzymatch'
import mapFilter from './map-filter'

export default (data) => {
  return (term) => {
    let senders = data.senders
    let receivers = data.receivers

    if (typeof term === 'string') {
      mapFuzzymatch(term, senders)
      mapFuzzymatch(term, receivers)
    } else {
      mapFilter(term, senders)
      mapFilter(term, receivers)
    }

    return View(data)
  }
}
