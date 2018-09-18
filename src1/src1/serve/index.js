import axios from 'axios'
let instace=axios.create({
    baseURL:`https://cnodejs.org/api/v1`
})
export function getTopics(data={}){
    let defaults={
        page:1,
        tab:'',
        limit:10
    }
    Object.assign(defaults,data)
    console.log({defaults})
    return instace.get('/topics',{params:defaults})
}
export default {
    install(Vue){
      Vue.prototype.$api={
        getTopics,
      }
    }
  }