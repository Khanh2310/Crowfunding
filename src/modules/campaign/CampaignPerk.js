import { Button } from "components/button";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div className="">
      <div className="bg-bgDetails shadow-1 rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1675127077743-f388e7e37924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="h-[232px] object-cover rounded-xl w-full"
          alt=""
        />
        <div className="p-5">
          <span className="inline-block bg-secondary text-white font-medium text-xs py-1 px-3 rounded mb-5">
            Featured
          </span>
          <CampTitle className="text-xl mb-1">Special One Camera</CampTitle>
          <div className="flex items-center gap-x-3 mb-4">
            <span className="font-bold text-[20px] text-text1">$2,724 USD</span>
            <span className="font-medium text-sm text-[#EB5757]">
              <span className="line-through  px-1">$1,504 USD</span>
              <span className="">(12% OFF)</span>
            </span>
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <strong>Estimated Shipping</strong>
            <span className="text-text2 text-sm">October 2022</span>
          </div>
          <p className="text-text2 mb-4">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button kind="secondary" className="w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
