import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Whyus = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-20"
            id="solutions"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                OUR SOLUTIONS
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
                <ProjectCard
                    src="/1U.jpg"
                    title="CubeSat ADCS"
                    description="CUBE SATS ADCS SUBSYSTEM  wwnvwp'nv'wvne'wnv'w\vnw'fj ie'pv p'wbe[oni wo'vhw c\e; ve; bv"
                    link="https://www.youtube.com"
                />
                {/* <ProjectCard
                    src="/spplstm.png"
                    title="Stock price prediction with LSTM"
                    description="Stock Price Prediction with LSTM is a machine learning project that uses LSTM, a type of recurrent neural network, to predict stock prices."
                    link=""
                />
                <ProjectCard
                    src="/auto_mieten.png"
                    title="Auto Mieten"
                    description="Developed with Next.js and leveraging its server-side rendering capabilities, the Car Rental website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience."
                    link=""
                /> */}
            </div>
        </div>
    );
};

export default Whyus;