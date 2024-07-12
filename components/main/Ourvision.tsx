import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import Ourmissiontext from "../sub/Ourvisiontxt";

const Ourvision = () => {
    return (
        <section
            id="OurVision"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20  z-20"
            style={{ transform: "scale(0.9" }}
        >
            <Ourmissiontext />

        </section>
    );
};

export default Ourvision;