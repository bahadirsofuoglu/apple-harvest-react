import * as actions from '../redux/actions'

describe('actions', () => {
  it('should change shake class', () => {
    const expectedAction = {
      type: 'CHANGE_SHAKECLASS'
    }

    expect(actions.shakeTree()).toEqual(expectedAction)
  })

  it('should change drop class', () => {
    const expectedAction = {
      type: 'CHANGE_DROPCLASS'
    }

    expect(actions.dropApples()).toEqual(expectedAction)
  })
})
