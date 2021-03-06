const initialState = {
  dropedClass: '',
  shakeClass: ''
}

export const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_SHAKECLASS') {
    return {
      shakeClass: 'shake',

      dropedClass: '-dropped'
    }
  }

  if (action.type === 'CHANGE_DROPCLASS') {
    return {
      dropedClass: '-dropped'
    }
  }

  return state
}
