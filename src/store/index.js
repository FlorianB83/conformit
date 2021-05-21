import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

import comments from './modules/comments'
import employees from './modules/employees'
import events from './modules/events'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const store =  new Vuex.Store({
  modules: {
    comments,
    employees,
    events,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [] // set logger only for development
})

export default store