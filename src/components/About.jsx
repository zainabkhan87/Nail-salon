import React from 'react'
import nails2 from "../assets/nails2.jpg";

function About() {
    return (
        <section className="flex flex-col lg:flex-row items-center px-6 lg:px-20 py-10">
            <div className="relative">
                <div className="rounded-full border-8 border-pink-500 p-2">
                    <img
                        src={nails2}
                        alt=""
                        className="rounded-full w-450 h-90 object-cover" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-pink-100 opacity-30 rounded-full -z-10"></div>
            </div>

            <div className="lg:ml-10 mt-6 lg:mt-0 text-centre lg:text-left">
                <h1 className="text-pink-500 text-md font-semibold">ABOUT US</h1>
                <h1 className=" italic text-4xl font-bold">Celine Nail Salon <br /> And
                    <span className="italic text-pink-500"> Aesthetic</span>
                </h1>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Nail stylist and beautician qualified and passionate about my
                    profession, it is with great pleasure that I wish to make you
                    discover my passion for beauty in a warm setting in the city
                    center of Lausanne. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste suscipit officia laboriosam incidunt, cumque earum dolorem nam doloribus, ad accusamus molestiae aperiam reprehenderit eligendi inventore assumenda odio ut necessitatibus. Near coop caroline, rue de bourge moment of relaxation, Nailcare.
                </p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                    Moment of relaxation, nail care (hands and feet), relaxed
                    atmosphere, soothing setting await you. Forget yourself for a
                    moment and come pamper yourself! Nail salon in Lausanne and Beauty...
                </p>
            </div>
        </section>
        
  )
}

export default About
