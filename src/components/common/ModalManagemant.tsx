import React, { useState } from "react";

interface ModalManagementProps {
  children: React.ReactNode;
  id: string;
  type: string;
  title: string;
}

const ModalManagement: React.FC<ModalManagementProps> = ({
  children,
  id,
  type,
  title,
}) => {
  return (
    <dialog
      id={id}
      className={`modal  rounded-[8px] ${type === "large" ? "max-w-none w-[65%] mx-auto" : ""} `}
    >
      <div
        className={`modal-box bg-white  ${
          type === "large" ? "max-w-none w-full" : "max-w-[32rem]"
        }`}
      >
        <div className="mt-0 flex flex-col md:flex-row justify-between ">
          <h3 className=" text-[18px] font-semibold text-black">{title}</h3>
         {/*  <button
            onClick={() => {
              const modal = document.getElementById(id) as HTMLDialogElement | null;
              if (modal) modal.close();
            }}
            className="w-[24px] bg-white h-[24px] flex justify-center items-center"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.15381 8.15234L24.4614 24.46"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8.15381 24.4609L24.4614 8.15332"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button> */}
        </div>
        {children}
      </div>
      
    </dialog>
  );
};

export default ModalManagement;
