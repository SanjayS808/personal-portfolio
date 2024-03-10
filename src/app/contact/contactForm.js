// components/ContactForm.js
'use client'
import React, { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to send the email
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form after submission
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8">
      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Enter your message"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
