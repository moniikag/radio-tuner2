const initialState = {
  byId: {
    '99.1':  { name: 'Top Song Pl', frequency: '99.1', id: '99.1' },
    '97.5':  { name: 'Best Hits Ever', frequency: '97.5', id: '97.5' },
    '109.3': { name: 'Classic EU', frequency: '109.3', id: '109.3' },
  }
}

const radioStations = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_STATION': {
      const { station } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [station.id]: station,
        }
      }
    }

    case 'DELETE_STATION': {
      const { id } = action.payload
      const { [id]: _deleted, ...other } = state.byId
      return {
        ...state,
        byId: other,
      }
    }

    default: {
      return state
    }
  }
}

export default radioStations

export const getRadioStations = (state) => Object.values(state.byId)

export const getRadioStation = (state, id) => state.byId[id] || null
