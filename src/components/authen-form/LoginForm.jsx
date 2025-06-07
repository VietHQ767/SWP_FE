import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './login.css';




function LoginForm() {
  
    const onFinish = async(values) => {

  console.log('Success:', values);


};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div className='login-form'>
  <h1>Login</h1>
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

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>

    {/* Add this block below */}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <a href="/forgot-password">Forgot password?</a>
      <a href="/register">Don't have an account? Register!</a>
    </div>
  </Form>
  
    
</div>

  )
}

export default LoginForm

