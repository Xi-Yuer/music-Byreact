import React, { memo, useState } from 'react';
import { Modal, Tabs } from 'antd';

import { UserLoginWrapper } from './style';
import PhoneLogin from './c-components/phone-login';
import ScanLogin from './c-components/scan-login'

export default memo(function HYUserLogin() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { TabPane } = Tabs;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <UserLoginWrapper className='sprite_02'>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <span className='sprite_02' onClick={e => showModal()}>
        用户登录
      </span>
      <Modal
        title=''
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey='1'>
          <TabPane tab='手机号登录' key='1'>
            <PhoneLogin setIsModalVisible={setIsModalVisible} />
          </TabPane>
          <TabPane tab='二维码登录' key='2'>
            <ScanLogin setIsModalVisible={setIsModalVisible}/>
          </TabPane>
        </Tabs>
      </Modal>
    </UserLoginWrapper>
  );
});
