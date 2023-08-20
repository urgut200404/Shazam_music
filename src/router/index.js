import {createRouter, createWebHistory, createMemoryHistory} from "vue-router";
const router = createRouter({
    history:createWebHistory(), 
    routes:[
        {
            path:"/", 
            name:"header", 
            component:() => import("../components/headers.vue")
        },
        {
            path:"/home", 
            name:"home",
            component:() => import("../components/home.vue")
        }, 
        {
            path:"/listpages/:id", 
            name:"listpages",
            component:() => import("../components/listpages.vue")
        }, 
        {
            path:'/carusel/:id/:typeAr/:subtitle/:title/:subject/:orin', 
            name:"carusel_info", 
            component:() => import("../components/caruselinfos.vue")
        }
    ]
})

export default router;