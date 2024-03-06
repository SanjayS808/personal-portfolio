import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./div.css";

import minolta from "/Users/sanjaysugumar/jchipsportfolio/public/minolta.jpg";
import lumix from "/Users/sanjaysugumar/jchipsportfolio/public/lumix.jpg";
export default function Gallery() {
    return (
      <div>
              <main className="bg-slate-100  ">
          <section className="min-h-screen bg-slate-100">
        <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    

                    <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                    <a href="/gallery" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                    <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>

                    <a href="/contact" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>


                </div>
        </nav>

        <div className="flex justify-center font-bold p-5">
          <h1>I also like to take pictures! Here are my cameras!</h1>
        </div>

        <div >
          <div class="camera">
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                  <Image src={minolta} style={{ width: '650px', height: '350px', objectFit: 'cover' }} />
                  </div>
                  <div class="card-back">
                    <ul>
                      <li className="justify-center">Minolta XG-M</li>
                      <li>35mm Film Camera</li>

                    </ul>
                  </div>
                </div>
              </div> 
          </div>
          <div class="camera">
          <div class="card">
            <div class="card-inner">
                <div class="card-front">
                <Image src={lumix} style={{ width: '650px', height: '350px', objectFit: 'cover' }} />
                </div>
                <div class="card-back">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        




</section>
</main>
      </div>
    );
    }