<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in floors" :key="floor.id"  :floor="floor"/>
    <Brand/>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
export default {
  name: '',
  mounted(){
    this.$store.dispatch('getrecommends')
    this.$store.dispatch('getfloors')
    this.$store.dispatch('getLikeList')
    this.$store.dispatch('getRankList')
  },
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  components:{
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>
  
</style>
