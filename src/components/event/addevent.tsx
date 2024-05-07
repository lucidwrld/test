import React from "react";
import ModalManagement from "../common/ModalManagemant";
import { label } from "../../assets";

const Addevent = () => {
  return (
    <ModalManagement id={`addeventModal`} title={""} type="large">
      <div className="w-[100%] h-[482px]  flex">
       <div className="w-[40%] h-full bg-[#F9FAFB] flex justify-center items-center">
        <div className="w-[86%] h-[86%]  flex flex-col gap-3">
            <div className="w-full h-fit">
                <h3 className="font-sans text-[20px] font-semibold text-[#1A1A1A]">Header</h3>
                <p className="text-[#6B7280] text-[14px] font-inter font-normal">Optional Description</p>
            </div>
            <div className="w-full h-fit flex flex-col gap-1">
                <label  className="text-[#101010] text-[14px] font-inter font-medium" htmlFor="">Label</label>
                <input type="text" className="w-full text-[14px] font-inter font-medium rounded-[6px] border-[2px] pl-2 pr-2 placeholder:text-[#101010] h-[36px] border-[#D1D5DB] bg-white" placeholder="Filled"/>
            </div>

            <div className="w-full h-fit flex flex-col gap-1">
                <label  className="text-[#101010] text-[14px] font-inter font-medium" htmlFor="">Label</label>
                <input type="text" className="w-full text-[14px] font-inter font-medium rounded-[6px] border-[2px] pl-2 pr-2 placeholder:text-[#101010] h-[36px] border-[#D1D5DB] bg-white" placeholder="Filled"/>
            </div>

            <div className="w-full h-fit flex flex-col gap-1">
                <label  className="text-[#101010] text-[14px] font-inter font-medium" htmlFor="">Label</label>
                <input type="text" className="w-full text-[14px] font-inter font-medium rounded-[6px] border-[2px] pl-2 pr-2 placeholder:text-[#101010] h-[36px] border-[#D1D5DB] bg-white" placeholder="Filled"/>
            </div>

            <div className="w-full h-fit flex flex-col gap-1">
                <label  className="text-[#101010] text-[14px] font-inter font-medium" htmlFor="">Label</label>
                <input type="text" className="w-full text-[14px] font-inter font-medium rounded-[6px] border-[2px] pl-2 pr-2 placeholder:text-[#101010] h-[36px] border-[#D1D5DB] bg-white" placeholder="Filled"/>
            </div>

            <div className="w-full h-fit flex flex-col gap-1">
                <label  className="text-[#101010] text-[14px] font-inter font-medium" htmlFor="">Label</label>
                <input type="text" className="w-full text-[14px] font-inter font-medium rounded-[6px] border-[2px] pl-2 pr-2 placeholder:text-[#101010] h-[36px] border-[#D1D5DB] bg-white" placeholder="Filled"/>
            </div>
        </div>
       </div>
       <div className="w-[60%] h-full flex justify-center items-center">
            <div className="w-[86%] h-[86%]   flex flex-col gap-6">
                <div className="flex w-[211px] h-[36px]">
                    <button className="bg-[#E5E7EB] rounded-[6px] h-full w-[69px] flex justify-center items-center text-[#101010] text-[14px] font-inter font-medium">Label</button>
                    <button className=" rounded-[6px] h-full w-[69px] flex justify-center items-center text-[#374151] text-[14px] font-inter font-medium">Label</button>
                    <button className=" rounded-[6px] h-full w-[69px] flex justify-center items-center text-[#374151] text-[14px] font-inter font-medium">Label</button>
                
                </div>

                <img src={label} alt="" className="w-full h-[65%] object-cover" />
                <div className="w-full h-[15%] flex justify-end items-center gap-2">
                <button  onClick={() => {
              const modal = document.getElementById("addeventModal") as HTMLDialogElement | null;
              if (modal) modal.close();
            }} className="w-[76px] font-inter cursor-pointer text-[14px] font-medium h-[36px] text-[#101010] rounded-[6px] flex justify-center items-center">
                        Cancel
                    </button>
                    <button className="w-[76px] font-inter cursor-pointer text-[14px] font-medium h-[36px] bg-[#111827] text-white rounded-[6px] flex justify-center items-center">
                        Action
                    </button>
                </div>
            </div>
       </div>
      </div>
    </ModalManagement>
  );
};

export default Addevent;
