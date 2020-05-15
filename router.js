import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages'
import About from './pages/about'
import ArticlesList from './pages/articles/list'
import ArticleDetail from './pages/articles/detail'
import ArticleEdit from './pages/articles/edit'
import ArticleAdd from './pages/articles/add'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'articles',
        path: '/:lang?/articles',
        component: ArticlesList
      },
      {
        name: 'article-add',
        path: '/:lang?/articles/add',
        component: ArticleAdd
      },
      {
        name: 'article-edit',
        path: '/:lang?/articles/edit/:id',
        component: ArticleEdit
      },
      {
        name: 'article-detail',
        path: '/:lang?/articles/:id',
        component: ArticleDetail
      },
      {
        name: 'home',
        path: '/:lang?/',
        component: Home
      }
    ]
  })
}
