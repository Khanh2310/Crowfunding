import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 flex items-center w-full ">
        <div className="flex-1 p-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent text-text1 placeholder:text-text4"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white flex items-center justify-center h-10 flex-shrink-0">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] bg-white  left-0 top-full absolute z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-GraySoft rounded-3xl">
            <h4 className="text-text1 text-sm font-medium pl-4 underline">
              See all 10,124 fundraisier
            </h4>
            <button className="cursor-pointer w-[72px] flex items-center rounded-[10px] justify-center h-[50px] bg-error bg-opacity-30 text-error text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className=" flex flex-col gap-y-5 mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
            <div className="flex flex-col gap-y-3 text-text2 text-sm">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="w-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className=" mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family </p>
      </div>
    </div>
  );
}

export default DashboardSearch;
