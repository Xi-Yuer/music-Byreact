import React, { memo, useState } from "react";
import { Modal, Form, Button, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { UserLoginWrapper } from "./style";

import { login } from "./login";

export default memo(function HYUserLogin() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [username] = useState(window.localStorage.getItem('username'))
  const [password] = useState(window.localStorage.getItem('password'))
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const { username, password, remember } = values;
    if (remember) {
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
    }
    login(username, password).then((res) => {
      window.localStorage.setItem('cookie',res.cookie)
      window.localStorage.setItem(' token',res.token)
      document.cookie = res.cookie
    });
  };
  return (
    <UserLoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <span className="sprite_02" onClick={(e) => showModal()}>
        用户登录
      </span>
      <Modal
        title="用户登录"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "手机号不能为空!" }]}
          >
            <Input
              allowClear={true}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="手机号"
              value={username}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不能为空!" }]}
          >
            <Input
              allowClear={true}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              value={password}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </UserLoginWrapper>
  );
});
