const initialAuthState = {
    user: {}
}


export const AuthReducer = function (state = initialAuthState, action) {
    switch (action.type) {
        case 'AUTH_LOGIN_SUCCESS':
            return Object.assign({}, state, { user: action.data.user })
        case 'AUTH_USER_REGISTRATION_SUCCESS':
            return Object.assign({}, state, { user: action.data.user })
    }
    return state;
}

