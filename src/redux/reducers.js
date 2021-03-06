const initialState = {
  dropedClass: '',
  shakeClass: ''
}
export const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'CHANGE_CLASS':
      return [
        (state.shakeClass = 'shake'),
        setTimeout(() => {
          state.dropedClass = '-dropped'
        }, 3500)
      ]
    default:
      return state
  }
}
