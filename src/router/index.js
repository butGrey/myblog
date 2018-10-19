import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/pages/HomeView'
import ArticleView from '@/pages/ArticleView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articleView/:id',
      name: 'articleView',
      component: ArticleView
    }    
      // redirect:"/articleslist",//重定向
      // children:[
      // // {
      // //   path: '/articleslist',
      // //   name: 'articlelist',
      // //   component: ArticleList
      // // }]
  ]
})
