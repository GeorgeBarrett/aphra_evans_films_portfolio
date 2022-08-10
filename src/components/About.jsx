import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-16 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quibusdam accusamus pariatur officia cumque 
                qui eveniet dignissimos modi alias doloremque blanditiis labore voluptate soluta earum odio explicabo ducimus voluptatem aut molestiae, 
                in animi reiciendis. Fuga pariatur dolores laborum, quod officiis ea beatae totam eveniet rem. Pariatur quas similique repellat maiores!
            </p>

            <br />

            <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aliquam nihil alias id blanditiis 
                minus placeat, quia natus! Ut hic, libero atque architecto vero expedita nostrum animi dolorum. Nisi vel numquam eaque a 
                adipisci, suscipit molestiae est, odio nulla quaerat maiores sapiente exercitationem debitis! Exercitationem corrupti culpa fugiat inventore numquam!
            </p>
        </div>
    </div>
  )
}

export default About