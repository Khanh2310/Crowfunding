import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white w-full shadow-1 py-7 px-6 flex flex-col">
        <p className="text-xl mb-8 text-text3 text-center">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pedge"
          className="text-lg font-medium py-2 px-5 border-StrockColor border w-full rounded-md mb-5"
        ></Input>
        <div className="bg-grayF3 p-5 rounded-xl text-sm mb-5">
          <p className=" font-semibold text-text2 mb-5">
            Back it because you believe in it
          </p>
          <p className="font-normal text-text3 leading-[22px] ">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
