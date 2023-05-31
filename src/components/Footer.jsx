import React from "react";
import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookCircleFill, RiTwitterFill, RiGithubFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-secondary p-8 xl:p-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#4B5973] pb-8">
                <div className="w-1/6 contents md:block">
                    <a href="#" className="text-2xl text-white font-bold relative bg-secondary px-1 z-10">
                        Power<span className="text-primary text-5xl ">.</span>{" "} <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10"/>
                    </a>
                </div>
                <nav className="flex items-center gap-4">
                    <a href="#" className="block text-white p-4 bg-primary rounded-full" title="Instagram">
                        <RiInstagramLine/>
                    </a>
                    <a href="#" className="block text-white p-4 bg-primary rounded-full" title="Facebook">
                        <RiFacebookCircleFill/>
                    </a>
                    <a href="#" className="block text-white p-4 bg-primary rounded-full" title="Twitter">
                        <RiTwitterFill/>
                    </a>
                    <a href="#" className="block text-white p-4 bg-primary rounded-full" title="Github">
                        <RiGithubFill/>
                    </a>
                </nav> 
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-white text-center md:text-left">Company</h3>
                <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">About Us</a>
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">Press</a>
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">Investors</a>
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">Events</a>
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">Terms of use</a>
                    <a href="#" className="text-[#CBCFD6] mt-4 hover:text-white transition-colors">Privacy policy</a>
                    <button className="font-semibold py-[.625rem] px-[1.5rem] xl:px-[2.5rem] bg-[#706FE5] text-white rounded-xl text-lg">Contact Us</button>
                </nav>
            </div>
            <div className="mt-20">
                <p className="text-white text-center">© Leonel Chaparro 2023 - All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;