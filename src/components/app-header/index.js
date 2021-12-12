import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style';

import { headerLinks } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default memo(function Header() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  const histroy = useHistory();
  const [text, setText] = useState()
  const jumpToSearch = e => {
    if (e.keyCode === 13 && e.target.value!=='') {
      histroy.push('/search',text);
    }
  };
  return (
    <AppHeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='/' className='logo sprite_01'>
            {' '}
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className='search'
            placeholder='输入关键字回车搜索'
            prefix={<SearchOutlined />}
            onChange={e=>{
              setText(e.target.value)
            }}
            onKeyDown={e => {
              jumpToSearch(e);
            }}
          />
          <div className='center'>创作者中心</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </AppHeaderWrapper>
  );
});
