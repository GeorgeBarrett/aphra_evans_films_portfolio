import React from 'react';
import Chicken from '../assets/Chicken.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-14 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-5xl sm:text-7xl font-bold text-white">
                    Aphra Evans Films
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I'm a values-led multimedia journalist working across video, photography and the written word. She is based in Bristol, UK.
                Her clients include The Evening Standard, local media The Bristol Cable and Bristol24/7, Citizens Advice, Knowle West Media Centre, Black Bark Films, National Team for the Development of Inclusion and more.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-800 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={30} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={Chicken} alt="photo of a chicken" className="rounded-2xl mx-auto w-2/5 md:w-1/2" />
            </div>

        </div>
    </div>
  )
}

export default Home