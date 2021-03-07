import * as reducer from '../redux/reducers'
import * as actions from '../redux/actions'
const initialState = {
  dropedClass: '',
  shakeClass: ''
}
describe('reducers', () => {
  it('should change redux state for shakeClass.should not droppedClass', () => {
    const expectedState = {
      shakeClass: 'shake',
      dropedClass: ''
    }
    expect(reducer.reducer(initialState, actions.shakeTree())).toEqual(
      expectedState
    )
  })

  it('should change redux state for just droppedClass', () => {
    const expectedState = {
      dropedClass: '-dropped'
    }
    expect(reducer.reducer(initialState, actions.dropApples())).toEqual(
      expectedState
    )
  })
})
