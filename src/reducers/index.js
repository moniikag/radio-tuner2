import { combineReducers } from 'redux'

import radioStations, * as fromRadioStations from './radioStations'
import users, * as fromUsers from './users'

const reducer = combineReducers({
  radioStations,
  users,
})

export default reducer

export const getRadioStations = (state) =>
  fromRadioStations.getRadioStations(state.radioStations)

export const getRadioStation = (state, id) =>
  fromRadioStations.getRadioStation(state.radioStations, id)

export const getUsers = (state) =>
  fromUsers.getUsers(state.users)
