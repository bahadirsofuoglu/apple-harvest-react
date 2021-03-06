const initialState = {
  dropedClass: '',
  shakeClass: ''
}

export const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_CLASS') {
    return {
      shakeClass: 'shake'
    }
  }

  return state
}
