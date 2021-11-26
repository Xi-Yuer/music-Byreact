import React, { memo } from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./style";
export default memo(function ThemeHeaderRCM(props) {
    const { title,keyword=[] , target} = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className="left">
          <h3 className='title'>{title}</h3>
          <div className='keyword'>
              {
                  keyword.map((item,index)=>{
                      return (
                          <div className='item' key={item}>
                              <Link to={target}>{item}</Link>
                              <span className='divider'> | </span>
                          </div>
                      )
                  })
              }
          </div>
      </div>
      <div className="right">
          <Link to={target}>更多</Link>
          <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  );
});
