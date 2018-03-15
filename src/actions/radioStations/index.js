export const addStation = (station) => ({
  type:    'ADD_STATION',
  payload: { station },
})

export const deleteStation = (id) => ({
  type:    'DELETE_STATION',
  payload: { id },
})
