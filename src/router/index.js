// 一级路由
import Discover from '../pages/discover'
import React from 'react'
import Mine from '../pages/mine'
import Fridend from '../pages/fridend'
import { Redirect } from 'react-router-dom';
import Search from '@/pages/search'
// 二级路由
import Recommend from '@/pages/discover/c-pages/recommend';
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist';
import Djradio from '@/pages/discover/c-pages/djradio'
import Ranking from '@/pages/discover/c-pages/ranking'
import Song from '@/pages/discover/c-pages/songs'
import MusicInfoPage from '@/pages/player/music-info-page'
import AlbumInfo from '@/pages/discover/c-pages/recommend/c-components/album-info'
import NewAlbumInfoPage from '@/pages/discover/c-pages/recommend/c-components/new-album/new-album-info-page'
import SettleSingerInfoPage from '@/pages/discover/c-pages/recommend/c-components/settle-singer/settle-singer-info-page'
import VideInfoPage from '@/pages/search/c-components/video/vide-info-page'
import DjRadioInfoPage from '@/pages/discover/c-pages/djradio/diradio-info-page'
const routes = [
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to='/discover'/>
        )
    },
    {
        path:'/discover',
        component:Discover,
        routes:[
            {
                path:'/discover',
                exact:true,
                render:()=>(
                    <Redirect to='/discover/recommend'/>
                )
            },
            {
                path:'/discover/recommend',
                component:Recommend
            },
            {
                path:'/discover/album',
                component:Album
            },
            {
                path:'/discover/artist',
                component:Artist
            },
            {
                path:'/discover/songs',
                component:Song
            },
            {
                path:'/discover/djradio',
                component:Djradio
            },
            {
                path:'/discover/ranking',
                component:Ranking
            },
            {
                path:'/discover/musicInfoPage',
                component:MusicInfoPage
            },
            {
                path:'/discover/albumInfo',
                component:AlbumInfo
            },
            {
                path:'/discover/newAlibumInfoPage',
                component:NewAlbumInfoPage
            },
            {
                path:'/discover/settleSingerInfoPage',
                component:SettleSingerInfoPage
            },
            {
                path:'/discover/viedeoinfopage',
                component:VideInfoPage
            },
            {
                path:'/discover/diradioinfopage',
                component:DjRadioInfoPage
            }
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/friend',
        component:Fridend
    },
    {
        path:'/search',
        component:Search
    }
];
export default routes;
