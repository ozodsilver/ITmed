
import { createRouter, createWebHashHistory } from "vue-router";
import Auth from '../components/Authorization.vue'
import Home from '../components/HomeComp.vue'
import EditUser from '../components/EditUser.vue'
import AddInfo from '../components/AddInfo.vue'
import Nevrologiya from '../components/categories/Nevrologiya.vue'
// bo'limlar
import First from '../components/categories/First.vue'
import Second from  '../components/categories/Second.vue'
import Third from '../components/categories/Third.vue'
const routes = [
    {
        path:'/',
        name:'auth',
        component:Auth

    }, 
    {
        path:'/Home',
        name:'home',
        component:Home
    }, 
    {
        path:'/first',
        name:'first',
        component:First
    },
    {
        path:'/second',
        name:'second',
        component: Second
    },

    {
        path:'/third',
        name:'third',
        component: Third
    },

    {
        path:'/nevrologiya',
        name:'nevrologiya',
        component: Nevrologiya
    },







    // edit va addInfo
    {
        path:'/edit/:id',
        name:'edit',
        component:EditUser,
        props:true

    },
    {
        path:'/addInfo',
        name:'addInfo',
        component:AddInfo
    }
]


const router = createRouter({
    routes,
    history: createWebHashHistory(),
    

})




export default router;