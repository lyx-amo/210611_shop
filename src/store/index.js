import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/moudules/home'
import search from '@/store/moudules/search'

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search
    }
})