import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Dashbord from './dashbordPage';

const DashbordLayout = () => {
  return (
    <div className=''>
        <Sidebar className="relative"/>
        <Header classname="z-10"/>
        <main class=" flex-1 p-6 lg:px-8">
    <Dashbord/>

    </main>
    </div>
  );
}

export default DashbordLayout;
