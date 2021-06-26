<template>
  <div class="pagination">
    <button :class="{disable:myCurrentPage===1 }" @click="setCurrentPage(myCurrentPage-1)">上一页</button>
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    
    <button class="disable" v-if="startEnd.start > 2">...</button>

    <button v-for="item in startEnd.end" :key="item" v-if="item>=startEnd.start" 
      :class="{active: item === myCurrentPage }"
      @click="setCurrentPage(item)"
      >{{item}}</button>

    <button class="disable" v-if="startEnd.end < totalPages -1">...</button>
                                               
    <button v-if="startEnd.end <totalPages" @click="setCurrentPage(totalPages)">{{totalPages}}</button>
    <button :class="{disable:myCurrentPage === totalPages}" @click="setCurrentPage(myCurrentPage + 1)">下一页</button>

    <button class="disable">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:{
    currentPage:{//当前页码
      type:Number,
      default:1 
    }, 
		total: {//所有数据的总数量
      type:Number,
      default:0
    },
		pageSize:{ //每页的最大数量
      type:Number,
      default:10
    },
		showPageNo:{//最大连续页码数
      type:Number,
      default:5,
      validator:function(value){
        return value %2 ===1 
      }
    } 
  },
  data() {
    return {
      myCurrentPage: this.currentPage //计算当前页码总数
    }
  },
  computed:{
    totalPages(){
      return  Math.ceil(this.total/this.pageSize) 
    },
    startEnd(){
      // 获取 当前页码  最大连续页码  页码总数
      const {myCurrentPage,showPageNo,totalPages} = this

      let start,end
      
      /* myCurrentPage,showPageNo,totalPages
           5            5          12       34[5]67
        根据条件计算 3
        start = 3 = 5-2   2 = Math.floor(5/2) 
        end = 7 = start + 5 -1     
      */
      start = myCurrentPage - Math.floor(showPageNo/2)
      //当前页码数小于等于1时,判断等于1
      if(start<1) start = 1
      
      end = start + showPageNo -1
       /* myCurrentPage,showPageNo,totalPages
           8            5          8       4567[8]
        根据条件计算 
        start = 4 = 8 - 5 + 1    
        end = 8 =  4 + 5 -1  
      */
      if(end>totalPages){
        end = totalPages
        start = end - showPageNo +1
        if(start < 1) start = 1 //如果最大页码为4,start小于1,=1
      }

      return {start,end}
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &.active {
        background: skyblue;
        color: white;
        cursor: not-allowed;
      }

      &.disable {
        cursor: not-allowed;
        color: #ccc;
      }
    }
  }
</style>
