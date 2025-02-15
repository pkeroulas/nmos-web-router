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
    { className: 'gel-icon gel-icon-maths-and-puzzles', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27.2 17c.5-.5.8-1.2.8-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H18v5.8c.5-.5 1.2-.8 2-.8 1.7 0 3 1.3 3 3s-1.3 3-3 3c-.8 0-1.5-.3-2-.8V32h14V17h-4.8zM12 14c-.8 0-1.5.3-2 .8V9h4.8c-.5-.5-.8-1.2-.8-2 0-1.7 1.3-3 3-3s3 1.3 3 3c0 .8-.3 1.5-.8 2H24V0H0v24h10v-4.8c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3z' })
  )
}
