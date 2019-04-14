export const GetChatRoomsRequest = () =>{
    return{
        type: "GET_CHATROOM_REQUEST"
    }
}

export const GetChatRoomsSuccess = (data) => {
    return {
        type: "CHATROOM_LIST_SUCCESS",
        data: data
    }
}

export const GetChatRoomsError = (error) => {
    return{
        type: "GET_CHATROOM_FAIL",
        data: error
    }
}



export const setIdChatroomRequest = (data) => {
    return {
        type: "SET_ID_CHATROOM_REQUEST",
        data: data
    }
}

export const setIdChatroomSuccess = (data) => {
    return {
        type: "SET_ID_CHATROOM_SUCCESS",
        data: data
    }
}


export const getMessagesRequest = (id)=>{
    return{
        type: "GET_MESSAGES_REQUEST",
        data: id
    }
}

export const getMessagesRequestSuccess = (id, message) => {
    return {
        type: "GET_MESSAGES_REQUEST_SUCCESS",
        data: { message: message, id: id }
    }
}

export const getMessagesFail = (error)=>{
    return{
        type: "GET_MESSAGES_FAIL",
        data:error
    }
}

export const postMessageRequest = (data)=>{
    return{
        type:"POST_MESSAGE_REQUEST",
        data: data
    }
}

export const postMessageSuccess = (id, message) => {
    return {
        type: "POST_MESSAGE_SUCCESS",
        data: { message: message, id: id }
    }
}

export const postMessageRequestError = (err)=>{
    return{
        type:"POST_MESSAGE_REQUEST_ERROR",
        data: err
    }
}

// Actions registration page
export const AuthLoginUser = (formValue) => {
    return {
        type: "AUTH_LOGIN_REQUEST",
        data: formValue
    }
}

export const AuthLoginUserSuccess = (token) => {
    return {
        type: "AUTH_LOGIN_SUCCESS",
        data: token
    }
}

export const AuthUserFail = (error) => {
    return {
        type: "AUTH_FAIL",
        data: error
    }
}


export const AuthUserReg = (formValue) => {
    return {
        type: "AUTH_USER_REGISTRATION",
        data: formValue
    }
}

export const AuthUserRegSuccess = (token) => {
    return {
        type: "AUTH_USER_REGISTRATION_SUCCESS",
        data: token
    }
}

export const AuthUserRegFail = (error) => {
    return {
        type: "AUTH_REGISTRATION_FAIL",
        data: error
    }
}