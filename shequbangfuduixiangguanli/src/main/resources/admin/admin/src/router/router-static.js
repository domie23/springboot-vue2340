import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import bangfuduixiang from '@/views/modules/bangfuduixiang/list'
    import bangfushenqing from '@/views/modules/bangfushenqing/list'
    import dangan from '@/views/modules/dangan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import juankuanxiangm from '@/views/modules/juankuanxiangm/list'
    import juankuanxiangmLiuyan from '@/views/modules/juankuanxiangmLiuyan/list'
    import news from '@/views/modules/news/list'
    import wupin from '@/views/modules/wupin/list'
    import wupinCollection from '@/views/modules/wupinCollection/list'
    import wupinLiuyan from '@/views/modules/wupinLiuyan/list'
    import wupinYuyue from '@/views/modules/wupinYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhiyuanzhe from '@/views/modules/zhiyuanzhe/list'
    import config from '@/views/modules/config/list'
    import dictionaryBangfuduixiang from '@/views/modules/dictionaryBangfuduixiang/list'
    import dictionaryBangfushenqingYesno from '@/views/modules/dictionaryBangfushenqingYesno/list'
    import dictionaryDangan from '@/views/modules/dictionaryDangan/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJuankuanxiangm from '@/views/modules/dictionaryJuankuanxiangm/list'
    import dictionaryJuankuanxiangmYesno from '@/views/modules/dictionaryJuankuanxiangmYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWupin from '@/views/modules/dictionaryWupin/list'
    import dictionaryWupinCollection from '@/views/modules/dictionaryWupinCollection/list'
    import dictionaryWupinYuyueYesno from '@/views/modules/dictionaryWupinYuyueYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBangfuduixiang',
        name: '帮扶类型',
        component: dictionaryBangfuduixiang
    }
    ,{
        path: '/dictionaryBangfushenqingYesno',
        name: '申请状态',
        component: dictionaryBangfushenqingYesno
    }
    ,{
        path: '/dictionaryDangan',
        name: '档案类型',
        component: dictionaryDangan
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJuankuanxiangm',
        name: '项目类型',
        component: dictionaryJuankuanxiangm
    }
    ,{
        path: '/dictionaryJuankuanxiangmYesno',
        name: '项目审核',
        component: dictionaryJuankuanxiangmYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWupin',
        name: '物品类型',
        component: dictionaryWupin
    }
    ,{
        path: '/dictionaryWupinCollection',
        name: '收藏表类型',
        component: dictionaryWupinCollection
    }
    ,{
        path: '/dictionaryWupinYuyueYesno',
        name: '报名状态',
        component: dictionaryWupinYuyueYesno
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/bangfuduixiang',
        name: '帮扶对象',
        component: bangfuduixiang
      }
    ,{
        path: '/bangfushenqing',
        name: '帮扶申请',
        component: bangfushenqing
      }
    ,{
        path: '/dangan',
        name: '档案',
        component: dangan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/juankuanxiangm',
        name: '捐款项目',
        component: juankuanxiangm
      }
    ,{
        path: '/juankuanxiangmLiuyan',
        name: '捐款项目留言',
        component: juankuanxiangmLiuyan
      }
    ,{
        path: '/news',
        name: '社区公告',
        component: news
      }
    ,{
        path: '/wupin',
        name: '物品交换',
        component: wupin
      }
    ,{
        path: '/wupinCollection',
        name: '物品收藏',
        component: wupinCollection
      }
    ,{
        path: '/wupinLiuyan',
        name: '物品留言',
        component: wupinLiuyan
      }
    ,{
        path: '/wupinYuyue',
        name: '申请交换',
        component: wupinYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhiyuanzhe',
        name: '志愿者',
        component: zhiyuanzhe
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
