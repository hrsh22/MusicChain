import React, { useState } from 'react';
import { Button, Drawer, Card } from 'antd';
import MetaMask from './metamask';
import Head from 'next/head';
import * as PushAPI from "@pushprotocol/restapi";

const Header = () => {

  const [open, setOpen] = useState(false);

  const [notification, SetNotification] = useState([]);
  const NotificationReceiver = async (props) => {
    const notifications = await PushAPI.user.getFeeds({
      user: "eip155:5:0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74", // user address in CAIP
      env: "staging",
    });
    SetNotification(notifications);
  };

  const showDrawer = () => {
    NotificationReceiver();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Head>
      <title>MusicChain</title>
    </Head>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <nav className="fixed ml-64 navbar-width lg:flex hidden top-0  z-50   items-center  px-2 py-3  bg-[#2c2c2c]">
        <header className="navbar-width header  top-0 navbar-expand-lg flex-wrap bg-[#2c2c2c] flex items-center justify-between px-8 py-02">
          <ul className="flex items-center ">
            <li className=" items-center">
              <i className="fas fa-random p-2 text-[#626262]"></i>
              <i className="fas fa-backward p-2 text-[#626262]"></i>
              <i className="fas fa-play p-2 text-[#626262]"></i>
              <i className="fas fa-forward p-2 text-[#626262]"></i>
              <i className="fas fa-stop p-2 text-[#626262]"></i>
            </li>
          </ul>
          <ul className="flex items-center ">
          <li className="flex items-center">
               <i className="fas fa-search bg-white -mr-8 z-50"></i>
              
              <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"/>    
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row list-none   mr-6 items-center">
            

            <li>
              <span className="px-1 hover:text-gray-800 cursor-pointer w-8 relative" onClick={showDrawer}>
                <i className="fas fa-bell p-2 bg-white rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <Drawer  title="Push Notification (hrsh22.eth)" width={'700px'} placement="right" onClose={onClose} open={open}>

          {notification.map((item, index) => {
            console.log(notification);
            return (
            
              <Card key='key' className="mt-3" type="inner" title={item['app']} extra={<a href="#"><b>{item['blockchain']}</b></a>}>
                {item['message']}
              </Card>
      
            );
          })}
      </Drawer>
            </li>
            
            {/* <li>
              <span className="hover:text-gray-800 cursor-pointer w-10 relative float-right mr-3">
                <i className="fas fa-user p-2 bg-white rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </li> */}
           
            <li className="flex items-center">
             <MetaMask/>
            </li>
          </ul>
        </header>
      </nav></>
  );
};

export default Header;
