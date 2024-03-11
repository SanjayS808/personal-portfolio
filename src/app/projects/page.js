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

                            <a href="/contact" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>

                          
                        </div>
                    </nav>
        <div className="flex justify-center  p-10 font-black text-4xl">
          <h1>Here are some of my projects!</h1>
          </div>        
        <div className="flex justify-center px-10 ">
          
          
          <ul >
            <li className="m-5">
            <a href="https://project-3-csce331-client.onrender.com/">
              <div class="card" >
                  <Image src={p1} />
                  <div class="card__content">
                    <p class="card__title">Boba Point of Sale System</p>
                    <p class="card__description"> • A fully functional point of sale system for a Boba shop. <br></br><br></br>• Cashiers can take orders, manage inventory, and view sales analytics.<br></br><br></br></p>
                  </div>
              </div>
              </a>
            </li>
            
            <li>
              
            </li>

          </ul>
          
        </div>
        </section>
        </main>
      </div>
      
    );
  }