import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Form, Input, DatePicker, Button } from "antd";
const { Dragger } = Upload;
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { uploadAddress, uploadABI } from "../Details";
import { ethers } from "ethers";
import { currentAC } from "../metamask";
import Web3 from "web3";

// import { AuthProvider, CHAIN } from '@arcana/auth'

// interface ChainConfig {
//   chainId: CHAIN
//   rpcUrl?: string
// }
// const appAddress = "1dcce7281c2a43270efa25185fc4b94bd10a37b2"
// const auth = new AuthProvider(`${appAddress}`, {
//   position: 'left',
//   theme: 'light',
//   alwaysVisible: false,
//   network: 'testnet', // network can be testnet or mainnet - defaults to testnet
//   chainConfig: {
//     chainId: CHAIN.MANTLE,
//     rpcUrl: 'https://rpc.testnet.mantle.xyz',
//   },
// })



const { RangePicker } = DatePicker;
const { TextArea } = Input;

// const provider = new ethers.providers.JsonRpcProvider("http://localhost:3000");
// const signer = provider.getSigner();
var ipfs = "QmXCqZhNZf7prgy5EMQNM52QucXfLY2aCk4QTdifFnLZ3b";
// const Web3 = require('web3')
const UploadPage = () => {
  const [uploaded, setUploaded] = useState(false);
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const [ipfsHash, setIpfsHash] = useState(null);

  // console.log("currentAC: ", currentAC);

  // const contract = new ethers.Contract(uploadAddress, uploadABI, signer);
  // console.log("contract: ", contract);
  
  async function handleSubmit() {
    submitSong(song, artist, ipfs);
    console.log("Submit button clicked!");
  }

  async function submitSong(song, artist, ipfs) {

    try {
      // Prompt the user to connect their Metamask wallet
      await window.ethereum.request({ method: "eth_requestAccounts" });
      
      // Get the current account from the provider
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const currentAccount = accounts[0];
      
      console.log(`Connected to Metamask with account ${currentAccount}`);
    } catch (error) {
      console.error(error);
    }

    // await auth.init()
    
    // const provider = await auth.connect()
    // const info = await auth.getUser()
    // console.log(info);
    // Create a Web3 object
    const web3 = new Web3(window.ethereum);
    // Load the ERC-20 contract
    const contract = new web3.eth.Contract(uploadABI, uploadAddress);

    console.log("contract: ", contract);
    console.log("song: ", song);
    console.log("artist: ", artist);
    console.log("ipfs: ", ipfs);
    const accounts = await web3.eth.getAccounts();
    console.log("accounts: ", accounts[0]);
    await contract.methods
      .uploadSong(song, artist, ipfs)
      .send({ from: accounts[0] })
      .on("Receipt", (receipt) => {
        console.log("Receipt: ", receipt);
        alert("Transaction sent.");
      });
    setUploaded(true);
    
    
    // setUploaded(true);
    setArtist("");
    setSong("");
  }

  const uploadFileToPinata = async (file) => {
    try {
      const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          pinata_api_key: "9764089aa1f479b33462",
          pinata_secret_api_key:
            "4a0ab474ea52d4fa517477b33c777a53c854e3dc2e49b41e26fdc09a34575c13",
        },
        body: formData,
      });
      const result = await response.json();
      // var ipfs = result.IpfsHash;
      console.log("var ipfs hash: ", ipfs);
      console.log("Console log IPFS hash: ", result.IpfsHash);
      console.log("usestate IPFS hash: ", ipfsHash);
    } catch (error) {
      console.log(error);
    }
  };

  const props = {
    name: "file",
    multiple: false,
    action: "/",
    onChange(info) {
      const { status, response } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        const reader = new FileReader();
        reader.readAsArrayBuffer(info.file.originFileObj);
        reader.onloadend = async () => {
          try {
            await uploadFileToPinata(info.file.originFileObj);
          } catch (error) {
            console.log(error);
          }
        };
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
 
  return (
    <div className="ml-[26rem] mr-[10rem] mt-24 bg-white  rounded-2xl  p-10 shadow-lg shadow-white scrollbar-hide">
      <Form
        layout="vertical"
        labelCol={{ span: 4 }}
        // wrapperCol={{ span: 14 }}
        style={{ maxWidth: 1200 }}
      >
        <Form.Item align="center" valuePropName="fileList">
          <Upload {...props} action="/" listType="picture" maxCount={1}>
            <div className=" border-4 p-10 w-full rounded-xl text-center bg-slate-100 border-dashed">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text text-2xl">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint text-xl">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Song Name"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input
            placeholder="input song name"
            value={song}
            onChange={(event) => setSong(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Artist Name"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input
            placeholder="input artist name"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-black  right-5 absolute"
            type="primary"
            // loading={loadings[0]}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;
