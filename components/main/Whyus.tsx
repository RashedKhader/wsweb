import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Whyus = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-0"
            id="Whyus"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                WHY US ?
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
                <ProjectCard
                    src="/innovation-icon.png" 
                    title="Innovation"
                    description="Pioneering solutions that challenge conventions and redefine satellite technology"
                    link=""
                />
                <ProjectCard
                    src="/Q1.png"
                    title="Quality"
                    description="Rigorous quality standards upheld by our young and passionate team."
                    link=""
                />
                <ProjectCard
                    src="/reach.png"
                    title="Global Reach"
                    description="A worldwide network connecting us with partners and clients, powered by our youthful spirit."
                    link=""
                />
                 <ProjectCard
                    src="/cost1.png"
                    title="Reduced Costs"
                    description="Being in the region ensures competitive pricing!"
                    link=""
                />
                
            </div>
        </div>
    );
};

export default Whyus;