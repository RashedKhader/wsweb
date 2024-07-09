import Image from 'next/image'
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/AboutUs";
import Encryption from "@/components/main/Encryption";
// import Projects from "@/components/main/Projects";
import AboutUs from '@/components/main/AboutUs';
// import SOLUTIONS from '@/components/main/Solutions';
import Solutions from '@/components/main/Solutions';
import Footer from '@/components/main/Footer';

export default function Home() {
  return (
      <main className="h-full w-full">
          <div className="flex flex-col gap-10">
              <Hero />
              {/* <Skills /> */}
              {/* <Encryption />  */}
              <Solutions />
              <AboutUs />   

          </div>
      </main>
  )
}
