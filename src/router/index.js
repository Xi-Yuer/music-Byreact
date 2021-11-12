// 一级路由
import Discover from '../pages/discover'
import React from 'react'
import Mine from '../pages/mine'
import Fridend from '../pages/fridend'
import { Redirect } from 'react-router-dom';
// 二级路由
import Recommend from '@/pages/discover/c-pages/recommend';
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist';
import Djradio from '@/pages/discover/c-pages/djradio'
import Ranking from '@/pages/discover/c-pages/ranking'
import Song from '@/pages/discover/c-pages/songs'
import MusicInfoPage from '@/pages/player/music-info-page'
import AlbumInfo from '@/pages/discover/c-pages/recommend/c-components/album-info'
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
    }
];
export default routes;
