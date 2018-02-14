import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
        dispatch(addUser(author))
    }
})


export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)