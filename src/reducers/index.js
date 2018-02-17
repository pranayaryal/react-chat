import { combineReducers } from 'redux'
import users from './users'
import messages from './messages'


const chat = combineReducers({
    messages,
    users
})

export default chat