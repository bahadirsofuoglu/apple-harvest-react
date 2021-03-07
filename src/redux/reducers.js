const initialState = {
  droppedClass: '',
  shakeClass: ''
}

export const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_SHAKECLASS') {
    return {
      shakeClass: 'shake',
      droppedClass: ''
    }
  }

  if (action.type === 'CHANGE_DROPCLASS') {
    return {
      droppedClass: '-dropped'
    }
  }

  return state
}
