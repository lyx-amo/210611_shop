import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'


Vue.use(VueRouter)

//重写push 和replace方法
//在3.1.0版本更新后,push返回一个promise
const originalPush = VueRouter.prototype.push
//保存原先的push方法
const originalReplace = VueRouter.prototype.replace
//重写push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject){//当传了中断promise链 调用原本的push方法,把this指向调用push方法的router
    return originalPush.call(this, location, onResolve, onReject)
  } 
  return originalPush.call(this, location).catch((err) => { // 当没传回调函数,会给原本的push调用catch来捕获错误
    if (VueRouter.isNavigationFailure(err)) {//如果出现了NavigationFailure导航失败,重复点击,则返回err,得到一个成功的promise
      // resolve err
      return err
    }
    // rethrow error //当发生其他错误时,抛出错误或者返回失败的promise值
    return Promise.reject(err)
  })
}

VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject){
        return originalReplace.call(this, location, onResolve, onReject)
    }
    return originalReplace.call(this, location).catch((err) => {
      if (VueRouter.isNavigationFailure(err)) {
        // resolve err
        return err
      }
      // rethrow error
      return Promise.reject(err)
    })
  }
//编程式导航不会有导航重复错误 因为默认传入了一个成功的空回调
export default new VueRouter({
    mode:'history',
    routes
})