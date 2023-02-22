import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import { React, lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layout/LayoutPayment";
import CheckoutPage from "page/CheckoutPage";
import ShippingPage from "page/ShippingPage";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
import PaymentPage from "page/PaymentPage";
import WithdrawPage from "page/WithdrawPage";
import { permissions } from "constants/permissions";
const SignUpPage = lazy(() => import("./page/SignUpPage"));
const SignInPage = lazy(() => import("./page/SignInPage"));
const DashboardPage = lazy(() => import("./page/DashboardPage"));
const CampaignPage = lazy(() => import("./page/CampaignPage"));
const StartCampaignPage = lazy(() => import("./page/StartCampaignPage"));
const RequiredAuthPage = lazy(() => import("./page/RequiredAuthPage"));
const UnAuthorizePage = lazy(() => import("./page/UnAuthorizePage"));

// const customStyles = {
//   content: {},
// };
Modal.setAppElement("#root");

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user]);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/unauthorize"
            element={<UnAuthorizePage></UnAuthorizePage>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route element={<RequiredAuthPage></RequiredAuthPage>}>
            <Route
              path="/start-campaign"
              element={<StartCampaignPage></StartCampaignPage>}
            ></Route>
          </Route>

          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route element={<LayoutPayment></LayoutPayment>}>
            <Route
              path="/checkout"
              element={<CheckoutPage></CheckoutPage>}
            ></Route>

            <Route
              path="/payment"
              element={<PaymentPage></PaymentPage>}
            ></Route>

            <Route
              path="/withdraw"
              element={<WithdrawPage></WithdrawPage>}
            ></Route>
            <Route
              path="/shipping-address"
              element={<ShippingPage></ShippingPage>}
            ></Route>
          </Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
