"use client";
import Image from "next/image";
import { Darker_Grotesque, Mukta } from '@next/font/google';
import FaqShow from './components/FaqShow';
import Testimonials from "./components/Testimonial";
import Courses from "./components/Courses";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const mukta = Mukta({
  subsets:['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <div className={mukta.className}>
      <Navigation/>
      
      {/*BODY SECTION*/}
        {/*HERO SECTION*/}
        <div className="relative bg-[url('/hero-img.jpg')] bg-cover bg-center min-h-screen text-center gap-16 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative pt-48 text-white">
              <h1 className="font-extrabold text-4xl md:text-6xl pb-3 px-3">Unleash Your Inner Phenom!!</h1>
              <h1 className="text-2xl px-10">Transform your career with our expert-led online courses and programs</h1>
              <div className="mt-5">
              < a href="/signup" className="bg-blue-700 hover:bg-blue-900 text-white py-3 px-5 rounded-2xl">Get Started Today</a> 
              </div>
            </div>
        </div>

        {/*SECOND SECTION*/}
        <div className="text-center py-32 px-20 bg-gray-200">
          <h1 className="font-bold text-4xl"> Invest In Your Career </h1>
          <div className="flex justify-center flex-wrap md:flex-nowrap items-start">
            <div className="text-center p-4 m-3">
              <div className="flex justify-center py-3">
                <Image src='/target.png' alt="target" width={30} height={30} className="text-center" ></Image>
              </div>
              <h1 className="font-bold text-xl"> Unlock Your Potential </h1>
              <p>Discover a wide range of courses and programs in emerging fields, from AI and data science to business and technology, all designed to help you stay ahead of the curve.</p>

            </div>
            <div className="text-center p-4 m-3">
              <div className="flex justify-center py-3">
                <Image src='/cert.png' alt="certificate" width={30} height={30} ></Image>
              </div>
              <h1 className="font-bold text-xl"> Elevate Your Career  </h1>
              <p>Earn recognized certifications and badges upon completing our courses, and gain a competitive edge in the job market.</p>
            </div>
            <div className="text-center p-4 m-3">
              <div className="flex justify-center py-3">
                <Image src='/star.png' alt="star" width={30} height={30}></Image>
              </div>
              <h1 className="font-bold text-xl"> Learn from the Experts  </h1>
              <p>Take your skills to new heights with our expert-led courses, featuring instructors who are industry leaders and innovators, and get personalized support every step of the way.</p>
            </div>
          </div>
        </div>
        <Courses />
        <Testimonials />
        <FaqShow />
        <Footer />
        
    </div>
  );
}
