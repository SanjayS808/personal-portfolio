
import React from "react";
import { Slackside_One} from "next/font/google";

const rock = Slackside_One({
  weight: '400',
  subsets: ['latin'],
})
import {BsFillMoonStarsFill } from "react-icons/bs";
import{AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import profile from "/public/Sanjay-portfolio.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import "./cv.css"



export default function Home() {
  
  return (
    <div>
      

      <main className="bg-slate-100  ">
          <section className="min-h-screen bg-slate-100">

            

        

            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="/" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                    <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                    <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>

                    <a href="/contact" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>


                </div>
            </nav>



            <div className="text-center p-10 mt-0">
              <div className="text-6xl py-2 text-cyan-700 font-rock-3d  " >
              <h2 className="font-black">Sanjay Sugumar </h2>
              </div>
              <h3 className="text-xl py-2">Software Engineer. </h3>
              <p className="text-md py-5 leading-8 text-gray-800"></p>

              <div className="flex justify-center p-1">
              <a href="https://drive.google.com/uc?export=download&id=15QTCKuwYTudUtIgP4zi6DcdTkLEnRItc">
              <div class="button" data-tooltip="Size: 115 KB">
                <div class="button-wrapper">
                  <div class="text">Download CV</div>
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                    </span>
                  </div>
                </div>
                </a>
            </div>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3">
                <a href="https://www.linkedin.com/in/sanjays20/" className="hover:scale-110 transition-transform duration-300"> <AiFillLinkedin></AiFillLinkedin></a>
                <a href="https://www.instagram.com/sanjay_s.s/" className="hover:scale-110 transition-transform duration-300"> <AiFillInstagram></AiFillInstagram></a>
                <a href="https://github.com/SanjayS808" className="hover:scale-110 transition-transform duration-300"> <AiFillGithub></AiFillGithub></a>

            </div>
            
            <div >
    
                  <Image src={profile}className="relative mx-auto rounded-full w-80 h-80 mt-10"/>

            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                
                </div>
            

          </section>
          
          

      </main>
    </div>
  );
}
