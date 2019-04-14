import {fork} from 'redux-saga/effects'
import authSaga from './auth.saga'
import chatroomSaga from './chatroom.saga'
import messageSaga from './message.saga'

export default function* rootSaga(){
    yield * [fork(authSaga),fork(chatroomSaga),fork(messageSaga)]
}