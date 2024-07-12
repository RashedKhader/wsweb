import Image from 'next/image'
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/AboutUs";
import Encryption from "@/components/main/Encryption";
// import Projects from "@/components/main/Projects";
import AboutUs from '@/components/main/AboutUs';
// import SOLUTIONS from '@/components/main/Solutions';
import Solutions from '@/components/main/Solutions';
import Footer from '@/components/main/Footer';
import Whyus from '@/components/main/Whyus';
import Ourvision from '@/components/main/Ourvision';

export default function Home() {
  return (
      <main className="h-full w-full">
          <div className="flex flex-col gap-0">
              <Hero />
              <Solutions />
              <Whyus />
              {/* <Skills /> */}
              {/* <Encryption />  */}
              <Ourvision />
              <AboutUs />   

          </div>
      </main>
  )
}
