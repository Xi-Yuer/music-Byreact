import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './style';
export default memo(function ThemeHeaderRCM(props) {
  const { title, keyword = [], target = '', setArea } = props;
  const itemClick = index => {
    if (setArea) {
      switch (index) {
        case 0:
          setArea('ALL');
          break;
        case 1:
          setArea('ZH');
          break;
        case 2:
          setArea('EA');
          break;
        case 3:
          setArea('KR');
          break;
        case 4:
          setArea('JP');
          break;
        default:
          setArea('ALL');
      }
    }
  };
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {keyword.map((item, index) => {
            return (
              <div className='item' key={item} onClick={e => itemClick(index)}>
                <Link to={{pathname:target,state:{title:item}}}>{item}</Link>
                <span className='divider'> | </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='right'>
        <Link to={target}>更多</Link>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  );
});
