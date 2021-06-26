import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'



export default [
    {
        path:'/',
        component:Home,
    },
    {
        name:'search',
        path:'/search/:keyword?', //正则匹配 0/1次 
        component:Search,
        props(route){
            return {
                keyword:route.params.keyword,
            }
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    
]