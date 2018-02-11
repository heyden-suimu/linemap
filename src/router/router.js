import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const device = r => require.ensure([], () => r(require('../page/grapher/device')), 'device')
const vedio = r => require.ensure([], () => r(require('../page/grapher/vedio')), 'vedio')
const devStatus = r => require.ensure([], () => r(require('../page/grapher/devStatus')), 'devStatus')
const addDevice = r => require.ensure([], () => r(require('../page/grapher/addDevice')), 'addDevice')
const report = r => require.ensure([], () => r(require('../page/grapher/report')), 'report')
const userMag = r => require.ensure([], () => r(require('../page/grapher/userMag')), 'userMag')
const editUser = r => require.ensure([], () => r(require('../page/grapher/editUser')), 'editUser')
const setPram = r => require.ensure([], () => r(require('../page/grapher/setPram')), 'setPram')
const notFound = r => require.ensure([], () => r(require('../page/notFound')), 'notFound')
const notPro = r => require.ensure([], () => r(require('../page/notPro')), 'notPro')
const warnHistory = r => require.ensure([], () => r(require('../page/grapher/warnHistory')), 'warnHistory')
const handPush = r => require.ensure([], () => r(require('../page/grapher/handPush')), 'handPush')
const handHistory = r => require.ensure([], () => r(require('../page/grapher/handHistory')), 'handHistory')
const devicePrams = r => require.ensure([], () => r(require('../page/grapher/devicePrams')), 'devicePrams')
const editDevPram = r => require.ensure([], () => r(require('../page/grapher/editDevPram')), 'editDevPram')
const lineMap = r => require.ensure([], () => r(require('../page/grapher/lineMap')), 'lineMap')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home/lineMap'
        }, {
            path: '/notFound',
            component: notFound,
        }, {
            path: '/home',
            component: home,
            children: [{
                    path: '',
                    redirect: '/home/vedio'
                }, {
                    path: '/home/device',
                    component: device
                }, {
                    path: '/home/vedio',
                    component: vedio
                }, {
                    path: '/home/devStatus',
                    component: devStatus
                }, {
                    path: '/home/addDevice',
                    component: addDevice
                },
                // {path: '/home/report',component: report},
                // {path: '/home/userMag',component: userMag},
                // {path: '/home/editUser',component: editUser}, 
                {
                    path: '/home/setPram',
                    component: setPram
                }, {
                    path: '/home/notPro',
                    component: notPro
                }, {
                    path: '/home/warnHistory',
                    component: warnHistory
                }, {
                    path: '/home/handPush',
                    component: handPush
                }, {
                    path: '/home/handHistory',
                    component: handHistory
                }, {
                    path: '/home/devicePrams', 
                    component: devicePrams
                }, {
                    path: '/home/editDevPram',
                    component: editDevPram
                }, {
                    path: '/home/lineMap',
                    component: lineMap
                },
            ]
        },
        //登陆注册页
        {
            path: '/login',
            component: login
        }, {
            path: '*',
            redirect: '/notFound',
        }
    ]
}]