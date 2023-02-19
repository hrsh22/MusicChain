import { Button, Modal, Card } from "antd";
import { useState, useEffect } from "react";
import Image from "next/image";
import Web3 from "web3";
import { uploadAddress, uploadABI } from "../Details";

const DashboardPage = () => {

  useEffect(() => {
    const fetchSongs = async () => {
      if (typeof window.ethereum === "undefined") {
        alert("Please install MetaMask first.");
        return;
      }

      // Connect to the MetaMask provider
      window.addEventListener("load", async () => {
        try {
          await ethereum.enable();
        } catch (error) {}
      });
      // Create a Web3 object
      const web3 = new Web3(window.ethereum);
      // Load the ERC-20 contract
      const contract = new web3.eth.Contract(uploadABI, uploadAddress);

      const accounts = await web3.eth.getAccounts();
      const songsCount = await contract.methods.songCount().call();
      const songs = [];
      for (let i = 1; i <= songsCount; i++) {
        const song = await contract.methods.songs(i).call();
        songs.push(song);
      }
      setSongs(songs);
      console.log("aaaaaaaaaaaaa")
    };
    fetchSongs();
  }, []);
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);

  return (
    <div className="ml-64 mt-16 bg-[#1f1f1f] scrollbar-hide">
      <div class="flex flex-col m-auto p-auto">
        <h1 class="flex py-5  font-bold text-4xl text-gray-100">Songs</h1>
        <div class="flex overflow-x-scroll pb-10 scrollbar-hide">
          <div class="flex flex-nowrap ">
            <div className="mx-auto grid grid-cols-4 gap-6">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="bg-gray-300 h-56 w-full flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">{song.title}</h1>
                      <h2 className="text-lg text-gray-600">{song.artist}</h2>
                      <img
                        className="w-20 mr-4"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec8Uwdw8BxYemHXri0wKvTsDc6u5hUtwNwTvtB_UAcJRXj1XFQPWsfTXoyEkJ3iBq79Q&usqp=CAU"
                      />
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <Button
                      type="primary"
                      className="w-full"
                      href={
                        "https://gateway.pinata.cloud/ipfs/" + song.ipfsHash
                      }
                    >
                      Click to listen
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Modal
              title="Label"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
              okButtonProps={{
                disabled: true,
                style: {
                  display: "none",
                },
              }}
              cancelButtonProps={{
                disabled: true,
                style: {
                  display: "none",
                },
              }}
            >
              <Card className="m-6">
                <div className="flex items-center">
                  <div className="flex">
                    <img
                      className="w-20 mr-4"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec8Uwdw8BxYemHXri0wKvTsDc6u5hUtwNwTvtB_UAcJRXj1XFQPWsfTXoyEkJ3iBq79Q&usqp=CAU"
                    />
                    <div>
                      <p className="self-center font-mono text-xl">Pain</p>
                      <p className="self-center">Ryan Jones</p>
                    </div>
                  </div>
                  <div className="pr-8 absolute right-0 cursor-pointer">
                    <i className="fas fa-play text-end p-3 ml-3 -mt-4 rounded-full bg-green-400"></i>
                  </div>
                </div>
              </Card>
              <Card className="m-6">
                <div className="flex items-center">
                  <div className="flex">
                    <img
                      className="w-20 mr-4"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU"
                    />
                    <div>
                      <p className="self-center font-mono text-xl">Smile</p>
                      <p className="self-center">John Division</p>
                    </div>
                  </div>
                  <div className="pr-8 absolute  right-0 cursor-pointer">
                    <i className="fas fa-play text-end p-3 ml-3 -mt-4 rounded-full bg-green-400"></i>
                  </div>
                </div>
              </Card>
            </Modal>
          </div>
        </div>
      </div>

      <div class="flex flex-col m-auto p-auto">
        <h1 class="flex py-5  font-bold text-4xl text-gray-100">Listen More</h1>
        <div class="flex overflow-x-scroll pb-10 scrollbar-hide">
          <div class="flex flex-nowrap ">
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1uDq2ijo219s4eadWtNTG0Rj1MKh9dt-Xg&usqp=CAU"
                  alt=""
                />
                <i className="fas fa-play p-3 ml-4 -mt-8 absolute rounded-full bg-red-700"></i>
                <h1 className="mt-0 text-center font-bold">Final Draft</h1>
                <h3 className="text-center">Album Launch</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrvl5GJfleFJD52tcjHndJKm4ipw5U7fZQA&usqp=CAU"
                  alt=""
                />
                <i className="fas fa-play p-3 ml-4 -mt-8 absolute rounded-full bg-red-700"></i>
                <h1 className="mt-0 text-center font-bold">Paradise</h1>
                <h3 className="text-center">Album Single Release</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61loou-gZEzuZTGu384YV7-Fkf13RD92gzzHa45nwZU2GbeF0DZG8_bXEQzsA9VzwKfw&usqp=CAU"
                  alt=""
                />
                <i className="fas fa-play p-3 ml-4 -mt-8 absolute rounded-full bg-red-700"></i>
                <h1 className="mt-0 text-center font-bold">Eye</h1>
                <h3 className="text-center">Cat got my tounge</h3>
              </div>
            </div>
            <div
              class="inline-block px-3 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  className="p-2 w-64 rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcy-BA8rsWFGuHYAFP4dTntGQhLzdKmL_BRmoFuis8yuyz81Pb7NkexizV6JROB_jbxWQ&usqp=CAU"
                  alt=""
                />
                <i className="fas fa-play p-3 ml-4 -mt-8 absolute rounded-full bg-red-700"></i>
                <h1 className="mt-0 text-center font-bold">Song Name</h1>
                <h3 className="text-center">Online for onlinw streams</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
