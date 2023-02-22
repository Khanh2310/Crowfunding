import React from "react";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5 mb-9">
      <img
        src="/logo.png"
        alt=""
        className="w-[60px] h-[60px] object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col ">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saiful uslam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-x-3 text-sm text-text3">
          <strong className=" text-primary">02 Campaign</strong>
          <span className="block w-[6px] h-[6px] rounded-full bg-text3"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};
export default CampViewAuthor;
