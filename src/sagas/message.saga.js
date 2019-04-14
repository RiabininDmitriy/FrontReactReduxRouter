import { call, put, takeEvery } from "redux-saga/effects";
import sendApi from "../utils";
import {
  getMessagesRequestSuccess,
  getMessagesFail,
  postMessageSuccess,
  postMessageRequestError
} from "../action";

function* getMessages(action) {
  try {
    const response = yield call(
      sendApi.sendApiGet,
      null,
      `message/${action.data}`
    );
    yield put(getMessagesRequestSuccess(action.data, response));
  } catch (err) {
    yield put(getMessagesFail(err));
  }
}

function* postMessage(action) {
  try {
    const response = yield call(sendApi.sendApiPost, action.data, "message");
    yield put(postMessageSuccess(response.chatroomId, response));
  } catch (error) {
    yield put(postMessageRequestError(error));
  }
}

export default function* messageSaga() {
  yield* [
    takeEvery("GET_MESSAGES_REQUEST", getMessages),
    takeEvery("POST_MESSAGE_REQUEST", postMessage)
  ];
}
