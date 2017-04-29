/* global describe, expect, it */
import reducer from '../app/reducers'

describe('combined reducers spec', () => {
  it('initialises state to an empty object', () => {
    const state = undefined
    const action = { type: 'UNKNOWN' }
    expect(reducer(state, action)).to.deep.equal({ app: {} })
  })

  it('does not modify state for unknown actions', () => {
    const state = { app: {} }
    const action = { type: 'UNKNOWN' }
    expect(reducer(state, action)).to.equal(state)
  })
})
