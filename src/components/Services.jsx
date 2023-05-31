import React from "react";
import { RiMailFill } from "react-icons/ri";

const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-bold text-main">How we can help you</h1>
                <p className="text-xl text-secondary">Follow our newsletter. We will regulary update our latest project and availability.</p>
                <form action="" className="">
                    <div className="relative">
                        <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-5 text-[#667189] text-2xl"/>
                        <input type="text" placeholder="Enter your email address" className="w-full bg-[#EDEDF9] py-6 pl-[3.5625rem] pr-36 rounded-xl outline-none" />
                        <button className="absolute font-semibold py-[.625rem] px-[1.5rem] xl:px-[2.5rem] bg-[#706FE5] text-white rounded-xl text-lg top-1/2 -translate-y-1/2 right-5">Suscribe</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <img src="service1.svg" className="w-12 h-12" alt="service" />
                    <h3 className="text-lg text-main font-bold">UI/UX Design</h3>
                    <p className="text-secondary">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="service2.svg" className="w-12 h-12" alt="service" />
                    <h3 className="text-lg text-main font-bold">Logo Branding</h3>
                    <p className="text-secondary">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="service3.svg" className="w-12 h-12" alt="service" />
                    <h3 className="text-lg text-main font-bold">App Design</h3>
                    <p className="text-secondary">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="service4.svg" className="w-12 h-12" alt="service" />
                    <h3 className="text-lg text-main font-bold">Webiste Design</h3>
                    <p className="text-secondary">Sometimes features require a short description</p>
                </div>
                
            </div>
        </div>
    )
};

export default Services;