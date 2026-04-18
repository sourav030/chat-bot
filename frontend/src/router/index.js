import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import TalkToAgent from '../page/TalkToAgent.vue'
import ScheduleCall from '../page/ScheduleCall.vue'
import ScheduleSuccess from '../page/ScheduleSuccess.vue'
import Chat from '../page/Chat.vue'

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
        }
    ],
})

export default router
