import React, { memo, useState, useEffect } from 'react';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

import { getVideoDetail,getVideoUrl } from './getData';

export default memo(function VideInfoPage(props) {
  const [item] = useState(props.location.state);
  console.log(item);
  useEffect(() => {
    getVideoDetail(item.vid).then(res => {
      console.log(res);
    });
    getVideoUrl(item.vid).then(res=>{
        console.log(res);
    })
  }, [item.vid]);
  return (
    <RecommendWraper className='wrap-v2'>
      <Content>
        <RecommendLeft>
          <div>
            <span className='title'>{item.title}</span>
            {
                item.creator.map(item=>{
                    return(
                        <span className='userName'>&nbsp;{item.userName}&nbsp;</span>
                    )
                })
            }
          </div>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
