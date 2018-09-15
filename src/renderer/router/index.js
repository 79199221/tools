import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import application from '@/pages/application'
import website from '@/pages/website'
import folder from '@/pages/folder'
import file from '@/pages/file'
import test from '@/pages/test'

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index
    }, {
        path: '/application',
        name: '/application',
        component: application
    }, {
        path: '/website',
        name: '/website',
        component: website
    }, {
        path: '/folder',
        name: '/folder',
        component: folder
    }, {
        path: '/file',
        name: '/file',
        component: file
    }, {
        path: '/test',
        name: 'test',
        component: require('@/pages/test')
    }
]
export default new Router({
  routes
})
