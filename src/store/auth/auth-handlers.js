import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-request";
import { authUpdateUser } from "./auth-slice";
export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    // accessToken, refreshToken
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(hanleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    console.log(error);
  }
}
function* hanleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data -> userInfo
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield hanleAuthFetchMe({
        payload: response.data.accessToken,
      });
    }
  } catch (error) {
    yield handleAuLogOut();
  }
}
function* handleAuLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}
export {
  handleLogin,
  hanleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuLogOut,
};
