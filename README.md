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
   1.使用forEach循环遍历：因为forEach不会返回新的数组
   2.用arr.unshift添加一条合并数组


## 20200514内容
   ## 1.Category组件使用antd组件构建分类列表界面
      Card
      Table
      Button
      Icon
   ## 2.相关接口请求函数
      获取所有的分类列表
      添加分类
      更新分类
   ## 3.异步显示分类列表
      设计分类列表的状态：categorys
      异步获取分类列表：componentDidMount(){}
   ## 4.添加分类
      1.界面
         显示/隐藏：showStatus状态为1/0
      2.功能
         父组(Category)件得到子组件(CategoryForm)的数据(form)
         调用添加分类的借口
         重新获取分类列表
   ## 5.更新分类
      1.界面
         显示/隐藏:showStatus状态为2/0
      2.功能
         父组件(Category)得到子组件(CategoryForm)的数据(form)
         调用更新分类的借口
         重新获取分类列表
      3.重要问题
         描述：<Input>指定initialValue后，如果输入改变了，在指定新的initialValue，默认显示输入的值
         解决：在关闭modal时，进行表单项重置：form.resetFields()


   ## 6.Product整体路由
      1.配置子路由：
         ProductHome/ProductDetail/ProductAddUpdate
      2.匹配路由的逻辑:
         默认：逐层路由不完全匹配 <Route path="/product" component={ProductHome} />
         exact属性：完全匹配

   ## 7.分页实现技术(2种)
      1.前台分页
         请求获取数据：一次获取所有数据，翻页时不需要再发送请求
         请求接口：
            不需要指定请求参数：页码(pageNum)和每页数量(pageSize)
            响应数据：所有数据的数组
      2.基于后台的分页
         请求获取数据：每次获取当页的数据，翻页时要再发送请求
         请求接口：
            需要指定请求的参数：页码(pageNum)和每页数量(pageSize)
            响应数据：当前页数据的数组+总记录数(total)
      3.如何选择
         基于根据数据多少来选择
   ## 8.ProductHome组件
      1.分页显示
         界面：
         状态：products/total
         接口请求函数需要的数据pageNum，pageSize
         异步获取第一页数据显示
            调用分页的借口请求函数，获取到当前页的products和总记录数total
            更新状态：products/total
         翻页：
            绑定翻页的监听，监听回调需要得到pageNum
            异步获取指定页码的数据显示
   ## 9.Array的声明式方法的实现
         1.map()
         2.reduce()
         3.filter()
         4.find()
         5.findIndex()
         6.every()
         7 .some()
            
## 20200515内容

   ## 1.ProductHome组件
         2.搜索分页
            接口请求函数需要的数据：
               pageSize:每页的条目数
               pageNum：当前请求第几页（从1开始）
               productDesc/productName：searchName根据商品描述/名称搜索
            状态：searchType、searchName/在用户操作时搜集数据
            异步搜索显示分页列表
               如果searchName有值，调用搜索的接口请求函数获取数据并更新状态
         3.更新商品的状态
            初始显示：根据product的status属性来显示 status=1/2
            点击切换：
               绑定点击监听
               异步请求更新状态
         4.进入详情界面
            memoryUtils.product=product
            history.push('/product/detail')
         5.进入添加界面
            memoryUtils.product=product
            history.push('/product/addupdate')
         6.进入修改界面
            memoryUtils.product=product
            history.push('/product/addupdate')

   ## 2.ProductDetail组件
         1.读取商品数据：memoryUtils.product
         2.显示商品信息：<Card>/List
         3.异步显示商品所属分类的名称
   
   ## 3.ProductAddUpdate组件
         1.基本界面
         2.分类下拉列表的异步显示
         3.表单数据收集与表单验证
      
   ## 4.PictureWall
         1.antd组件
            根据实例demo改造编写
   ## 5.throttle_debounce
         了解函数节流和函数防抖
    