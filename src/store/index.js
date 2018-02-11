import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	login: null
}

export default new Vuex.Store({
	state,
})