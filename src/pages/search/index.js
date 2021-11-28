import React, { memo, useState, useEffect } from 'react';
import { Input, Tabs, Pagination } from 'antd';

import SingerSong from './c-components/sing-songs';
import Singer from './c-components/singer';
import Album from './c-components/album';
import Video from './c-components/video';
import SongMenu from './c-components/song-menu';

import { getSearchData } from './getData';

import { RecommendWraper, Content, RecommendLeft } from './style';

export default memo(function Search(props) {
  const [searchKeywords = props.location.state, setSearchKeywords] = useState();
  const [type, setType] = useState(1);

  const { Search } = Input;
  const { TabPane } = Tabs;

  const [singSongs = [], setSingSongs] = useState();
  const [singTotal, setSingTotal] = useState();
  const [singer, setSinger] = useState();
  const [singerTotal, setSingerTotal] = useState();
  const [album, setAlbum] = useState();
  const [albumTotal, setAlbumTotal] = useState();
  const [video, setVideo] = useState();
  const [videoTotal, setVideoTotal] = useState();
  const [songsmenu, setSongsmenu] = useState();
  const [songsmenuTotal, setSongsmenuTotal] = useState();

  let [limit = 10, setLimit] = useState(10);
  let [offset = 1, setOffset] = useState(1);

  useEffect(() => {
    getSearchData(searchKeywords, type, limit, offset).then(res => {
      setSearchKeywords(searchKeywords);
      switch (type) {
        case 1:
          setSingSongs(res.result.songs);
          setSingTotal(res.result.songCount);
          break;
        case 100:
          setSinger(res.result.artists);
          setSingerTotal(res.result.artistCount);
          break;
        case 10:
          setAlbum(res.result.albums);
          setAlbumTotal(res.result.albumCount);
          break;
        case 1014:
          setVideo(res.result.videos);
          setVideoTotal(res.result.videoCount);
          break;
        case 1000:
          setSongsmenu(res.result.playlists);
          setSongsmenuTotal(res.result.playlistCount);
          break;
        default:
          setSingSongs(res.result.songs);
          setSingTotal(res.result.songCount);
      }
    });
  }, [searchKeywords, type, limit, offset]);

  const InputValueChange = e => {
    setSearchKeywords(e.target.value);
  };

  const TabClick = key => {
    setType(+key);
  };

  const songsonChange = e => {
    setOffset(e);
  };
  const songsonShowSizeChange = (_, e) => {
    setLimit(e);
  };
  const singeronChange = e => {
    setOffset(e);
  };
  const singeronShowSizeChange = (_, e) => {
    setLimit(e);
  };
  const albumonChange = e => {
    setOffset(e);
  };
  const albumonShowSizeChange = (_, e) => {
    setLimit(e);
  };
  const videoonChange = e => {
    setOffset(e);
  };
  const videoonShowSizeChange = (_, e) => {
    setLimit(e);
  };
  const songsmenuonChange = e => {
    setOffset(e);
  };
  const songsmenuoonShowSizeChange = (_, e) => {
    setLimit(e);
  };
  return (
    <RecommendWraper className='wrap-v2'>
      <Content>
        <RecommendLeft>
          <div className='topSearch'>
            <div className='search'>
              <Search
                placeholder='搜索歌曲/视频/歌手/专辑/歌单'
                defaultValue={searchKeywords}
                onPressEnter={InputValueChange}
                allowClear
                style={{ width: 500 }}
              />
            </div>
          </div>
          <div className='nav'>
            <Tabs defaultActiveKey='1' centered onTabClick={TabClick}>
              <TabPane tab='单曲' key='1'>
                <SingerSong
                  songs={singSongs}
                  searchKeywords={searchKeywords}
                  offset={offset}
                  limit={limit}
                  total={singTotal}
                />
                <div className='Pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={singTotal}
                    onChange={songsonChange}
                    onShowSizeChange={songsonShowSizeChange}
                  />
                </div>
              </TabPane>
              <TabPane tab='歌手' key='100'>
                <Singer
                  singer={singer}
                  searchKeywords={searchKeywords}
                  total={singerTotal}
                />
                <div className='Pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={singerTotal}
                    onChange={singeronChange}
                    onShowSizeChange={singeronShowSizeChange}
                  />
                </div>
              </TabPane>
              <TabPane tab='专辑' key='10'>
                <Album
                  album={album}
                  searchKeywords={searchKeywords}
                  total={albumTotal}
                  offset={offset}
                />
                <div className='Pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={albumTotal}
                    onChange={albumonChange}
                    onShowSizeChange={albumonShowSizeChange}
                  />
                </div>
              </TabPane>
              <TabPane tab='视频' key='1014'>
                <Video
                  video={video}
                  searchKeywords={searchKeywords}
                  total={videoTotal}
                />
                <div className='Pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={videoTotal}
                    onChange={videoonChange}
                    onShowSizeChange={videoonShowSizeChange}
                  />
                </div>
              </TabPane>
              <TabPane tab='歌单' key='1000'>
                <SongMenu
                  songsmenu={songsmenu}
                  searchKeywords={searchKeywords}
                  total={songsmenuTotal}
                />
                <div className='Pagination'>
                  <Pagination
                    defaultCurrent={1}
                    total={songsmenuTotal}
                    onChange={songsmenuonChange}
                    onShowSizeChange={songsmenuoonShowSizeChange}
                  />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </RecommendLeft>
      </Content>
    </RecommendWraper>
  );
});
