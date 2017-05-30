import initialise from './initialise'
import initialiseError from './initialise-error-reducer'
import toggleSender from './connections/toggle-sender-reducer'
import unroute from './connections/unroute-reducer'
import route from './connections/route-reducer'
import nodeRendered from './connections/node-rendered-reducer'
import update from './update-reducer'
import locationChange from './location-change-reducer'
import allVisible from './choose/all-visible-reducer'
import check from './choose/check-reducer'
import alert from './notifications/alert-reducer'
import info from './notifications/info-reducer'
import allClear from './notifications/all-clear-reducer'
import checkForExpired from './choose/check-for-expired-reducer'
import changeMode from './change-mode-reducer'
import addChange from './confirm/add-change-reducer'
import unstageChange from './confirm/unstage-change-reducer'
import removeChange from './confirm/remove-change-reducer'
import clearChanges from './confirm/clear-changes-reducer'
import deployRoute from './confirm/deploy-route-reducer'
import deployUnroute from './confirm/deploy-unroute-reducer'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  nodeRendered,
  update,
  allVisible,
  check,
  alert,
  info,
  allClear,
  checkForExpired,
  changeMode,
  addChange,
  unstageChange,
  removeChange,
  clearChanges,
  deployRoute,
  deployUnroute,
  all: {
    router: {
      LOCATION_CHANGE: locationChange
    }
  }
}
