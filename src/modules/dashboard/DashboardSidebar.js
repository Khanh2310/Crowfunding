import IconDashboard from "components/icons/IconDashboard";
import IconCampaign from "components/icons/IconCampaign";

import React from "react";
import { NavLink } from "react-router-dom";
import IconPayment from "components/icons/IconPayment";
import IconWithdraw from "components/icons/IconWithdraw";
import IconProfile from "components/icons/IconProfile";
import IconLogout from "components/icons/IconLogout";
import IconDarkmode from "components/icons/IconDarkmode";
import { logOut } from "utils/auth";
import { useDispatch } from "react-redux";
import { authLogOut } from "store/auth/auth-slice";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Doashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "logout",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Darkmode",
    url: "#",
    onclick: () => {},
  },
];
const DashboardSidebar = () => {
  const navLinkClass =
    "flex items-center last:bg-white last:shadow-sdprimary gap-x-5 last:mt-auto md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  ";
  const dispatch = useDispatch();
  return (
    <div className=" shrink-0 w-full md:w-[76px] flex flex-col px-[14px] py-[10px] rounded-2xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              key={link}
              onClick={() => dispatch(authLogOut())}
              className={navLinkClass}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-primary bg-primary bg-opacity-25`
                : `${navLinkClass} text-icon-color`
            }
            key={link.title}
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
