import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '幻灵战歌',
      component: ()=> import('@/views/Hlzg.vue')
    },

    // 文章数据
    {
      path: '/article/news/1',
      component: ()=> import('@/views/Article/Article1.vue')
    },
    {
      path: '/article/news/2',
      component: ()=> import('@/views/Article/Article2.vue')
    },
    {
      path: '/article/news/3',
      component: ()=> import('@/views/Article/Article3.vue')
    },
    {
      path: '/article/news/4',
      component: ()=> import('@/views/Article/Article4.vue')
    },
    {
      path: '/article/news/5',
      component: ()=> import('@/views/Article/Article5.vue')
    },
    {
      path: '/article/news/6',
      component: ()=> import('@/views/Article/Article6.vue')
    },
    {
      path: '/article/news/7',
      component: ()=> import('@/views/Article/Article7.vue')
    },
    {
      path: '/article/news/8',
      component: ()=> import('@/views/Article/Article8.vue')
    },
  ]
})
