<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter" ></Footer>    <!-- 通过设置meta给需要隐藏Footer的路由组件添加属性-->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  }
};
</script>

<style lang="less" scoped>
  
</style>


