import React from 'react';
import { calcom1, calcomLogo, card1, card2, card3, card4, card5, card6, github, gridlayout, hiring, profil, slack, twitter } from '../../assets';



function Calcom() {
    console.log(new Date().getFullYear())
    const date = new Date().getFullYear()
    const links = [
        {
            name: "pricing",
            link: "/calcom/pricing"
        },
        {
            name: "apps",
            link: "/calcom/apps"
        },
        {
            name: "developers",
            link: "/calcom/developers"
        },
        {
            name: "jobs",
            link: "/calcom/jobs"
        },
        {
            name: "blog",
            link: "/calcom/blog"
        }
    ]
    const cards = [
        {
            banner: card1,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
        {
            banner: card2,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
        {
            banner: card3,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
        {
            banner: card4,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
        {
            banner: card5,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
        {
            banner: card6,
            date: "Wednesday 17 August, 2022",
            heading: "Using Riverside.fm With Cal.com",
            subheading: "How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.",
            profile: profil,
            name: "Assantewa Heubi"
        },
    ]
    const footer = [
        {
            title: "solution",
            links: [
                {
                name: "Self-hosted",
                link: "/self-hosted"
            },
            {
                name: "Saas Hosting",
                link: "/saas-hosting"
            },
            {
                name: "Infrastructure",
                link: "/infrastructure"
            },
            {
                name: "Web3",
                link: "/web3"
            },
        ]
        },
        {
            title: "DOCUMENTATION",
            links: [
                {
                name: "Product",
                link: "/product"
            },
            {
                name: "Developers",
                link: "/developers"
            },
            {
                name: "Public API",
                link: "/public-api"
            },
            {
                name: "Docker",
                link: "/docker"
            },
        ]
        },
        {
            title: "RESOURCES",
            links: [
                {
                name: "About",
                link: "/about"
            },
            {
                name: "Blog",
                link: "/blog"
            },
            {
                name: "Merch Store",
                link: "/merch-store"
            },
            {
                name: "Open Startup",
                link: "/open-startup"
            },
        ]
        },
        {
            title: "LEGAL",
            links: [
                {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            },
            {
                name: "License",
                link: "/license"
            },
            {
                name: "Security",
                link: "/security"
            },
        ]
        },
    ]
  return (
   <div className='w-full h-full bg-white absolute pl-10 pr-10'>
    <nav className='h-[10%] bg-white w-full flex justify-between items-end '>
        <div className='flex gap-2'>
            <img src={calcomLogo} alt="" className='w-[95%] h-[95%] ' />
            <img src={hiring} alt="" className='w-[95%] h-[95%] ' />
        </div>

        <div className='rounded-[32px] flex border-[2px] border-[#131212] h-[75%] w-[40%] flex items-center justify-evenly'>
            {
                links.map((el, l ) => (
                    <a href={el.link} className='uppercase font-matter font-semibold '>{el.name}</a>
                ))
            }
        </div>
        
        <button className='bg-[#131212] rounded-[32px] flex justify-center h-[75%] w-[10%] items-center text-[#f8f8f8] text-[18px] font-matter uppercase font-semibold'>login</button>
    </nav>
    <div className='w-full h-[40%] flex justify-center items-center relative'>
        
    <div className='w-full h-full rounded-t-[50%] flex justify-center items-center text-dark z-10 absolute' style={{ background: `url(${gridlayout})`,boxShadow: "0px 80px 80px 0px inset #fff" ,backgroundPosition: "center", opacity: 0.4}}></div>
       <p className='text-dark z-20 relative text-[90px] font-sans font-semibold'>Blog</p> </div>
   
   <div className='w-full h-[392px  '>
    <div className='w-full h-full border-[2px] border-[#131212] rounded-[32px] flex justify-between'>
        <div className="w-[50%] h-full"><img src={calcom1} alt="" className='w-full h-full rounded-l-[30.5px] object-cover' /></div>
        
        <div className='w-[50%] h-full bg-transparent rounded-r-[30.5px] flex flex-col justify-between pl-7 pt-10  pr-7'>
            <p className='text-[18px] text-dark font-matter'>Wednesday 17 August, 2022</p>
            <h1 className='text-[40px] text-dark font-semibold line-height-1 font-sans mt-4 ' style={{lineHeight: "41.8px"}}>Using Riverside.fm <br/> With Cal.com</h1>
            <p className='text-[22px] text-dark font-normal mt-4 font-matter' style={{lineHeight: "23.8px"}}> How Cal.com can be used with Riverside.fm to create and host podcasts wherever you are.</p>
            <div className='w-full h-fit flex gap-2 mt-4'>
                <img src={profil} alt="" className='rounded-[50%] border-[2px] border-[#131212] w-[34px] h-[34px]' />
                <p className='text-[18px] text-dark font-matter'>Assantewa Heubi</p>
            </div>
        </div>
    </div>
   </div>

   <div className='w-full h-fit flex flex-col mt-20  '>
   <h1 className='text-[60px] text-dark font-bold line-height-1 font-sans'>More Stories</h1>
   <div className='w-full h-full mt-3 flex justify-between flex-wrap'>
    {cards.map((el, l) => (
        <div className='flex flex-col w-[49%] '>
                <img src={el.banner} alt="" className='w-full h-[50%] object-cover border-[2px] border-[#131212] rounded-[32px]' />
                <div className='w-full h-full bg-transparent rounded-r-[30.5px] flex flex-col justify-between  pt-7 pb-10 pr-7'>
                    <p className='text-[18px] text-dark font-matter'>{el.date}</p>
                    <h1 className='text-[32px] text-dark font-semibold line-height-1 font-sans'>{el.heading}</h1>
                    <p className='text-[22px] text-dark font-normal font-matter'>{el.subheading}</p>
                    <div className='w-full h-fit flex gap-2'>
                        <img src={el.profile} alt="" className='rounded-[50%] border-[2px] border-[#131212] w-[34px] h-[34px]' />
                        <p className='text-[18px] text-dark font-matter'>{el.name}</p>
                    </div>
        </div>
            </div>
    ))}
            
   </div>
   </div>

   <div className='w-full h-[50%] rounded-t-[50%] flex justify-center items-center text-dark  ' style={{ background: `url(${gridlayout})`,boxShadow: "0px 80px 80px 0px inset #fff" ,backgroundPosition: "center", opacity: 0.4}}></div>
   <div className='bg-[#131212] w-full h-[365px] rounded-[32px] flex justify-evenly items-center '>
        <div className='flex flex-col justify-between h-[50%] text-white w-[18%]'>
            <h3 className='text-[30px] font-sans' >Cal.com</h3>
            <div className='w-full h-fit font-matter'>  <p>&copy; {date} <b>Cal.com, Inc.</b>  All rights reserved. Need Help? support@cal.com</p>
            <div className='grid grid-cols-5 gap-6 mt-3'>
                <button className='flex justify-center items-center'>
                    <img src="" alt="" />
                    Star
                </button>
                <div className='flex justify-center items-center'>6,064</div>
                <a href="" className='flex justify-center items-center'><img src={slack} alt="" /></a>
                <a href="" className='flex justify-center items-center'><img src={twitter} alt="" /></a>
                <a href="" className='flex justify-center items-center'><img src={github} alt="" /></a>
            </div></div>
          
        </div>
    {footer.map((el, l) => (
        <ul className='flex h-[50%] justify-between flex-col w-fit'>
            <label htmlFor="" className='text-[#f8f8f8] text-[18px] font-semibold font-matter uppercase'>{el.title}</label>
            {el.links.map((ell,l) => (
                <li className='text-white font-matter'><a href={ell.link}>{ell.name}</a></li>
            ))}
           
        </ul>
    ))}
       
   </div>
   <br />
   </div>
   
  );
}

export default Calcom;
