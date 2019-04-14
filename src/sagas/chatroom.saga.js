import { call, put, takeEvery } from "redux-saga/effects";
import sendApi from "../utils";
import {
  GetChatRoomsError,
  GetChatRoomsSuccess,
  setIdChatroomSuccess,
  getMessagesRequest
} from "../action/index";

function* getChatrooms() {
  try {
    const response = yield call(sendApi.sendApiGet, null, "Chatrooms");
    yield put(GetChatRoomsSuccess(response));
  } catch (err) {
    yield put(GetChatRoomsError(err));
  }
}

function* setChatroomId(action) {
  yield put(setIdChatroomSuccess(action.data));
  yield put(getMessagesRequest(action.data));
}

export default function* chatRoomSaga() {
  yield* [
    takeEvery("GET_CHATROOM_REQUEST", getChatrooms),
    takeEvery("SET_ID_CHATROOM_REQUEST", setChatroomId)
  ];
}
