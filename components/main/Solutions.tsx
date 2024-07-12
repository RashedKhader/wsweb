import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Solutions = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-20"
            id="solutions"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                OUR SOLUTIONS
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
                <ProjectCard
                    src="/1U.jpg"
                    title="CubeSat ADCS"
                    description="MORE DETAILS ABOUT OUR ADCS SYSTEM (might link it to an external page and ofcourse we will change the picture)"
                    link="https://www.youtube.com"
                />
                { <ProjectCard
                    src="/1U.jpg"
                    title="Consultancy Services"
                    description="Our consultancy services are anchored in years of industry experience, offering bespoke solutions and guidance to entities navigating the intricate landscape of space exploration."
                    link=""
                /> /*
                <ProjectCard
                    src="/auto_mieten.png"
                    title="Auto Mieten"
                    description="Developed with Next.js and leveraging its server-side rendering capabilities, the Car Rental website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience."
                    link=""
                /> */ }
            </div>
        </div>
    );
};

export default Solutions;