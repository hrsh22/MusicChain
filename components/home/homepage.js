import React from "react";
import Head from 'next/head'
// import { Button, Space } from 'antd';

const HomePage = () => {
  return (

<section class="ml-64 pt-24 bg-[#1f1f1f] fixed scrollbar-hide">
    <div class="px-12 mx-auto max-w-7xl">
        <div class="mx-auto text-center ">
           
            <h1 class="mb-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#240146]  to-[#f63d8d] ">
  MusicChain
</h1>
            <p class="px-0 mb-8 text-lg text-[#ededed] md:text-xl lg:px-24">
            Redefine Your Music Experience with a Decentralized and Unrestricted Music Player.
                </p>
            <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="/upload" class="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-[#f63d8d] rounded-2xl sm:w-auto sm:mb-0">

                    Get Started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
               
            </div> </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-1 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
                        </div>
                    </div>
                    {/* <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"/> */}
                    <img src="dashboard.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
    );
};
export default HomePage;
