import React, { memo, useState } from 'react';

import { Form, Button, Input, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../../login';

export default memo(function PhoneLogin(props) {
  const { setIsModalVisible } = props
  const [username=window.localStorage.getItem('username')||''] = useState();
  const [password=window.localStorage.getItem('password')||''] = useState();

  const onFinish = values => {
    const { username, password, remember } = values;
    if (remember) {
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('password', password);
    }
    login(username, password).then(res => {
      window.localStorage.setItem('cookie', res.cookie);
      window.localStorage.setItem(' token', res.token);
      setIsModalVisible(false)
      message.success('登录成功！', 5);
    });
  };
  return (
    <div>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: '手机号不能为空!' }]}
        >
          <Input
            allowClear={true}
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='手机号'
            initialvalues={username}
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: '密码不能为空!' }]}
        >
          <Input
            allowClear={true}
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='密码'
            initialvalues={password}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
