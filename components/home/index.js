import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Homepage from './homepage';

const HomeLayout = () => {
  return (
    <div>
        <Sidebar className="relative"/>
        <Header classname="z-10"/>
        <main className="bg-[#1f1f1f] flex-1 p-6 lg:px-8">
    <Homepage/>

    </main>
    </div>
  );
}

export default HomeLayout;
