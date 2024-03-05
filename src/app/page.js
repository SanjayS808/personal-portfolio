import React from "react";
import {BsFillMoonStarsFill } from "react-icons/bs";
import{AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import profile from "/Users/sanjaysugumar/jchipsportfolio/public/Sanjay-portfolio.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      

      <main className="bg-slate-100  ">
          <section className="min-h-screen bg-slate-100">

            

        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky ">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <Link href="/projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
              </li>
              <li>
                <Link href="/gallery" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>
              </li>
              
            </ul>
          </div>
          </div>
        </nav>


            <div className="text-center p-10 mt-10">
              <h2 className="text-5xl py-2 text-cyan-500 font-medium">Sanjay Sugumar</h2>
              <h3 className="text-xl py-2">Software Engineer. </h3>
              <p className="text-md py-5 leading-8 text-gray-800"> Howdy! Give me a job </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3">
                <a href="https://www.linkedin.com/in/sanjays20/" className="hover:scale-110 transition-transform duration-300"> <AiFillLinkedin></AiFillLinkedin></a>
                <a href="https://www.instagram.com/sanjay_s.s/" className="hover:scale-110 transition-transform duration-300"> <AiFillInstagram></AiFillInstagram></a>
                <a href="https://github.com/SanjayS808" className="hover:scale-110 transition-transform duration-300"> <AiFillGithub></AiFillGithub></a>

            </div>
            <div >
              <Image src={profile}className="relative mx-auto rounded-full w-80 h-80 mt-10"/>
            </div>

            

          </section>
          
          <section id = "Projects" className="bg-slate-400">
            <div> 
              <h2 className="text-5xl text-center py-10">Projects</h2>
              <h3>Here are some cool things I've worked on!</h3>


            </div>
          </section>

      </main>
    </div>
  );
}
