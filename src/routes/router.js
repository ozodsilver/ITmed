
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

    {
        path:'/kardiologiya',
        name:'kardiologiya',
        component: ()=> import('../components/categories/Kardiologiya.vue')
    },

    {
        path:'/gastrointerologiya',
        name:'gastrointerologiya',
        component: ()=> import('../components/categories/Gastro.vue')
    },

    {
        path:'/chPotologiya',
        name:'chPotologiya',
        component: ()=> import('../components/categories/ChPotologiya.vue')
    },

    {
        path:'/chalaTugilganChaqaloqlarPotologiya',
        name:'chalaPotologiya',
        component: ()=> import('../components/categories/chalaPotologiya.vue')
    },

    {
        path:'/neonotalReanimatsiya',
        name:'neonotalReonimatsiya',
        component: ()=> import('../components/categories/Neonotal.vue')
    },

    {
        path:'/reanimatsiya',
        name:'reanimatsiya',
        component: ()=> import('../components/categories/Reanimatsiya.vue')
    },

    {
        path:'/ertaYoshBolalarPotologiyasi',
        name:'erta',
        component: ()=> import('../components/categories/ErtaYoshPotologiyasi.vue')
    },

    {
        path:'/otoloringologiya',
        name:'otoloringologiya',
        component: ()=> import('../components/categories/Otoloringologiya.vue')
    },

    {
        path:'/neyroxirurgiya',
        name:'neyroxirurgiya',
        component: ()=> import('../components/categories/Neyroxirurgiya.vue')
    },

    {
        path:'/YUJJ',
        name:'yujj',
        component: ()=> import('../components/categories/Yujj.vue')
    },

    {
        path:'/YiringliXirurgiya',
        name:'yiringliXirurgiya',
        component: ()=> import('../components/categories/yiringliXirurgiya.vue')
    },

    {
        path:'/ginekologiya',
        name:'ginekologiya',
        component: ()=> import('../components/categories/Ginekologiya.vue')
    },

    {
        path:'/rejaliXirurgiya',
        name:'rejali',
        component: ()=> import('../components/categories/RejaliXirurgiya.vue')
    },

    {
        path:'/urologiya',
        name:'urologiya',
        component: ()=> import('../components/categories/Urologiya.vue')
    },

    {
        path:'/neonotalXirurgiya',
        name:'NeonotalXirurgiya',
        component: ()=> import('../components/categories/NeonotalXirurgiya.vue')
    },

    {
        path:'/ortopediya-1',
        name:'ortopediya1',
        component: ()=> import('../components/categories/Ortopediya1.vue')
    },

    {
        path:'/ortopediya-2',
        name:'ortopediya2',
        component: ()=> import('../components/categories/Ortopediya2.vue')
    },

    {
        path:'/kardioxirurgiya',
        name:'kardioxirurgiya',
        component: ()=> import('../components/categories/KardioXirurgiya.vue')
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