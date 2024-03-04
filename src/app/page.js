import React from "react";
import {BsFillMoonStarsFill } from "react-icons/bs";
import{AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import profile from "/Users/sanjaysugumar/jchipsportfolio/public/Sanjay-portfolio.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      

      <main className="bg-slate-100 px-10 ">
          <section className="min-h-screen bg-slate-100">

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JChips</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                    </li>
                    <li>
                      <Link href="/projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                    </li>
                    <li>
                      <Link href="/gallery" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="text-center p-10 ">
              <h2 className="text-5xl py-2 text-cyan-500 font-medium">Sanjay Sugumar</h2>
              <h3 className="text-xl py-2">Software Engineer. </h3>
              <p className="text-md py-5 leading-8 text-gray-800"> Howdy! Give me a job </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3">
                <a href="https://www.linkedin.com/in/sanjays20/" className="hover:scale-110 transition-transform duration-300"> <AiFillLinkedin></AiFillLinkedin></a>
                <a><AiFillInstagram></AiFillInstagram></a>
                <a><AiFillGithub></AiFillGithub></a>

            </div>
            <div >
              <Image src={profile}className="relative mx-auto rounded-full w-80 h-80 mt-10"/>
            </div>
          </section>
          
          <section>
            <div> 

            </div>
          </section>

      </main>
    </div>
  );
}
