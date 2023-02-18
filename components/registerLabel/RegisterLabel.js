import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  message,
  Upload,
  Form,
  Input,
  DatePicker,
  Button,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  InputNumber,
  Switch,
} from "antd";
const { Dragger } = Upload;
import { useState } from "react";
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

const RegisterPage = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
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
                Upload your Label Logo here!
              </p>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Label Name"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input label Name" />
        </Form.Item>

        <Form.Item
          label="Contact Name"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input Contact Name" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input Phone Number" />
        </Form.Item>

        <Form.Item
          label="Email Address"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input Email Address" />
        </Form.Item>

        <Form.Item
          label="Physical Address"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input Physical Address" />
        </Form.Item>

        <Form.Item
          label="Website Url"
          required
          align="center"
          tooltip="This is a required field"
        >
          <Input placeholder="Input Website Url" />
        </Form.Item>

        <Form.Item
          label="Type of Music"
          required
          tooltip="This is a required field"
        >
          <Select>
            <Select.Option value="Rock">Rock</Select.Option>
            <Select.Option value="Hiphop">Hip Hop</Select.Option>
            <Select.Option value="Romantic">Romantic</Select.Option>
            <Select.Option value="Clsssic">Classic</Select.Option>
            <Select.Option value="Jazz">Jazz</Select.Option>
            <Select.Option value="Electronic">Electronic</Select.Option>
            <Select.Option value="Rythm">Rythm</Select.Option>
            <Select.Option value="Disco">Disco</Select.Option>
            <Select.Option value="Opera">Opera</Select.Option>
            <Select.Option value="Poprock">Pop Rock</Select.Option>
            <Select.Option value="Folk">Folk</Select.Option>
            <Select.Option value="Heavy">Heavy Metal</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={4} />
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

export default RegisterPage;
