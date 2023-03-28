import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'ranking',
        },
        {
            path: '/ranking',
            component: () => import('./ranking.vue'),
        },
        {
            path: '/tactics',
            component: () => import('./tactics.vue'),
        },
    ],
})
export default router
