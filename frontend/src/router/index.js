import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import TalkToAgent from '../page/TalkToAgent.vue'
import ScheduleCall from '../page/ScheduleCall.vue'
import ScheduleSuccess from '../page/ScheduleSuccess.vue'
import Chat from '../page/Chat.vue'
import Issue from '../page/Issue.vue'
import Imageshare from '../page/Imageshare.vue'
import Address from '../page/Address.vue'
import Comparsion from '../page/Comparsion.vue'
import Repair from '../page/Repair.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/talk-to-agent',
            name: 'talk-to-agent',
            component: TalkToAgent,
        },
        {
            path: '/schedule-call',
            name: 'schedule-call',
            component: ScheduleCall,
        },
        {
            path:'/schedulingSuccess',
            name:'schedule-success',
            component:ScheduleSuccess
        },
        {
            path:'/chat',
            name:'chat',
            component:Chat
        },
        {
            path:'/issue',
            name:'issue',
            component:Issue
        },
        {
            path:'/image',
            name:'imageShare',
            component:Imageshare
        },
        {
            path:'/address',
            name:'address',
            component:Address
        },
        {
            path:'/comparision',
            name:'compairision',
            component:Comparsion
        },
        {
            path:'/repair',
            name:'repair',
            component: Repair
        }
    ],
})

export default router
