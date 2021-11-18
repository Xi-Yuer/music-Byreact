import React, { memo, useState, useEffect } from 'react';

import Comments from './c-components/comments';
import SimiMv from './c-components/simiMv';

import {
  LikeOutlined,
  FolderAddOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

import {
  getVideoDetail,
  getVideoInfo,
  getVideoUrl,
  getVideoComments,
  getSimiMv,
} from './getData';

export default memo(function VideInfoPage(props) {
  const [item] = useState(props.location.state);
  const [id = props.location.state.vid, setId] = useState();
  const [videoDescribtion, setVideoDescribtion] = useState();
  const [videoDetail, setVideoDetail] = useState();
  const [videoUrl = '', setVideoUrl] = useState();
  const [videComments = [], setVideComments] = useState();
  const [simiMv = [], setSimiMv] = useState();

  useEffect(() => {
    getVideoDetail(id).then(res => {
      setVideoDetail(res);
    });
    getVideoInfo(id).then(res => {
      console.log(res);
      setVideoDescribtion(res.data.desc);
    });
    getVideoUrl(id).then(res => {
      if (!res.data.url) return;
      setVideoUrl(res.data.url);
    });

    getVideoComments(id).then(res => {
      setVideComments([...res.hotComments, ...res.comments]);
    });
    getSimiMv(id).then(res => {
      setSimiMv(res.mvs);
    });
  }, [id]);
  const simiMvClick = id => {
    setId(id);
  };
  return (
    videoUrl !== undefined &&
    videoDetail !== undefined && (
      <RecommendWraper className='wrap-v2'>
        <Content>
          <RecommendLeft>
            <div>
              <span className='title'>{item.title}</span>
              {item.creator.map(item => {
                return (
                  <span className='userName' key={item.userName}>
                    &nbsp;{item.userName}&nbsp;
                  </span>
                );
              })}
            </div>
            <div>
              <video controls autoPlay src={videoUrl}></video>
            </div>
            {
              <div className='icon'>
                <span>
                &nbsp;&nbsp;<LikeOutlined />
                  {videoDetail.likedCount}
                </span>
                <span>
                  <FolderAddOutlined />
                  {videoDetail.commentCount}
                </span>
                <span>
                  <ShareAltOutlined />
                  {videoDetail.shareCount}
                </span>
              </div>
            }
            <div>
              <Comments hotComments={videComments} />
            </div>
          </RecommendLeft>
          <RecommendRight>
            <div className='describetion'>
              {videoDescribtion && (
                <div>
                  <h2>视频详情：</h2>
                  <br /> <p>{videoDescribtion}</p>
                </div>
              )}
            </div>
            {
              simiMv.length && <div>
                <h2 style={{ marginLeft: '10px' }}>相似视频</h2>
                <SimiMv simiMv={simiMv} simiMvClick={simiMvClick} />
              </div>
            }
          </RecommendRight>
        </Content>
      </RecommendWraper>
    )
  );
});
