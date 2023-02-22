const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => {
      return {
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRefreshToken: (state, payload) => ({}),
    authLogOut: (state, payload) => ({}),
  },
});
export const {
  authLogin,
  authRegister,
  authLogOut,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
} = authSlice.actions;
export default authSlice.reducer;
