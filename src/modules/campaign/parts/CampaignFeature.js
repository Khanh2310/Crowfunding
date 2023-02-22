import React from "react";
import CampCategory from "./CampCategory";
import CampDesc from "./CampDesc";
import CampImage from "./CampImage";
import CampMeta from "./CampMeta";
import CampTitle from "./CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage
        image="https://plus.unsplash.com/premium_photo-1673514503552-3d3796cfb276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="h-[266px] flex-1"
      ></CampImage>
      <div className="max-w-[435px]">
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
        <div className="w-full rounded-full h-[5px] mb-6 bg-[#EFEFEF]">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
