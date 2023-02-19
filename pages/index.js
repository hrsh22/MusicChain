import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HomeLayout from '@/components/home'
import { Alert, Space, Button } from 'antd';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const inter = Inter({ subsets: ["latin"] });
const appAddress = "1dcce7281c2a43270efa25185fc4b94bd10a37b2"
const provider = new AuthProvider(`${appAddress}`) // required

const Index = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, []);

  return (
    <div className="bg-[#1f1f1f]">
      {/* {visible?(
      <Alert className="absolute z-50 top-20 right-10 flex justify-center" message="Metamask Not Installed" type="error" showIcon closable />):(
      <Alert className="absolute z-50 top-20 right-10 flex justify-center" message="Metamask Installed" type="success" showIcon closable />)
    } */}
    <ProvideAuth provider={provider}>
     <HomeLayout />
     </ProvideAuth>
    </div>
  );
}

export default Index;
