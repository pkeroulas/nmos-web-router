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
    { className: 'gel-icon gel-icon-sign-in', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { fill: '#1D1D1B' },
      react.createElement('path', { d: 'M1 1v30h30V1H1zm19.8 22.6L19.5 21h-7l-1.4 2.6C8.7 22 7 19.2 7 16c0-5 4-9 9-9s9 4 9 9c0 3.2-1.7 6-4.2 7.6z' }),
      react.createElement('circle', { cx: '16', cy: '16', r: '3.5' })
    )
  )
}
