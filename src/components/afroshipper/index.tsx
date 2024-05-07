import { useEffect, useState } from "react"
import { afro1, afro10, afro11, afro12, afro13, afro14, afro15, afro16, afro17, afro18, afro19, afro2, afro20, afro3, afro4, afro5, afro6, afro7, afro8, afro9, afrohome, afrologo, afrologout, afroprofile, dropdownclose, dropdownopen } from "../../assets"

function Afroshipper() {
    const [dropId, setDropId] = useState("")
    const [drop, setdrop] = useState(false)
    const [active, setActive] = useState("activity")
    const param = window.location.pathname
    console.log(param)
    const navs = [
        {
            id: "1",
            name: "Home",
            icon: afrohome,
            dropdown: false,
            link: "/afrohome",
        },
        {
            id: "2",
            name: "User Management",
            icon: afro1,
            dropdown: true,
            link: "/afrohome",
            miniLinks: [
                {
                    name: "Users",
                    link: "/users"
                },
                {
                    name: "Employees",
                    link: "/afroshipper"
                },
                {
                    name: "Driver",
                    link: "/drivers"
                },
                {
                    name: "Influencers",
                    link: "/influencers"
                }
            ]
        },
        {
            id: "3",
            name: "Organizations",
            icon: afro2,
            dropdown: false,
            link: "/afrohome",
        },
        {
            id: "4",
            name: "Vechicle",
            icon: afro3,
            dropdown: false,
            link: "/afrohome",
        },
        {
            id: "5",
            name: "Shipments",
            icon: afro4,
            dropdown: true,
            link: "/afrohome",
            miniLinks: [
                {
                    name: "Overview",
                    link: "/overview"
                },
                {
                    name: "Notifications",
                    link: "/notifications"
                },
                {
                    name: "Analytics",
                    link: "/analytics"
                },
                {
                    name: "Report",
                    link: "/report"
                }
            ]
        },
        {
            id: "6",
            name: "Wallet",
            icon: afro5,
            dropdown: false,
            link: "/afrohome",
        },
        {
            id: "7",
            name: "Transactions",
            icon: afro6,
            dropdown: false,
            link: "/afrohome",
        },
        {
            id: "8",
            name: "Shipping Quote",
            icon: afro7,
            dropdown: false,
            link: "/afrohome",
        },
    ]
    const tools = [
        {
            id: "1",
            name: "Support Tickets",
            icon: afro8,
            dropdown: false,
            link: "/support-tickets",
            miniLinks: [{

            }]
        },
        {
            id: "2",
            name: "Invoices",
            icon: afro9,
            dropdown: true,
            link: "/invoices",
            miniLinks: [{}]
        },
        {
            id: "3",
            name: "Marketplace",
            icon: afro10,
            dropdown: false,
            link: "/marketplace",
            miniLinks: [{}]
        },
        {
            id: "4",
            name: "Log",
            icon: afro11,
            dropdown: false,
            link: "/log",
            miniLinks: [{}]
        },
        {
            id: "5",
            name: "Settings",
            icon: afro12,
            dropdown: true,
            link: "/settings",
            miniLinks: [{}]
        },
    ]
    const dropdown = (id: string) => {
        setDropId(id)
        setdrop(!drop)
    }

    const actions = [
        {
            name: "Overview",
            action: "overview"
        },
        {
            name: "Branch",
            action: "branch"
        },
        {
            name: "KYC Document",
            action: "kyc"
        },
        {
            name: "Activity Log",
            action: "activity"
        },

    ]

    
  const tableHeading = [
    { title: "Location", type: "text" },
    { title: "Email", type: "text" },
    { title: "IP Address", type: "text" },
    {title: "Time", type: "text"},
    { title: "Activity Status", type: "button" },
  ];

  const data = [
    {
        location: "Australia",
        email: "Chrome - Windows",
        ipaddress: "207.40.22.358",
        time: "3 days ago",
        status: "Active"
    },
    {
        location: "Australia",
        email: "Safari - iOS",
        ipaddress: "207.40.22.358",
        time: "3 days ago",
        status: "Active"
    },
    {
        location: "Australia",
        email: "Chrome - Windows",
        ipaddress: "207.40.22.358",
        time: "last week",
        status: "Expired"
    },
    {
        location: "Australia",
        email: "Safari - iOS",
        ipaddress: "207.40.22.358",
        time: "3 days ago",
        status: "Signed Out"
    },
    {
        location: "Australia",
        email: "Chrome - Windows",
        ipaddress: "207.40.22.358",
        time: "last week",
        status: "Signed Out"
    },
  ]
    useEffect(() => {

    }, [dropId, drop, active])

    return(
        <div className='w-full h-full bg-white absolute flex font-inter font-feature-default '>
            <div className="w-[22%] h-full overflow-scroll bg-[#0B0E54] flex pr-5 pl-5 pt-5 pb-5">
                <div className=" w-full h-full flex flex-col">
                    <div className="w-full h-fit pr-2 pl-2 flex justify-center">
                    <img src={afrologo} alt="" className="w-full h-[42px] object-cover" style={{backgroundPosition: "center"}} />
                    </div>
                    <ul className="w-full mt-4 h-fit flex flex-col gap-2 ">
                        {navs.map((el, l) => (
                            <>
                            <li key={el.id} className="w-full flex-shrink-0 cursor-pointer h-[40px] rounded-[6px] flex items-center justify-between pl-2 pr-2">
                            <div className="flex w-fit items-center gap-2">
                            <img src={el.icon} alt="" className="w-[24px] h-[24px] object-cover"/>
                            <h1  className="text-[16px] text-[#F3F6FF] font-semibold  font-inter font-feature-default">{el.name} </h1>
                            </div>
                            {el.dropdown === true && <button className="w-[24px] h-[24px] flex justify-center items-center" onClick={() => dropdown(el.id)}><img src={drop === true && dropId === el.id ? dropdownopen : dropdownclose} alt="" className="w-[20px] h-[20px] object-cover"/></button>}  
                        </li>
                        {drop === true && dropId === el.id && 
                            <ul className="w-full h-fit flex flex-col gap-2"> 
                                {el.miniLinks?.map((ell, l) => (
                                     <li style={{
                                        background: `${param === ell.link ? "#EAAA08" : "transparent"}`
                                     }} className="w-full flex-shrink-0 cursor-pointer h-[40px] rounded-[6px] pl-8 flex items-center justify-between">
                                     <div className="flex w-fit items-center gap-2">
                                     <img src={param === ell.link ? afro14 : afro13} alt="" className="w-[8px] h-[8px] object-cover"/>
                                     <h1 style={{
                                        color: `${param === ell.link ? "#0C0F5C" : "#F3F6FF"}`
                                     }} className="text-[16px] font-inter font-feature-default  font-semibold">{ell.name} </h1>
                                     </div>
                                     
                                 </li>
                                    
                                ))}
                                 </ul>
                         }
                         </>
                        ))}
                        
                    </ul>
                    <ul className="w-full mt-6 h-fit flex flex-col gap-2">
                        <label htmlFor="" className="text-[#FFFFFF80] font-inter font-feature-default pr-2 pl-2 text-[14px] font-medium">INTERNAL TOOLS</label>
                        {tools.map((el, l) => (
                            <>
                            <li key={el.id} className="w-full flex-shrink-0 cursor-pointer h-[40px] rounded-[6px] flex items-center justify-between pl-2 pr-2">
                            <div className="flex w-fit items-center gap-2">
                            <img src={el.icon} alt="" className="w-[24px] h-[24px] object-cover"/>
                            <h1 className="text-[16px] text-[#F3F6FF] font-inter font-feature-default font-semibold">{el.name} </h1>
                            </div>
                            {el.dropdown === true && <button className="w-[24px] h-[24px] flex justify-center items-center" onClick={() => dropdown(el.id)}><img src={drop === true && dropId === el.id ? dropdownopen : dropdownclose} alt="" className="w-[20px] h-[20px] object-cover"/></button>}  
                        </li>
                        {drop === true && dropId === el.id && 
                            <ul className="w-full h-fit flex flex-col"> 
                                {el.miniLinks?.map((ell, l) => (
                                     <li className="w-full flex-shrink-0 cursor-pointer h-[40px] rounded-[6px] pl-8 flex items-center justify-between">
                                     <div className="flex w-fit items-center gap-2">
                                     <img src={afro13} alt="" className="w-[8px] h-[8px] object-cover"/>
                                     <h1 className="text-[16px] font-inter font-feature-default text-[#F3F6FF] font-semibold"> </h1>
                                     </div>
                                     
                                 </li>
                                    
                                ))}
                                 </ul>
                         }
                         </>
                        ))}
                    </ul>
                    <div className="h-[64px] mt-6 mb-4 flex justify-center pl-1 pr-1 items-end flex-shrink-0 w-full border-t-[1px] border-[rgb(255,255,255, 0.1)]">
                        <div className="h-[40px] w-full  flex gap-3">
                            <img src={afroprofile} alt="" className="w-[40px] h-full object-cover rounded-[50%]" />
                            <div className="w-[75%] h-full flex flex-col justify-between">
                                <h3 className="text-[14px] font-semibold text-white font-inter font-feature-default">Olivia Rhye</h3>
                                <h4 className="text-[12px] font-inter font-feature-default  font-normal text-[#D5DEFF]">olivia@untitledui.com</h4>
                            </div>
                            <div className="w-[15%] h-full  flex justify-center items-start">
                                <img src={afrologout} alt=""  />
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>

            <div className="w-[78%] h-full bg-white flex flex-col ">
                <div className="w-full h-[68px]  flex flex-shrink-0 justify-between border-b-[1px] border-[#E4E7EC] items-center pr-8 pl-8">
                    <div className="bg-[#F2F4F7] w-[50%] h-[44px] rounded-[8px] flex">
                        <button className="w-[8%] h-full bg-transparent flex justify-center items-center">
                            <img src={afro15} alt="" />
                        </button>
                        <input type="text" placeholder="Search" className="w-[92%] text-[16px] placeholder:text-[#667085] h-full bg-transparent border-0 outline-none" />
                    </div>
                    <div className="h-[44px] w-[10%] flex justify-between items-center">
                        <button className="w-[30%] h-full flex justify-center items-center"><img src={afro16} alt="" className="w-[20px] h-[20px] object-cover" /></button>
                        <img src={afroprofile} alt="" className="w-[40px] h-[40px] rounded-[50%]" />
                    </div>
                </div>

                <div className="w-full pr-8 pl-8 h-full flex flex-col">
                    <div className="h-[28px] flex-shrink-0 w-full mt-9  flex items-center gap-3">
                        <img src={afro17} alt="" className="w-[20px] h-[20px] object-cover"/>
                        <img src={afro18} alt="" className="w-[18px] h-[18px] object-cover"/>
                        <h2 className="text-[14px] pl-2 pr-2 rounded-[6px] cursor-pointer text-[#475467] font-medium hover:bg-[#F9FAFB]">User Management</h2>
                        <img src={afro18} alt="" className="w-[18px] h-[18px] object-cover"/>
                        <h2 className="text-[14px] pl-2 pr-2 rounded-[6px] cursor-pointer text-[#475467] font-medium hover:bg-[#F9FAFB]">Users</h2>
                        <img src={afro18} alt="" className="w-[18px] h-[18px] object-cover"/>
                        <h2 className="h-[28px] pl-2 pr-2 bg-[#F9FAFB] cursor-pointer flex items-center rounded-[6px] text-[14px] text-[#344054] font-semibold">Abdullah Nasir</h2>
                    </div>
                    <div className="w-full overflow-scroll h-[491px] flex flex-col ">
                    <div className="h-[140px] flex-shrink-0 mt-9 w-full flex flex-col justify-between">
                        <div className="flex h-fit w-full items-center relative gap-3">
                            <img src={afro19} alt="" className="w-[56px] h-[56px] rounded-[50%] object-cover" />
                            <img src={afro20} alt="" className="w-[18px] h-[18px] rounded-[50%] absolute ml-[38px] mt-[38px]" />
                            <h3 className="text-[28px] text-[#101928] font-bold">Abdullah Nasir</h3>
                        </div>
                        <div className="h-[52px] w-full flex-shrink-0 border-b-[1px] border-[#EAECF0] flex">
                            {actions.map((el,l) => (
                                 <button style={{
                                    color: `${active === el.action ? "#0B0E54" : "#667085" }`,
                                    fontWeight: `${active === el.action ? "600" : "400"}`,
                                    borderBottom: `${active === el.action ? " 2px solid #0B0E54" : "0px"}`
                                }} onClick={() => setActive(el.action)} className="cursor-pointer flex-shrink-0 w-fit text-[14px] h-full flex items-center justify-center pl-4 pr-4 ">{el.name}</button>
                            ))}
                           
                        </div>
                    </div>
                    <div className="w-full mt-8 flex-shrink-0 h-[481px] border-[2px] flex flex-col border-[#EAECF0] rounded-[12px]">
                        <div className="flex h-[77px] w-full justify-between items-center pr-8 pl-8">
                            <h3 className="text-[18px] font-semibold text-[#101828]">Session Logs</h3>
                            <button className="w-[172px] h-[36px] bg-[#0C0F5C] text-white rounded-[8px] font-semibold text-[14px] text-center">Sign Out All Sessions</button>
                        </div>
                        <table className="w-full h-full ">
                        <thead className="">
                            <tr className="h-[44px] w-full border-t-[1px] border-b-[1px] border-t-[#EAECF0] bg-[#F9FAFB] border-b-[#EAECF0]">
                                {tableHeading.map((el, i) => (
                                    <th
                                         key={i}
                                         
                                        className=" text-left pl-8  font-medium text-[#475467] w-[calc(100%/5)] text-[12px] "
                      >
                        {el.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className=" ">
                    {data.map((el,index, l) => (
                        <tr  style={{
                            borderBottom: `${index !== l.length - 1 ? "solid 1px #EAECF0" : ""}`
                        }}  className="bg-transparent h-[72px] w-full">
                        <td className="text-[14px] text-[#475467] font-medium pl-8">
                            {el.location}
                        </td>
                        <td className="text-[14px] text-[#475467] font-medium pl-8">
                            {el.email}
                        </td>
                        <td className="text-[14px] text-[#475467] font-medium pl-8">
                            {el.ipaddress}
                        </td>
                        <td className="text-[14px] text-[#475467] font-medium pl-8">
                            {el.time}
                        </td>
                        <td className="text-[14px] text-[#475467] font-medium pl-8">
                            <button
                                style={{
                                    color: `${el.status === "Active" ? "#067647" : el.status === "Expired" ? "#B54708" : "#B42318"}`,
                                    background: `${el.status === "Active" ? "#ECFDF3" : el.status === "Expired" ? "#FFFAEB" : "#FEF3F2"}`,
                                    borderColor: `${el.status === "Active" ? "#ABEFC6" : el.status === "Expired" ? "#FEDF89" : "#FECDCA"}`,
                                }}
                            className=" border-[1px] rounded-[16px] w-fit h-[22px] pl-2 pr-2 text-[12px] font-medium ">{el.status}</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>

                        </table>
                    </div>
                
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Afroshipper