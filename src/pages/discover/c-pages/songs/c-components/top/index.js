import React, { memo, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { StyleWrapper } from './style';
export default memo(function Top(props) {
  const { sub = [], Category = [], changeCat } = props;
  const [isShow, setIsShow] = useState(true);
  const [name, setName] = useState('全部');
  const itemClick = cat => {
    setName(cat.name);
    changeCat(cat.name);
    setIsShow(true);
  };
  const closeAll = e => {
    if (!isShow) {
      setIsShow(!isShow);
    }
  };
  return (
    sub.length !== 0 &&
    Category.length !== 0 && (
      <StyleWrapper
        isShow={isShow ? 'none' : ''}
        onClick={e => {
          closeAll(e);
        }}
      >
        <span className='className'>{name}</span>
        <span className='classControl' onClick={e => setIsShow(!isShow)}>
          选择分类
          <DownOutlined />
        </span>
        <div className='wrapper'>
          <div
            className='header'
            onClick={e => {
              itemClick({ name: '全部' });
            }}
          >
            <span>全部风格</span>
          </div>
          <div className='main'>
            <div className='left'>
              {Category.map(item => {
                return <span key={item.index}>{item.index}</span>;
              })}
            </div>
            <div className='right'>
              <div className='item'>
                {sub
                  .filter(item => item.category === 0)
                  .map(item => {
                    return (
                      <span
                        onClick={e => {
                          itemClick(item);
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
              <div className='item'>
                {sub
                  .filter(item => item.category === 1)
                  .map(item => {
                    return (
                      <span
                        onClick={e => {
                          itemClick(item);
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
              <div className='item'>
                {sub
                  .filter(item => item.category === 2)
                  .map(item => {
                    return (
                      <span
                        onClick={e => {
                          itemClick(item);
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
              <div className='item'>
                {sub
                  .filter(item => item.category === 3)
                  .map(item => {
                    return (
                      <span
                        onClick={e => {
                          itemClick(item);
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
              <div className='item'>
                {sub
                  .filter(item => item.category === 4)
                  .map(item => {
                    return (
                      <span
                        onClick={e => {
                          itemClick(item);
                        }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </StyleWrapper>
    )
  );
});
