import React from 'react'
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
            src: Camera1
        },
        {
            id: 2,
            src: Camera2
        },
        {
            id: 3,
            src: Camera3
        },
        {
            id: 4,
            src: Camera4
        },
        {
            id: 5,
            src: Camera5
        },
        {
            id: 6,
            src: Camera6
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-900 w-full text-white pb-20 md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
                <p className="py-6">Check out some of my work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
            {
                portfolio.map(({id, src}) => (

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                        <img src={src} alt="" className="rounded-md" />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">View</button>
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