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

var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-goalball', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M19.5 19.5l5.7 2.5 5.8-2.8 1-2.2-7 2.2-4.6-3.1M3.5 5.6C1.5 5.6 0 7.1 0 9.1c0 1.9 1.5 3.5 3.5 3.5 1.9 0 3.5-1.5 3.5-3.5-.1-2-1.6-3.5-3.5-3.5zm0 5.9C2.1 11.5 1 10.4 1 9.1c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.3 2.4zm-.4 1.1h-.8L0 20.2l8.5-2.7 1.9 3.9-1.6 5h8.1v-1.9l.4-1.7 1.9-7.6-1.3-1-6.8-1.6-4.2 1.8-3.4 1.8.5-3.3m12.5-5.3l2.6.4.3-.8c-.7-1-2-1.6-3.4-1.4-1 .2-1.8.8-2.3 1.6l2.8.2zm-.1 2.6l-3.2-1.8c-.1.5-.1.9-.1 1.4.3 1.9 2.1 3.1 4 2.8h.1l.8-2.1-1.6-.3z' })
  )
}
