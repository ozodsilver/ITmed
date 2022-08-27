
import { createRouter, createWebHashHistory } from "vue-router";
import Auth from '../components/Authorization.vue'
import Home from '../components/HomeComp.vue'
import First from '../components/categories/First.vue'
import EditUser from '../components/EditUser.vue'
import AddInfo from '../components/AddInfo.vue'
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