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
    { className: 'gel-icon gel-icon-5-wicket', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '10', r: '7' }),
    react.createElement('path', { d: 'M13.5 26.3c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V32h-5v-5.7zM29.3 14.9l-.7-1.1-2.1 1.2-.6-1-6.5 3.7.6 1.1-2.1 1.2.6 1.1 2.2-1.3.6 1.1 6.4-3.7-.6-1.1zM14.1 20L12 18.7l.6-1-6.5-3.8-.6 1.1-2.1-1.2-.7 1 2.2 1.3-.6 1.1 6.4 3.7.7-1.1 2.1 1.3zM21.4 32h5.1l1.5-8.5v-.3c0-1.4-1.1-2.5-2.5-2.5-1.2 0-2.2.8-2.5 2L21.4 32zM10.7 32H5.6l-1.5-8.5v-.3c0-1.4 1.1-2.5 2.5-2.5 1.2 0 2.2.8 2.5 2l1.6 9.3z' }),
    react.createElement('path', { fill: '#FFF', d: 'M15.1 7.6L15 9.4c.1-.2.3-.4.6-.4.2-.1.5-.1.9-.1s.7.1.9.2c.2.1.4.3.6.6.1.2.2.5.3.8.1.3.1.6.1.9 0 .4 0 .8-.1 1.2s-.2.7-.4.9c-.2.3-.4.4-.8.6-.3.1-.7.2-1.2.2s-.9-.1-1.2-.2c-.3-.1-.5-.3-.7-.5-.2-.2-.3-.5-.3-.7-.1-.3-.1-.5-.1-.7V12H15v.4c0 .1 0 .3.1.4.1.1.1.2.2.3s.2.1.4.1c.3 0 .6-.1.7-.4.1-.3.2-.6.2-1.1v-.8c0-.2-.1-.4-.1-.5l-.3-.3c-.1-.1-.3-.1-.4-.1-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5h-1.4l.3-4.2h4v1.2h-2.9z' })
  )
}
