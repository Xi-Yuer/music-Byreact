import React, { memo, useEffect, useState } from 'react';

import { CustomerServiceOutlined } from '@ant-design/icons';
import { Empty } from 'antd';

import { getDjInfo, getDjAudioUrl } from './getData';
import { getSizeImage } from '@/utils/format-utils';

import { RecommendWraper, Content } from './style';

import { formatDate } from '@/utils/format-utils';

export default memo(function DjRadioInfoPage(props) {

  const propsInfo = props.location.state;
  const [djList=[], setDjList] = useState();

  useEffect(() => {
    getDjInfo(propsInfo.id).then(res => {
      setDjList(res.programs);
    });
  }, [propsInfo]);

  const itemClick = item => {
    console.log(item);
    getDjAudioUrl(item.id).then(res=>{
      console.log(res);
    })
  };

  return (
    <RecommendWraper className='wrap-v2'>
      <Content>
        <div className='navInfo'>
          <div>
            <img src={getSizeImage(propsInfo.picUrl, 130)} alt='' />
          </div>
          <div className='info'>
            <span className='progreamName'>
              <span className='category'>{propsInfo.category}</span>&nbsp;
              {propsInfo.lastProgramName}
            </span>
            <span className='name'>
              <CustomerServiceOutlined />
              &nbsp; {propsInfo.name}
            </span>
            <span className='name'>介绍：{propsInfo.desc}</span>
          </div>
        </div>
        <div>
          <div className='header'>
            <span className='span1'></span>
            <span className='span2'>电台标题</span>
            <span className='span3'>时长</span>
            <span className='span4'>播放</span>
            <span className='span5'>喜欢</span>
          </div>
          {djList.length!==0?djList.map((item, index) => {
            return (
              <div className='header musicList' key={item.id}>
                <span className='span1 text-nowrap'>{index + 1}</span>
                <span className='span2 text-nowrap'>
                  <i
                    className='iconfont icon24gl-play'
                    onClick={e => {
                      itemClick(item, item.id);
                    }}
                  >
                    {' '}
                  </i>
                  {item.name}
                </span>
                <span className='span3 text-nowrap'>
                  {formatDate(item.duration, 'mm:ss')}
                </span>
                <span className='span4 text-nowrap'>{item.listenerCount}</span>
                <span className='span5 text-nowrap'>{item.likedCount}</span>
              </div>
            );
          }):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        </div>
      </Content>
    </RecommendWraper>
  );
});
