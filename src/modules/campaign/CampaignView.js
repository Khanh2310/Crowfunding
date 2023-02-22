import { Button } from "components/button";
import React from "react";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  const gradientBanner =
    "linear-gradient(179.14deg, rgba(32, 18, 63 ,0) -7.14%, #000000 87.01%)";
  return (
    <>
      <div
        className="h-[140px] rounded-3xl bg-no-repeat bg-center bg-cover gradient-banner bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: "url(/banner.avif)",
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage
            image="https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="h-[398px] mb-8"
          ></CampImage>
          <div className="flex gap-x-5 justify-center">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://images.unsplash.com/photo-1651922985926-c8fb8c1fe8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                />
              ))}
          </div>
        </div>
        <div className="max-w-[443px]">
          <CampCategory
            text="Achitecture"
            className="mb-4 text-sm"
          ></CampCategory>
          <CampTitle className="font-bold text-xl mb-4">
            Remake - We make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We make architecture exhibition about architecture's social
            agency in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full h-[5px] mb-6 bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[94px] mb-6 bg-white p-5 border-b border-b-slate-100">
        <div className="flex items-center gap-x-[60px] font-medium text-text3 text-sm">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button className="p-8" kind="primary">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">Story</h2>
          <div className="bg-white w-full"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <CampaignPerk key={index}></CampaignPerk>
              ))}
          </div>
        </div>
      </div>
      <h2 className="mb-10 font-semibold text-text1 text-xl">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;
