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
    { className: 'gel-icon gel-icon-15-mins', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15.4 6c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 22.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zM25.378 4.88l4.242 4.242-2.828 2.828-4.243-4.242zM15.4 6c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' }),
    react.createElement('path', { d: 'M8.6 16.2v1.4h2.3v5.9h1.8v-9.1h-1.5c-.1 1.4-1.3 1.8-2.6 1.8zM18.1 17.3c-.7 0-1.3.2-1.8.7l.4-2.1h3.8v-1.5h-5.1l-.9 5h1.7c.4-.5.7-.7 1.4-.7 1 0 1.6.8 1.6 1.7 0 .9-.6 1.8-1.6 1.8-.8 0-1.4-.6-1.5-1.4h-1.8c0 1.9 1.6 2.9 3.4 2.9 1.8 0 3.4-1.4 3.4-3.3-.2-1.7-1.2-3.1-3-3.1z' })
  )
}
