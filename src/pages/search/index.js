import React, { memo, useState, useCallback, useEffect } from 'react';
import { Input, Tabs } from 'antd';

import SingerSong from './c-components/sing-songs';
import Singer from './c-components/singer';
import Album from './c-components/album';
import Video from './c-components/video';
import SongMenu from './c-components/song-menu';

import { getSearchData } from './getData';

import { RecommendWraper, Content, RecommendLeft } from './style';

export default memo(function Search(props) {
  const [searchKeywords, setSearchKeywords] = useState(props.location.state);
  const [type, setType] = useState(1);

  useEffect(() => {
    setData(searchKeywords, type);
  }, [searchKeywords, type]);

  const { Search } = Input;
  const { TabPane } = Tabs;

  const [singSongs = [], setSingSongs] = useState();
  const [singer, setSinger] = useState();
  const [album, setAlbum] = useState();
  const [video, setVideo] = useState();
  const [songsmenu, setSongsmenu] = useState();

  const setData = (value, type) => {
    getSearchData(value, type).then(res => {
      setSearchKeywords(value);
      switch (type) {
        case 1:
          setSingSongs(res.result.songs);
          break;
        case 100:
          setSinger(res.result.artists);
          break;
        case 10:
          setAlbum(res.result.albums);
          break;
        case 1014:
          setVideo(res.result.videos);
          break;
        case 1000:
          setSongsmenu(res.result.playlists);
          break;
        default:
          setSingSongs(res.result.songs);
      }
    });
  };

  const SearchBtnClick = useCallback(
    value => {
      value && setData(value, type);
    },
    [type]
  );

  const TabClick = key => {
    setType(+key);
    if (searchKeywords) {
      SearchBtnClick(searchKeywords, +key);
    }
  };
  return (
    <RecommendWraper className='wrap-v2'>
      <Content>
        <RecommendLeft>
          <div className='topSearch'>
            <div className='search'>
              <Search
                placeholder='搜索歌曲/视频/歌手/专辑/歌单'
                onSearch={SearchBtnClick}
                defaultValue={searchKeywords}
                style={{ width: 500 }}
              />
            </div>
          </div>
          <div className='nav'>
            <Tabs defaultActiveKey='1' centered onTabClick={TabClick}>
              <TabPane tab='单曲' key='1'>
                <SingerSong songs={singSongs} searchKeywords={searchKeywords} />
              </TabPane>
              <TabPane tab='歌手' key='100'>
                <Singer singer={singer} searchKeywords={searchKeywords} />
              </TabPane>
              <TabPane tab='专辑' key='10'>
                <Album album={album} searchKeywords={searchKeywords} />
              </TabPane>
              <TabPane tab='MV' key='1014'>
                <Video video={video} searchKeywords={searchKeywords} />
              </TabPane>
              <TabPane tab='歌单' key='1000'>
                <SongMenu
                  songsmenu={songsmenu}
                  searchKeywords={searchKeywords}
                />
              </TabPane>
            </Tabs>
          </div>
        </RecommendLeft>
      </Content>
    </RecommendWraper>
  );
});
