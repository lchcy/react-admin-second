## 1.LeftNav组件
   1）.使用antd组件
      Menu/Menu.Item/SubMenu

   2）.使用react-router
      withRouter()：包装非路由组件，给其传入history/location/match属性
      history：push()/replace()/goBack()
      location：pathname属性
      match：params属性

   3）.componentWillMount与componentDidMount的比较
      componentWillMount：在第一次render()前调用一次，为第一次render()准备数据同步
      componentDidMount:在第一次render()之后调用一次，启动同步任务，后面异步更新状态重新render

   4）.根据动态生成Item和SubMenu的数组
      map()+递归：多级菜单列表
      reduce()+递归：多级菜单列表

   5）.刷新时如何选中对应的菜单项？
         selectedKey是当前请求的path
      刷新子菜单路径时，自动打开子菜单列表？
         openKey是一级列表项的某个子菜单项是当前对应的菜单项

## 2. Header组件
      1）.界面静态布局
         三角形效果
      2）.获取登录用户的名称显示
         MemoryUtils
      3）.当前时间
         循环定时器 每隔1s更新当前时间状态
         格式化指定时间：dataUtils
      4).天气预报
         使用jsonp库发jsonp请求百度天气预报接口
      5）.抽取通用的类链接按钮组件
         通过...透传所有的属性：<button {...props}></button>
         组件标签的多有子节点都会成为组件的children属性
         
## 20200512内容
      对代理的理解
         1.webpack-dev-server能够去配置代理
           “http-proxy-middleware”去实现请求http请求代理的中心键
         2.在前台应用端运行，只能在开发时使用
         3.作用
            解决开发时的ajax请求跨域问题
               a.监视并拦截请求
               b.转发请求
         4.配置代理
            告诉代理一些信息：转发的目标地址

## antd table中添加合并行(在pages->role中)

   1.<table/>中绑定pagination属性，然后引用其中onChange属性，传入page和pageSize值，无法打印出来
   2添加一个空白行，不知道怎么去获取所需要的列表值总和