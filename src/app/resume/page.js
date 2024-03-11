
import React from "react";
import Image from "next/image";
import Link from "next/link";







export default function Projects() {
  return (
    <div>
      <main className="bg-slate-100  ">
        <section className="min-h-screen bg-slate-100">
          <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
              <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>
              <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>
              <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>
              <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>
              <a href="/resume" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Resume</a>
            </div>
          </nav>
          <div className="flex justify-center py-4 font-black text-4xl">
          <h1>Resume</h1>
          </div> 
          <div className="flex justify-center items-center h-screen p-10">
            <embed src="/sanjay_sugumar_resume.pdf" width="100%" height="100%" type="application/pdf" />
          </div>
        </section>
      </main>
    </div>
  );
}