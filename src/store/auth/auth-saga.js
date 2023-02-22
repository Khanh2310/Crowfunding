import handleAuthRegister, {
  handleAuLogOut,
  handleAuthRefreshToken,
  handleLogin,
} from "./auth-handlers";
import {
  authLogin,
  authLogOut,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
const { takeLatest } = require("redux-saga/effects");
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authLogOut.type, handleAuLogOut);
}
