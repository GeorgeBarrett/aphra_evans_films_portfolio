import React from 'react';
import Drone from '../assets/Drone.jpg';
import Gimble from '../assets/Gimble.jpg';
import Lens from '../assets/Lens.jpg';
import Mic from '../assets/Mic.jpg';
import Sony from '../assets/Sony.jpg';
import Tripod from '../assets/Tripod.jpg';

const Services = () => {

    const equipment = [
        {
            id: 1,
            src: Drone,
            title: "Drone",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: Gimble,
            title: "Gimble",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: Lens,
            title: "Lens",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: Mic,
            title: "Mic",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: Sony,
            title: "Sony",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: Tripod,
            title: "Tripod",
            style: "shadow-white"
        },
    ]

  return (
    <div name="services" className="bg-gradient-to-b from-gray-900 to-black w-full h-fit">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Services</p>
                <p className="py-6 my-3">
                    Videographer/camera operator <br />

                    Self-shooting documentary producer/director <br />

                    Editor across Adobe Creative Suite, primarily Premiere Pro and After Effects <br />

                    Documentary photography and written journalism <br />
                </p>
                <p className="text-3xl">Equipment List</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                
                {
                    equipment.map(({id, src, title, style}) => (

                        <div key={id} className={`shadow-sm hover:scale-105 duration-500 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-50 top-0 rounded-t-lg mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services