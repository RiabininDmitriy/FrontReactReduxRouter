import { call, put, takeEvery } from "redux-saga/effects";
import {
  AuthLoginUserSuccess,
  AuthUserFail,
  AuthUserRegFail,
  AuthUserRegSuccess
} from "../action/index";
import sendApi from "../utils";
import { history } from "../store";

function* sendAuthReq(action) {
  try {
    const ResToken = yield call(
      sendApi.sendApiPost,
      action.data,
      "authenticate"
    );
    localStorage.setItem("token", ResToken.token);
    yield put(AuthLoginUserSuccess(ResToken));
    history.push("/");
  } catch (err) {
    yield put(AuthUserFail(err));
  }
}

function* sendAuthRegistartionReq(action) {
  try {
    const ResToken = yield call(
      sendApi.sendApiPost,
      action.data,
      "registration"
    );
    localStorage.setItem("token", ResToken.token);
    yield put(AuthUserRegSuccess(ResToken));
  } catch (err) {
    yield put(AuthUserRegFail(err));
  }
}

export default function* authSaga() {
  yield* [
    takeEvery("AUTH_LOGIN_REQUEST", sendAuthReq),
    takeEvery("AUTH_USER_REGISTRATION", sendAuthRegistartionReq)
  ];
}
