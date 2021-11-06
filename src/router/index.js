import Discover from '../pages/discover'
import Mine from '../pages/mine'
import Fridend from '../pages/fridend'
const routes = [
    {
        path:'/',
        exact:true,
        component:Discover
    },
    {
        path:'/discover',
        exact:true,
        component:Discover
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
