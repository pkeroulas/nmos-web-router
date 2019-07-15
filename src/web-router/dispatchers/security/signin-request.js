const axios = require('axios')
const qs = require('qs')
import { CLIENT_ID, CLIENT_SECRET, AUTH_API_VERSION } from './constants'
import { getServiceUrl, queryPriority } from '../../../init-nmos'

const clientId = window.authConfig ? window.authConfig.client_id : CLIENT_ID
const clientSecret = window.authConfig ? window.authConfig.client_secret : CLIENT_SECRET

export default (username, password) => {
  let scope = 'is05'
  let data = {
    grant_type: 'password',
    scope: scope,
    username: username,
    password: password
  }

  return getServiceUrl('nmos-auth', AUTH_API_VERSION, queryPriority)
    .then(href => {
      return axios({
        url: href + '/x-nmos/auth/v1.0/token',
        method: 'post',
        data: qs.stringify(data),
        auth: {
          username: clientId,
          password: clientSecret
        }
      })
    })
}
