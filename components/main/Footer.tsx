"use client";

import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="contactus"
         className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[5px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-20 font-thin ">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[5px] cursor-pointer" onClick={() => window.open("https://www.instagram.com/wahaspace/")} >
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[5px] cursor-pointer" onClick={() => window.open("https://www.linkedin.com/company/wahaspace/about/")}>
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[5px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[5px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">info@wahaspace.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] my-[10px] text-center">
                    &copy; Waha Space 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer