import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import RequiredAuthPage from "page/RequiredAuthPage";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <RequiredAuthPage>
      <div className="p-10 bg-LiteBackground min-h-screen">
        <ReactModal
          isOpen={false}
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40  z-50 flex items-center justify-center"
          className="max-h-[90vh] overflow-y-auto scroll-hidden modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative"
        >
          <button className="right-5 absolute top-5 text-text3 cursor-pointer w-11 h-11 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
          <h2 className="font-bold text-[25px] mb-10 text-center">
            Back this project
          </h2>
          <p className="mb-3 text-sm">Enter the contribute amount</p>
          <input
            type="text"
            placeholder="$10"
            name="amount"
            className="text-lg font-medium py-2 px-5 border-StrockColor border w-full rounded-md "
          ></input>
          <p className="text-text3 text-sm my-5">
            Contribution are not associatied with perks
          </p>
          <Button kind="primary" className="p-8">
            Continue
          </Button>
          <div className="mt-[60px]">
            <CampaignPerk></CampaignPerk>
          </div>
        </ReactModal>
        <Overlay></Overlay>
        <DashboardTopBar></DashboardTopBar>
        <div className="flex items-start gap-x-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  );
};

export default LayoutDashboard;
