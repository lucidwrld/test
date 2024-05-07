import { useParams } from "react-router"
import { apps, calendar, clock, copy, darkclock, dots, dropdown, externalLink, externalLinkDark, link, plus, profil, search, setting, users, zap } from "../../assets"
import Addevent from "./addevent"

function Eventt() {
    console.log(new Date().getFullYear())
    const date = new Date().getFullYear()

    const param = window.location.pathname
    console.log(param)
    const links = [
        {
            name: "Event Types",
            href: "/event",
            image: link
        },
        {
            name: "Bookings",
            href: "/bookings",
            image: clock
        },
        {
            name: "Availability",
            href: "/availability",
            image: calendar
        },
        {
            name: "Apps",
            href: "/apps",
            image: apps
        },
        {
            name: "Workflow",
            href: "/workflow",
            image: zap
        },
        {
            name: "Teams",
            href: "/teams",
            image: users
        },
]
    const linksF = [
        {
            name: "View public page",
            href: "/publicpage",
            image: externalLink
        },
        {
            name: "Copy public page link",
            href: "/public-page-link",
            image: copy
        },
        {
            name: "Settings",
            href: "/settings",
            image: setting
        },
    ]
    const actions =[
        {
            icon: externalLinkDark,
            action: "externallink",
            position: "left",
        },
        {
            icon: link,
            action: "link",
            position: "middle"
        },
        {
            icon: dots,
            action: "menu",
            position: "right"
        }
]
  return ( 
    <div  className='w-full h-full bg-white absolute flex'>
        <div className="w-[20%] h-full bg-[#F9FAFB] border-r-2 border-[#F3F4F6] flex flex-col pl-5 pr-5">
           <div className="w-full h-[80%]  flex flex-col"> <div className="w-full h-[12%]  flex justify-between items-center pl-2 pr-2">
                <div className="w-[70%] h-fit flex gap-2 ">
                    <div className="flex gap-1">
                <img src={profil} alt="" className='rounded-[50%] w-[20px] h-[20px]' />
                <p className='text-[14px] text-[#374151] font-inter font-medium'>Alex Fischer</p>
                </div>
                <button className="w-[24px] h-[24px]"><img src={dropdown} alt="" className="w-full h-full object-cover" /></button>
               </div>
                 <button className="w-[16px] h-[16px]"><img src={search} alt="" className="w-full h-full object-cover" /></button>
            </div>
            <ul className="w-full h-[50%]  flex flex-col justify-between">
                {links.map((el, l) => (
                    <li style={{
                        background: `${param === el.href ? "#E5E7EB" : "" }`
                    }} className="w-full hover:bg-[#E5E7EB] h-[15%] cursor-pointer  rounded-[6px] pl-2 flex items-center gap-2">
                    <img src={el.image} alt="" className="w-[16px] h-[16px] object-cover"  />
                    <p className="text-[14px] text-[#101010] font-inter font-medium">{el.name}</p>
                </li>
                ))}
                
            </ul>
            </div>
            
            <ul className="w-full h-[15%] p-0 m-0  flex flex-col justify-between">
                {linksF.map((el, l) => (
                    <li style={{
                        background: `${param === el.href ? "#E5E7EB" : "transparent" }`
                    }} className="w-full h-[15%] cursor-pointer  rounded-[6px] pl-2 flex items-center gap-2">
                    <img src={el.image} alt="" className="w-[16px] h-[16px] object-cover"  />
                    <p className="text-[14px] text-[#374151] font-inter font-medium">{el.name}</p>
                </li>
                ))}
                
            </ul>
            
        </div>
        <div className="w-[80%] h-full flex flex-col pl-12 pr-12">
            <div className="w-full h-[20%] flex justify-between items-center">
                <div className="flex flex-col w-[80%] h-fit">
                    <h1 className="font-sans text-[#1A1A1A] text-[20px] font-semibold">Event Types</h1>
                    <p className="text-[14px] text-[#292929] font-inter font-normal">Create events to share for people to book on your calendar. <b>View at cal.com/alex</b> </p>
                </div>
                <button   onClick={() => {
                                 const modal = document.getElementById("addeventModal") as HTMLDialogElement | null;
                                 if (modal) modal.showModal();
                            }} className="w-[10%] flex justify-center items-center gap-2 font-inter text-white font-medium text-[14px] h-[30%] rounded-[6px] bg-[#111827]">
                <img src={plus} alt="" className="w-[16px] h-[16px]" />
                     New
                </button>
            </div>
            
            <ul className="w-full h-fit flex gap-[1px] flex-col border-2 rounded-[6px] border-[#DEE2E6] bg-[#DEE2E6] ">
                <li className="w-full h-[116px] bg-white flex justify-between items-center pl-6 pr-6">
                    <div className="w-[80%]  h-[70%] flex flex-col justify-between">
                        <h3 className="font-semibold text-[14px] font-inter text-[#101010]">Design Workshop <span className="text-[#6B7280] text-[12px] font-normal">/alex/design</span></h3>
                        <p className="font-normal text-[14px] font-inter text-[#868E96]">A longer chat to run through designs</p>
                        <div className="h-[24px] w-fit rounded-[4px] pl-2 pr-2 bg-[#E5E7EB] flex gap-1 items-center">
                            <img src={darkclock} alt="" className="w-[12px] h-[12px]"/>
                            <p className="text-[14px] text-[#101010] font-inter font-medium">30m</p>
                        </div>
                    </div>

                    <div className="w-[160px] h-fit flex justify-between items-center">
                        <div className="w-[34px] h-[20px] pl-[3px] pr-[3px] bg-black rounded-[100px] flex justify-end items-center">
                            <button className="w-[14px] h-[14px] rounded-[50%] bg-white"></button>
                        </div>
                        <div className="w-[106px] h-[36px] rounded-[6px]  border-[2px] border-[#DEE2E6] bg-[#DEE2E6] flex gap-[2px]">
                            {actions.map((el, l) => (
                                <button style={{
                                    borderTopLeftRadius: `${el.position === "left" ? "6px" : "0px"}`,
                                    borderBottomLeftRadius: `${el.position === "left" ? "6px" : "0px"}`,
                                    borderTopRightRadius: `${el.position === "right" ? "6px" : "0px"}`,
                                    borderBottomRightRadius: `${el.position === "right" ? "6px" : "0px"}`
                                }} className="bg-white w-full h-full flex justify-center items-center">
                                <img src={el.icon} alt="" className="w-[12px] h-[12px]"  />
                            </button>
                            ))}
                            
                        </div>
                    </div>
                </li>
                <li className="w-full h-[116px] bg-white flex justify-between items-center pl-6 pr-6">
                    <div className="w-[80%]  h-[70%] flex flex-col justify-between">
                        <h3 className="font-semibold text-[14px] font-inter text-[#101010]">Design Workshop <span className="text-[#6B7280] text-[12px] font-normal">/alex/design</span></h3>
                        <p className="font-normal text-[14px] font-inter text-[#868E96]">A longer chat to run through designs</p>
                        <div className="h-[24px] w-fit rounded-[4px] pl-2 pr-2 bg-[#E5E7EB] flex gap-1 items-center">
                            <img src={darkclock} alt="" className="w-[12px] h-[12px]"/>
                            <p className="text-[14px] text-[#101010] font-inter font-medium">30m</p>
                        </div>
                    </div>

                    <div className="w-[160px] h-fit flex justify-between items-center">
                        <div className="w-[34px] h-[20px] pl-[3px] pr-[3px] bg-black rounded-[100px] flex justify-end items-center">
                            <button className="w-[14px] h-[14px] rounded-[50%] bg-white"></button>
                        </div>
                        <div className="w-[106px] h-[36px] rounded-[6px]  border-[2px] border-[#DEE2E6] bg-[#DEE2E6] flex gap-[2px]">
                            {actions.map((el, l) => (
                                <button style={{
                                    borderTopLeftRadius: `${el.position === "left" ? "6px" : "0px"}`,
                                    borderBottomLeftRadius: `${el.position === "left" ? "6px" : "0px"}`,
                                    borderTopRightRadius: `${el.position === "right" ? "6px" : "0px"}`,
                                    borderBottomRightRadius: `${el.position === "right" ? "6px" : "0px"}`
                                }} className="bg-white w-full h-full flex justify-center items-center">
                                <img src={el.icon} alt="" className="w-[12px] h-[12px]"  />
                            </button>
                            ))}
                            
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
        <Addevent />
    </div>
  )
}

export default Eventt