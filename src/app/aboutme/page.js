import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./about.css";

import aboutMe from "/public/aboutme.jpg";

import aboutOne from "/public/abOne.jpg";
import aboutTwo from "/public/aboutTwo.jpg";
import aboutThree from "/public/aboutThree.jpg";
import aboutFour from "/public/aboutFour.jpg";



export default function AboutMe() {
    return (
      <div>
              <main className="bg-slate-100  ">
          <section className="min-h-screen bg-slate-100">
        <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    

                    <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                    <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                    <a href="/aboutme" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">About Me</a>



                </div>
        </nav>

            <div className="p-10">


                <div className="flex flex-wrap items-center justify-center mt-10 px-5">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-5 ">
                        

                        <Image src={aboutMe} className="rounded-lg " alt="Minolta Camera" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <h1 className=" flex justify-center text-4xl font-bold text-gray-800 dark:text-gray-200 py-3" >About Me</h1>
                        <p className="text-xl text-gray-800 dark:text-gray-200 px-5">
                            My name is Sanjay Sugumar. I am a Computer Science student at Texas A&M University and I am also pursuing a minor in business.
                            I have a strong passion for technology and I am always looking for ways to learn more about it. I am also a huge fan of photography and I love to take pictures in my free time.
                            Some of my other hobbies include workinng out, running, and reading books. Feel free to connect with my on my socials and thanks for checking out my website!
                        </p>
                    </div>`
                </div>

                <div className="mt-10 bg-gray-100 rounded-lg">

                    <div className="flex flex-wrap justify-center mt-4">
                        <div class = "card" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
                            <Image src={aboutTwo} alt="Lumix Camera" className="rounded-2xl"/>
                        </div>
                        <div class = "card" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
                            <Image src={aboutOne} alt="Lumix Camera" className="rounded-2xl"/>
                        </div>
                        <div class = "card" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 ">
                            <Image src={aboutThree} alt="Lumix Camera" className="rounded-2xl "/>
                        </div>
                        <div class = "card" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
                            <Image src={aboutFour} alt="Lumix Camera" className="rounded-2xl"/>
                        </div>
                        {/* Add more gallery images here */}
                    </div>
                </div>
            </div>

        




</section>
</main>
      </div>
    );
    }