const initialState = {
  byId: {},
  fetching: null,
  fetched: null,
  error: null,
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERS_REQUEST': {
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    }

    case 'FETCH_USERS_SUCCESS': {
      return {
        ...state,
        byId: action.payload.usersById,
        fetching: false,
        fetched: true,
        error: null,
      }
    }

    case 'FETCH_USERS_ERROR': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload.error,
      }
    }

    default: {
      return state
    }
  }
}

export default users

export const getUsers = (state) => Object.values(state.byId)
