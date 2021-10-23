import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Select, Radio } from "antd";

import { useFormik } from "formik";
import { GROUP } from "../../../../ultil/settings/config";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddUser = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUP;
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm Người Dùng </h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tài Khoản">
          <Input
            name="taiKhoan"
            name="taiKhoan"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Mật Khẩu">
          <Input name="matKhau" name="matKhau" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" name="email" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Số Điện Thoại">
          <Input name="soDt" name="soDt" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mã loại người dùng">
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="KhachHang">Khách hàng</Option>
            <Option value="QuanTri">Quản trị</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input name="hoTen" name="hoTen" onChange={formik.handleChange} />

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Thêm User
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
