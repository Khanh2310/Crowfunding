import Button from "components/button/Button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFundrising from "./DashboardFundrising";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-[30px]">
      <div className="flex items-center gap-x-10 flex-1">
        <Link to="/">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className="max-w-[485px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFundrising></DashboardFundrising>
        <Button
          className="px-7"
          type="button"
          kind="secondary"
          href="/start-campaign"
        >
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
