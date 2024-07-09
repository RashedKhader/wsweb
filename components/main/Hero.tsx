import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" style={{ boxShadow: "inset 0px 100px 20px 20px #030509" }} id="home">
            <video
                autoPlay
                muted
                loop
                className="rotate-0 absolute top-[60px]  h-full w-full left-100 z-[1] object-cover "
            >
                <source src="/intro3.mp4" type="video/mp4" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;