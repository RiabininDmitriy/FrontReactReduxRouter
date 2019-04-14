const initialMessageState = {
    message: { 1: [], 2: [], 3: [] }
}

export const messageReducer = function (state = initialMessageState, action) {
    switch (action.type) {
        case 'GET_MESSAGES_REQUEST_SUCCESS': {
            const ActionData = action.data.id
            state.message[ActionData] = action.data.message
            const newState = Object.assign({}, { ...state })
            return newState
        } case 'POST_MESSAGE_SUCCESS': {
            const ActionData = action.data.id
            const newState = Object.assign({}, state)
            newState.message[ActionData] = newState.message[ActionData].concat([action.data.message])
            return newState
        }
    }
    return state
}