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
    { className: 'gel-icon gel-icon-expires', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 0c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1 6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16H0c0 8.8 7.2 16 16 16s16-7.2 16-16S24.8 0 16 0z' }),
    react.createElement('path', { d: 'M23.8 21.7l1-1.8-7.8-4.5V6h-2v10.6z' })
  )
}
