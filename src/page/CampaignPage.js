import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/parts/CampaignFeature";
import Button from "components/button/Button";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CampaignPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log("CampaignPage  user", user);
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="flex items-start gap-x-6">
          <div className="w-[54px] h-[54px] flex items-center justify-center rounded-full text-white bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-text3 text-sm mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-primary text-sm">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button
          className=" px-8"
          type="button"
          kind="ghost"
          href="/start-campaign"
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center">
        <Button kind="ghost" className="px-8 mx-auto">
          <span>See more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default CampaignPage;
