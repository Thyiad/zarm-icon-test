import React from 'react';
import loadable from '@loadable/component';
import SubRouteWrapper from './components/SubRouteWrapper';
import * as Init from '@/utils/getInitialProps';

const NoPermission = loadable(() => import('./pages/403/index'));
const NotFound = loadable(() => import('./pages/404/index'));
const PageError = loadable(() => import('./pages/500/index'));
const EmptyPage = loadable(() => import('./pages/empty/index'));
const DemoPage = loadable(() => import('./pages/demo/index'));

// import Login from './pages/login/index';
// import Table from './pages/table/index';
// import NotFound from './pages/404/index';
// import NoPermission from './pages/403/index';
// import PageError from './pages/500/index';
// import EmptyPage from './pages/empty/index'
// import DemoPage from './pages/demo/index';

/**
 * 系统路由：403、404等等
 */
const sysPages: RouteProps[] = [
    {
        title: '403',
        path: '/403',
        name: '403',
        exact: true,
        component: NoPermission,
    },
    {
        title: '404',
        path: '/404',
        name: '404',
        exact: true,
        component: NotFound,
    },
    {
        title: '500',
        path: '/500',
        name: '500',
        exact: true,
        component: PageError,
    },
    {
        title: '页面找不到了',
        name: '404',
        path: '/404',
        exact: true,
        component: NotFound,
    },
];

const routes: RouteProps[] = [
    ...sysPages,
    {
        title: '首页',
        name: 'home',
        path: '/',
        exact: true,
        redirect: '/demo',
    },
    {
        title: '示例页面',
        path: '/demo',
        name: 'demo',
        exact: true,
        component: DemoPage,
    },
    {
        title: '嵌套页面',
        path: '/subs',
        name: 'subs',
        exact: false,
        component: SubRouteWrapper,
        routes: [
            {
                title: '嵌套子页面1',
                name: 'child1',
                path: '/subs/child1',
                exact: true,
                component: EmptyPage,
            },
            {
                title: '嵌套子页面2',
                name: 'child2',
                path: '/subs/child2',
                exact: true,
                component: EmptyPage,
            },
        ],
    },
    {
        title: '',
        name: 'pageNotFound',
        path: '*',
        exact: true,
        redirect: '/404',
        component: NotFound,
    },
];

export default routes;
