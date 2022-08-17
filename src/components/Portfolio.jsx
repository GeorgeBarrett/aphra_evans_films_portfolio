import React from 'react';
import { useState } from 'react';
import Camera1 from '../assets/Camera1.jpg';
import Camera2 from '../assets/Camera2.jpg';
import Camera3 from '../assets/Camera3.jpg';
import Camera4 from '../assets/Camera4.jpg';
import Camera5 from '../assets/Camera5.jpg';
import Camera6 from '../assets/Camera6.jpg';


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            img: Camera1,
            link: "https://www.youtube.com/embed/BfN2U9byZSM"
        },
        {
            id: 2,
            img: Camera2,
            link: "https://www.youtube.com/embed/XlIONpHW6I8" 
        },
        {
            id: 3,
            img: Camera3,
            link: "https://www.youtube.com/embed/7YlHl5XSDYU" 
        },
        {
            id: 4,
            img: Camera4,
            link: "https://www.youtube.com/embed/DcqVWPq4Ri8"
        },
        {
            id: 5,
            img: Camera5,
            link: "https://www.youtube.com/embed/O7THcGM-uo4"
        },
        {
            id: 6,
            img: Camera6,
            link: "https://www.youtube.com/embed/Ul5eM1Votws"
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-900 w-full text-white pb-20 md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
            {
                portfolio.map(({id, img, link}) => (

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                        <div className="flex items-center justify-center">
                        <iframe className="rounded-md justify-center" height="250" width="360" src={link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                ))
            }

            </div>

        </div>
    </div>
  )
}

export default Portfolio