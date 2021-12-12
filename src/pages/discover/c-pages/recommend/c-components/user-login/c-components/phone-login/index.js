import React, { memo, useState } from 'react';

import { Form, Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login, getUserInfo } from '../../login';

export default memo(function PhoneLogin(props) {
  const { setIsModalVisible } = props;
  const [username = window.localStorage.getItem('username') || ''] = useState();
  const [password = window.localStorage.getItem('password') || ''] = useState();

  const onFinish = values => {
    const { username, password } = values;
    login(username, password)
      .then(res => {
        window.localStorage.setItem('cookie', res.cookie);
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('userInfo', JSON.stringify(res.account));
        setIsModalVisible(false);
        return res.account.id;
      })
      .then(id => {
        getUserInfo(id).then(res => {
          const userInfo = {
            name: res.profile.nickname,
            avatarUrl: res.profile.avatarUrl,
            createTime: res.profile.createTime,
          };
          window.localStorage.setItem('useDetaile', JSON.stringify(userInfo));
          window.localStorage.setItem('isLogin', true);
          props.setLogin(true)
          message.success('登录成功！', 5);
        });
      }).catch(()=>{
        message.error('登录失败!')
        window.localStorage.clear()
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
