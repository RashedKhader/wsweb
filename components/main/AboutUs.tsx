import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const AboutUs = () => {
    return (
        <section
            id="aboutus"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20  z-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />

            
        </section>
    );
};

export default AboutUs;