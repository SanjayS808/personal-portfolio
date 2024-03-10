import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Projects() {
    return (
      <div>
        

        <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="/" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                    <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                    <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>

                    <a href="/contact" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>


                </div>
            </nav>

        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
    );
  }