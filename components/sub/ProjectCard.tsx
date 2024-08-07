"use client";

import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="relative rounded-lg shadow-lg border border-[#2A0E61] w-1/5 cursor-pointer" onClick={() => { window.open(link) }}>
            {/* <Image
                src={src}
                alt={title}
                width={500}
                height={1000}
                className="w-full object-contain"
            /> */}
            <img src={src} alt={title} style={{ height: "250px !important", margin: "auto" }} />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;