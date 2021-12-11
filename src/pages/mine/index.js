import React, { memo, useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';

import { Collapse, Form, Input, Button, Modal, message } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
  UnLogin,
  CardStyle,
} from './style';

import { getUserInfo, getUserRecommendSongMenuList,login } from './api';
import { getSizeImage } from '@/utils/format-utils';

export default memo(function Mine(props) {
  const { Panel } = Collapse;
  const history = useHistory();

  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  const isLogin = window.localStorage.getItem('isLogin')
  const [islogin=isLogin,setLogin] = useState();
  const [userSongList = [], setUserSongList] = useState();
  const [recommendMenuSongList = [], setRecommendMenuSongList] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    getUserInfo(userInfo?.id).then(res => {
      setUserSongList(res.playlist);
    });
  }, [userInfo?.id]);

  useEffect(() => {
    getUserRecommendSongMenuList().then(res => {
      setRecommendMenuSongList(res.result);
    });
  }, []);
  const itemClick = iten => {
    history.push({ path: '/mine/songMenuList', state: iten.id });
  };

  const onFinish = values => {
    login(values.username,values.password).then(res=>{
      window.localStorage.setItem('cookie', res.cookie);
      window.localStorage.setItem(' token', res.token);
      window.localStorage.setItem('userInfo',JSON.stringify(res.account))
      setIsModalVisible(false)
      message.success('登录成功！', 5);
      setLogin(true)
      window.localStorage.setItem('isLogin',true)
    })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    (
      <div className='wrap-v2'>
        {islogin ? (
          <RankingWrapper className='wrap-v2'>
            <RankingLeft>
              <div className='navBar'>
                {/* <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的视频(22)</h3> */}
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                >
                  <Panel header='创建的歌单' key='1'>
                    {userSongList.slice(1).map(iten => {
                      return (
                        <div
                          key={iten.id}
                          className='songMenuItem'
                          onClick={e => itemClick(iten)}
                        >
                          <div>
                            <img
                              src={getSizeImage(iten.coverImgUrl, 50)}
                              alt=''
                            />
                          </div>
                          <div className='songMenuInfo'>
                            <span className='text-nowrap songName'>
                              {iten.name}
                            </span>
                            <span className='trackCount'>
                              {iten.trackCount}首
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </Panel>
                  <Panel header='推荐歌单(10)' key='2'>
                    {recommendMenuSongList.map(iten => {
                      return (
                        <div
                          key={iten.id}
                          className='songMenuItem'
                          onClick={e => itemClick(iten)}
                        >
                          <div>
                            <img src={getSizeImage(iten.picUrl, 50)} alt='' />
                          </div>
                          <div className='songMenuInfo'>
                            <span className='text-nowrap songName'>
                              {iten.name}
                            </span>
                            <span className='trackCount'>
                              {iten.trackCount}首
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </Panel>
                </Collapse>
              </div>
            </RankingLeft>
            <RankingRight>{renderRoutes(props.route.routes)}</RankingRight>
          </RankingWrapper>
        ) : (
          <UnLogin className='mine' onClick={showModal}>
            <img
              src='https://s2.music.126.net/style/web2/img/mymusic.png?30666809519e9fdfdce43ec513c92050'
              alt=''
            />
          </UnLogin>
        )}
        <Modal
          title='账号登录'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <CardStyle>
            <Form
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='手机号'
                name='username'
                rules={[{ required: true, message: '请输出手机号' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='密码'
                name='password'
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </CardStyle>
        </Modal>
      </div>
    )
  );
});
