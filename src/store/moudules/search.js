import {reqSearch} from '@/api'

const state = {
    searchs:{},
} 
const mutations = {
    RECEIVE_SEARCH(state,list){
        state.searchs = list
    }
} 
const actions = {
    async getSearch({commit},searchParams){
        //清除不必要的数据,操作对象操作的是引用地址,需要浅拷贝该对象,不影响其他组件的数据,只删除了属性名,未影响到数组
        searchParams = {...searchParams}

        Object.keys(searchParams).forEach(key=>{
            if(searchParams[key]==='' || Array.isArray(searchParams[key]) &&searchParams[key].length === 0){
                delete searchParams[key]
            }
        })
        const result = await reqSearch(searchParams)//请求体参数
        if(result.code === 200){
            commit('RECEIVE_SEARCH',result.data)
        }
    }
} 
const getters = {
    goodsList(state){
        return state.searchs.goodsList || []
    },
    trademarkList(state){
        return state.searchs.trademarkList || []
    },
    attrsList(state){
        return state.searchs.attrsList || []
    },
    total(state){
        return state.searchs.total || 0
    }
} 
    

export default {
    state,
    mutations,
    actions,
    getters
}