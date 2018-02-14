import { addMessage, addUser } from './reducers/actions'
import * as types from './constants/ActionTypes'


describe('adding a message', () => {
  it('should create an action to add a message with an id of 0', () => {
    const message = 'Something'
    const action = {
      type : types.ADD_MESSAGE,
      message: message,
      author: 'Me',
      id: 0

    }
    expect(addMessage(message).toEqual())
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with an id of 1', () => {
    const message = 'Something'
    const action = {
      type : types.ADD_MESSAGE,
      message: message,
      author: 'Me',
      id: 1

    }
    expect(addMessage(message).toEqual())
  })
})


describe('adding a user', () => {
  it('should create an action to add a user with an id of 0', () => {
    const message = 'Mark'
    const user = {
      type : types.ADD_USER,
      message: message,
      name: user ,
      id: 0

    }
    expect(addMessage(user).toEqual())
  })
})


describe('adding a user', () => {
  it('should create an action to add a second user with an id of 1', () => {
    const message = 'Tony'
    const user = {
      type : types.ADD_USER,
      message: message,
      name: user ,
      id: 1

    }
    expect(addMessage(user).toEqual())
  })
})