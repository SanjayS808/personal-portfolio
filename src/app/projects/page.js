import Link from "next/link";
import React from "react";
import "./card.css";
import Image from "next/image";
import p1 from "/public/p1.jpeg";
import p2 from "/public/p2.jpg";

export default function Projects() {
    return (
      <div>
        <main className="bg-slate-100">
        <section className="min-h-screen bg-slate-100">
        <nav class="bg-white shadow dark:bg-gray-800">
                        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                            <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>


                            <a href="/projects" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                            

                            <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                            <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>

                            <a href="/resume" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Resume</a>

                          
                        </div>
                    </nav>
        <div className="flex justify-center  p-10 font-black text-4xl">
          <h1>Here are some of my projects!</h1>
          </div>        
        <div className="flex justify-center px-10 ">
                    <div class="card">
            <div class="card-inner">
                <div class="card-front">
                <Image src={p1} style={{ width: '650px', height: '350px', objectFit: 'scale-down' }} />
                </div>
                <div class="card-back">
                    <ul className="p-5">

                      <li className="p-2 text-xl font-bold "> <a href = "https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-GX8"><span class="border-b border-solid border-black border-b-3">Boba Point of Sale System</span></a> • React, Java, Python, SQL</li>
                      <li className=" text-sm p-2"><p>•Picked up of off Facebook Marketplace, this old SLR film camera introduced in 1981 still remains one of my favorite cameras today.</p></li>
                      <li className=" text-sm p-2"><p>•This camera takes 35mm film and features an automatic light-meter, aperture-priority exposure, and full manual mode.</p></li>

                    </ul>                      

                  </div>
              </div>
            </div>
          
          
          
        </div>
        </section>
        </main>
      </div>
      
    );
  }