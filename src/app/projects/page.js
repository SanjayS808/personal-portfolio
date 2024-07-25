import Link from "next/link";
import React from "react";
import "./card.css";
import Image from "next/image";
import p1 from "/public/p1.jpeg";
import p2 from "/public/p2.png";

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
        <div id= "card" className="flex justify-center px-10 ">
                    <div class="card">
            <div class="card-inner">
                <div class="card-front">
                <Image src={p1} className="rounded-lg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div class="card-back">
                    <ul className="p-5">

                      <li className=" text-xl font-bold "> <a href = "https://project-3-csce331-client.onrender.com/"><span class="border-b border-solid border-black border-b-3">Boba Point of Sale System</span></a></li>
                      <li className="py text-sm font-bold "> React, Java, Python, SQL</li>
                      <li className=" text-sm p-2"><p>•A point of sale system for a fictional boba shop capable of taking orders, inventory management, and generating sales analytics.</p></li>
                      <li className=" text-sm p-2"><p>•Uses a PostgreSQL database for backend data storage and a React.js frontend for an intuitive UI.</p></li>

                    </ul>                      

                  </div>
              </div>
            </div>
          
          
          
        </div>
        <div id= "card" className="flex justify-center px-10 ">
                    <div class="card">
            <div class="card-inner">
                <div class="card-front">
                <Image src={p2} className="rounded-lg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div class="card-back">
                    <ul className="p-5">

                      <li className=" text-xl font-bold "> <a href = "https://github.com/SanjayS808/Seam-Carver"><span class="border-b border-solid border-black border-b-3">PPM File Compressor</span></a></li>
                      <li className="py text-sm font-bold "> C++</li>
                      <li className=" text-sm p-2"><p>• Implemented a content aware PPM file compressor using the seam carving technique in C++, effectively reducing image size while preserving essential features.</p></li>
                      <li className=" text-sm p-2"><p>• Demonstrated proficiency in algorithm design and implementation, optimizing the compression process for efficient and seamless file manipulation.</p></li>
                      

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