import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-600 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/a00e7e00-53f9-459f-9aa7-ffee5c6bb243" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="email" name="" placeholder="Enter your email address" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea placeholder="Enter your message" name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-gray-500 to-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact