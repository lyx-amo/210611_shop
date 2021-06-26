import {
    reqCategoryList,
    reqBannerList,
    reqfloors,
    reqRecommends,
    reqRank,
    reqLike
} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floors:[],
    recommends:[],
    rankList:[],
    likeList:[]
}
const mutations = {
    RECEIVE_CATEGORY_LIST(state,list){
        state.categoryList = list
    },
    RECEIVE_BANNER_LIST(state,banners){
        state.bannerList = banners
    },
    RECEIVE_FLOOS(state,floors){
        state.floors = floors
    },
    RECEIVE_RECOMMENDS(state,recommends){
        state.recommends = recommends
    },
    RECEIVE_RANK(state,rank){
        state.rankList = rank
    },
    RECEIVE_LIKE(state,like){
        state.likeList = like
    }

}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()   
        if(result.code === 200){
            const list  =  result.data.splice(0,15)
            commit('RECEIVE_CATEGORY_LIST',list)
        }        
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
            const banners = result.data
            commit('RECEIVE_BANNER_LIST',banners)
        }
    },
    async getfloors({commit}){
        const result = await reqfloors()
        if(result.code === 200){
            commit('RECEIVE_FLOOS',result.data)
        }
    },
    async getrecommends({commit}){
        const result = await reqRecommends()
        if(result.code === 200){
            commit('RECEIVE_RECOMMENDS',result.data)
        }
    },
    async getRankList({commit}){
        const result = await reqRank()
        if(result.code === 200){
            commit('RECEIVE_RANK',result.data)
        }
    },
    async getLikeList({commit}){
        const result = await reqLike()
        if(result.code === 200){
            commit('RECEIVE_LIKE',result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}