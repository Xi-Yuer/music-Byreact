import React, { memo, useState, useEffect } from 'react';

import Comments from './c-components/comments';
import SimiMv from './c-components/simiMv';
import SimiVideo from './c-components/simiVideo';

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
  // mv
  getVideoDetail,
  getVideoInfo,
  getVideoUrl,
  getVideoComments,
  getSimiMv,

  // 视频
  getVideInfo,
  getOrdinary,
  getRrdinaryUrl,
  getOridinaryVideoComments,
  getSimiVideo,
} from './getData';

export default memo(function VideInfoPage(props) {
  const [id = props.location.state.vid, setId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // 视频类型： 0:mv  1:video
  const [vType = props.location.state.type] = useState();

  // mv
  const [title, setTitle] = useState();
  const [videoDescribtion, setVideoDescribtion] = useState();
  const [videoDetail, setVideoDetail] = useState();
  const [videoUrl = '', setVideoUrl] = useState();
  const [videComments = [], setVideComments] = useState();
  const [simiMv = [], setSimiMv] = useState();

  // video
  const [title2, setTitle2] = useState();
  const [description, setDescription] = useState();
  const [creater, setCreater] = useState();
  const [liked, setLiked] = useState();
  const [Url, setUrl] = useState();
  const [oridnaryComments, setOridnaryComments] = useState();
  const [simiVideo, setSimiVideo] = useState();

  useEffect(() => {
    if (vType === 0) {
      getVideoDetail(id).then(res => {
        setVideoDetail(res);
      });
      getVideoInfo(id).then(res => {
        setVideoDescribtion(res.data.desc);
        setTitle(res.data);
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
        setIsLoading(true);
      });
    } else {
      getOrdinary(id).then(res => {
        setLiked(res);
      });
      getVideInfo(id).then(res => {
        setTitle2(res.data.title);
        setCreater(res.data.creator.nickname);
        setDescription(res.data.description);
      });
      getRrdinaryUrl(id).then(res => {
        setUrl(res.urls[0].url);
        setIsLoading(true);
      });
      getOridinaryVideoComments(id).then(res => {
        setOridnaryComments([...res.hotComments, ...res.comments]);
      });
      getSimiVideo(id).then(res => {
        setSimiVideo(res.data);
      });
    }
  }, [id, vType]);

  const simiMvClick = id => {
    setId(id);
  };
  const simiVideoClick = id => {
    setId(id);
  };
  return (
    isLoading && (
      <RecommendWraper className='wrap-v2'>
        <Content>
          <RecommendLeft>
            {vType === 0 ? (
              <div>
                <div>
                  <span className='title'>{title.name||''}</span>
                  {title.creator ||
                    title.artists.map(item => {
                      return (
                        <span className='userName' key={item.id}>
                          &nbsp;{item.userName || item.name}&nbsp;
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
                      &nbsp;&nbsp;
                      <LikeOutlined />
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
              </div>
            ) : (
              <div>
                <div>
                  <span className='title'>{title2}</span>
                  <br />
                  <span className='userName'>{creater}</span>
                </div>
                <div>
                  <video controls autoPlay src={Url}></video>
                </div>
                {
                  <div className='icon'>
                    <span>
                      &nbsp;&nbsp;
                      <LikeOutlined />
                      {liked.likedCount}
                    </span>
                    <span>
                      <FolderAddOutlined />
                      {liked.commentCount}
                    </span>
                    <span>
                      <ShareAltOutlined />
                      {liked.shareCount}
                    </span>
                  </div>
                }
                <div>
                  <Comments hotComments={oridnaryComments} />
                </div>
              </div>
            )}
          </RecommendLeft>
          <RecommendRight>
            <div className='describetion'>
              {vType === 0
                ? videoDescribtion && (
                    <div>
                      <h2>视频详情：</h2>
                      <br /> <p>{videoDescribtion}</p>
                    </div>
                  )
                : description && (
                    <div>
                      <h2>视频详情：</h2>
                      <br /> <p>{description}</p>
                    </div>
                  )}
            </div>
            {vType === 0 ? (
              <div>
                <h2 style={{ marginLeft: '10px' }}>相似视频</h2>
                <SimiMv simiMv={simiMv} simiMvClick={simiMvClick} />
              </div>
            ) : (
              <div>
                <h2 style={{ marginLeft: '10px' }}>相似视频</h2>
                <SimiVideo
                  simiVide={simiVideo}
                  simiVideoClick={simiVideoClick}
                />
              </div>
            )}
          </RecommendRight>
        </Content>
      </RecommendWraper>
    )
  );
});
