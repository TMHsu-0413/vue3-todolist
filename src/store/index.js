import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state: {
    Locale: "高雄市",
    temprature: ""
  },
  mutations: {
    modify_temprature(state,info) {
      state.temprature = info.temp
    },
    changeLocale(state, Value) {
      state.Locale = Value
    }
  },
  actions: {
    api_temp({ commit }) {
      axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.VUE_APP_MY_API_KEY}&format=JSON&elementName=MinT,MaxT`).then(response => {
        const Find = response.data.records.location.find((response) => {
          return response.locationName ==this.state.Locale
        })
        var info = {}
        if(Find == null){
          info = {"temp":"無此區域"}
        }
        else {
          const minT = Find.weatherElement[0].time[0].parameter.parameterName //最低氣溫
          const maxT = Find.weatherElement[1].time[0].parameter.parameterName //最高氣溫
          info = {"temp": minT + "~" + maxT}
        }
        commit('modify_temprature',info)
      })
    }
  },
  modules: {},
});
