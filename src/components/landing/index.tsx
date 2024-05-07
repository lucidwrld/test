import { useEffect, useState } from "react"
import { land1, land2, land3 } from "../../assets"


function Landingpage()  {
    const [hov, sethove] = useState("")
    const pages = [
        {
            name: "AfroShipper",
            link: "/afroshipper",
            imag: land1
        },
        {
            name: "Event",
            link: "/event",
            imag: land2
        },
        {
            name: "Calcom",
            link: "/calcom",
            imag: land3
        },
    ]
    const  hovering = (namee: string) => {
        sethove(namee)
    }

    useEffect(() => {

    }, [hov])
    return (
        <div className="absolute w-full h-full flex justify-center items-center">
                <div className="w-[60%] h-[60%]  flex flex-col gap-10 justify-between items-center">
                    <h3 className="text-[40px] font-sans font-bold italic ">Design <b className="text-purple-500">Test</b></h3>
                    <p>Designed by Kabiawu Benedict</p>
                    <div className="grid grid-cols-3 w-full h-full gap-3 "
                    >
                        {pages.map((el, l) => (
                            <a href={el.link} onMouseEnter={() => hovering(el?.name)} onMouseLeave={() => sethove("")}  className="w-full relative h-full flex items-center flex-col gap-3">
                            <img src={el.imag} alt="" className="object-cover border-[2px] border-black h-[140px] w-full rounded-[30px]" />
                            {hov === el.name && (
                                <div className="absolute w-full text-[22px] text-white font-extrabold h-[140px] flex justify-center items-center rounded-[30px] bg-[rgb(0,0,0,0.3)]">
                            {el.name}
                            </div>
                            )}
                            
                           
                            <h3 className="text-[22px] font-semibold ">{el.name}</h3>

                        </a>
                        ))}
                        
                    </div>
                </div>
        </div>
    )
}
export default Landingpage