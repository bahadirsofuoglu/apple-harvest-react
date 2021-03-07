import * as reducer from '../redux/reducers'
import * as actions from '../redux/actions'
const initialState = {
  droppedClass: '',
  shakeClass: ''
}
describe('reducers', () => {
  it('should change redux state for shakeClass.should not droppedClass', () => {
    const expectedState = {
      shakeClass: 'shake',
      droppedClass: ''
    }
    expect(reducer.reducer(initialState, actions.shakeTree())).toEqual(
      expectedState
    )
  })

  it('should change redux state for just droppedClass', () => {
    const expectedState = {
      droppedClass: '-dropped'
    }
    expect(reducer.reducer(initialState, actions.dropApples())).toEqual(
      expectedState
    )
  })
})
