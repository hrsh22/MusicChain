import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { message, Upload, Form, Input, DatePicker, Button } from "antd";
const { Dragger } = Upload;
import { useState } from "react";
import { useRouter } from "next/router";
// import ipfsClient from 'ipfs-http-client';

const { RangePicker } = DatePicker;
const { TextArea } = Input;


// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


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
        const buffer = Buffer.from(reader.result);
        console.log("This is file buffer", buffer);
        // const uploadedFile = await ipfs.add({ content: reader.result });
        // setIpfsHash(uploadedFile.path);
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

const UploadPage = () => {

  const [ipfsHash, setIpfsHash] = useState('');

  let router = useRouter();
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      router.push("/v1/dashboard");
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
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
          <Upload
            {...props}
            action="/"
            listType="picture"
            maxCount={1}
          >
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
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Artist Name"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-black  right-5 absolute"
            type="primary"
            loading={loadings[0]}
            onClick={() => enterLoading(0)}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;
