import React from 'react';
import Homepage from './home/homepage';

const Sidebar = () => {
  return (
    <>
    <div className=" fixed min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" className="hidden" />

    <label for="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-[#252526] text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </label>

    <header className="z-100 bg-[#252526] text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
            Your App is ol
        </a>

        <label for="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
            <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </label>
    </header>

    <aside id="sidebar" className="bg-[#252526]  text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
            <a href="#" className="text-white flex items-center space-x-2 px-4 ">
                <svg className='w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.57996 8.66998C3.19996 6.90998 4.29997 5.37998 5.71997 4.22998" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.08997 21.57C10.01 21.85 10.99 22 12 22C17.52 22 22 17.52 22 12C22 11.4 21.94 10.81 21.84 10.24" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.72003 19.75C5.25003 19.37 4.80002 18.95 4.40002 18.49" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.24 6.34003C18.44 3.72003 15.42 2 12 2C10.99 2 10.01 2.14999 9.08997 2.42999" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 14.4602V8.25015C16 6.93015 15.17 6.74012 14.33 6.97012L11.15 7.84018C10.57 8.00018 10.17 8.45015 10.17 9.12015V10.2301V10.9701V15.5202" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.4101 16.0501C15.2882 16.0501 16.0001 15.3383 16.0001 14.4601C16.0001 13.582 15.2882 12.8701 14.4101 12.8701C13.5319 12.8701 12.8201 13.582 12.8201 14.4601C12.8201 15.3383 13.5319 16.0501 14.4101 16.0501Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.1799 10.7602L15.9999 9.17017" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <span className="text-2xl font-extrabold whitespace-nowrap truncate">MusicChain</span>
            </a>

            <nav data-dev-hint="main navigation">
            <div className="p-4 w-64 bg-[#252526]">
      <div className="w-full py-4 px-2 text-white bg-bg-[#252526] rounded-lg text-left capitalize font-medium ">
       
        <a href='/' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-2">Overview</span>
        </a>
        <a href='/upload' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i className="w-8 fas fa-upload p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-2">Upload</span>
        </a>
        <a href='/dashboard' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <span className="w-8 mb-5 relative">
            <i className="w-8 fas fa-cubes p-2 bg-gray-800 rounded-full">
            </i>
            <span
              className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>
          </span>
          <span className="mx-2">Dashbord</span>
        </a>
        <a href='play' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i className="w-8 fas fa-headphones p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-2">Listen Now</span>
        </a>
        <a href='/browse' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i className="w-8 fas fa-globe p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-2">Browse</span>
        </a>
        {/* <a href='/register' className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
          <i className="w-8 fas fa-registered p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-2">Register Label</span>
        </a> */}
      </div>
    </div>
            </nav>
        </div>

        {/* <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                Contact
            </a>
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                Terms and Condition
            </a>
          
        </nav> */}
    </aside>

   
</div>
    </>
  );
}

export default Sidebar;
