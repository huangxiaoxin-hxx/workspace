- 基本的结构套路
  #app>.page
- * css 解析也是要花时间的 * 比较费时

- 浏览器有认识，
  -webkit Google 浏览器内核 手机端多以它为主
  -ms PC端，windows操作系统，内核是微软的
  text-size-adjust:100% 
  加前缀的方式，-webkit-
- 自适应， rem em   px是靠不住的
  weui: em
  100px 京东喜欢用这种
  16px  .16rem
- css考点
  -webkit-text-size-adjust: 100%; 不要去调整文字大小
  -webkit-tap-highlight-color: transparent;   取消按上去的高亮颜色
  -webkit-overflow-scrolling: touch;  让滚动更顺滑 
  html font-size: 100px;
- OO css
  .quick-login .quick-type
  stylus  嵌套
  容易冲突
  模块化，命名空间

- base64
  更小  任何一张图片都是编码
  传输更快， 完全在css中，但是它不需要发送http请求  这是性能开销的核心
  http请求数应该减少  