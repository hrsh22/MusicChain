import { InboxOutlined ,UploadOutlined } from "@ant-design/icons";
import { message, Upload, Form, Input, DatePicker,Button } from "antd";
const { Dragger } = Upload;
import { useState } from 'react';
import { useRouter } from 'next/router'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const props = {
  name: "file",
  multiple: false,
  action: "/",
  
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const UploadPage = () => {
  let router= useRouter()
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      router.push('/v1/dashboard')
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
        style={{ maxWidth:1200 }}
        
         
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
              <InboxOutlined/>
            </p>
            <p className="ant-upload-text text-2xl">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint text-xl">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p></div>
    </Upload>
        </Form.Item>

        <Form.Item label="Token ID" required align="center"  tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>

        {/* <Form.Item label="Radio">
              <Radio.Group>
                <Radio value="apple"> Apple </Radio>
                <Radio value="pear"> Pear </Radio>
              </Radio.Group>
            </Form.Item> */}
        {/* <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item> */}
        {/* <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: "Light",
                    value: "light",
                    children: [{ title: "Bamboo", value: "bamboo" }],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
           
          */}
            <Form.Item >
               <Button className="bg-black  right-5 absolute" type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Submit
        </Button>
            </Form.Item> 
      </Form>
    </div>
  );
};

export default UploadPage;
