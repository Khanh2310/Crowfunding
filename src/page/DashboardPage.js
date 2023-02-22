import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import React, { useEffect } from "react";
import CampaignFeature from "modules/campaign/parts/CampaignFeature";
import useAxiosPrivate from "hooks/useAxiosPrivate";

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async function fetchCampagns() {
      try {
        const response = await axiosPrivate.get("/api/campaigns");
      } catch (error) {}
    }
    fetchCampagns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Heading number={4}>Your Campaign</Heading>
      <div className="mb-8">
        <CampaignFeature></CampaignFeature>
      </div>
      <div className="mb-8">
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <div className="mb-8">
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </>
  );
};

export default DashboardPage;
