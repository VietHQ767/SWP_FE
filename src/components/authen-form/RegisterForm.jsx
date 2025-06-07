import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './register.css';



function RegisterForm() {
        const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div className='register-form'>

  <h1>SignUp</h1>
  <Form
    name="basic"
    layout='vertical'
    labelCol={{ span: 24 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Full Name"
      name="fullname"
      rules={[
        { required: true, message: 'Please input your full name!' },
        { min: 2, message: 'Full name must be at least 2 characters' },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone Number"
      name="phone"
      rules={[
        { required: true, message: 'Please input your phone number!' },
        {
          pattern: /^[0-9]{9,11}$/,
          message: 'Phone number must be 9–11 digits',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</div>

  )
}

export default RegisterForm;