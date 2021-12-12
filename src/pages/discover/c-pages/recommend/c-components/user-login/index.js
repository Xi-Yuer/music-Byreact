import React, { memo, useState } from 'react';
import { Modal, Tabs } from 'antd';

import { getSizeImage, formatDate } from '@/utils/format-utils';

import { UserLoginWrapper } from './style';
import PhoneLogin from './c-components/phone-login';

export default memo(function HYUserLogin() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const isLogin = window.localStorage.getItem('isLogin');
  const userDetaile = JSON.parse(window.localStorage.getItem('useDetaile'))
  console.log(userDetaile);
  const [userInfo=userDetaile] = useState()
  const [Login = isLogin, setLogin] = useState();

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
  const outLogin = () => {
    window.localStorage.clear()
    setLogin(false)
  }
  return (
    <UserLoginWrapper className='sprite_02'>
      {!Login? (
        <>
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <span className='sprite_02' onClick={e => showModal()}>
            用户登录
          </span>
        </>
      ) : (
        <div>
          <img src={getSizeImage(userInfo?.avatarUrl, 50)} alt='' />
          <span style={{ color: '#333' }}>{userInfo?.name}</span>
          <span
            style={{
              color: '#333',
              position: 'absolute',
              right: '10px',
              bottom: '17px',
              textShadow: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={outLogin}
          >
            退出登录
          </span>
          <span style={{ color: '#333', width: '95px' }}>
            {formatDate(userInfo?.createTime, 'yyyy-MM-dd hh:mm')}
          </span>
        </div>
      )}
      <Modal
        title=''
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs defaultActiveKey='1'>
          <TabPane tab='手机号登录' key='1'>
            <PhoneLogin
              setIsModalVisible={setIsModalVisible}
              setLogin={setLogin}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </UserLoginWrapper>
  );
});
