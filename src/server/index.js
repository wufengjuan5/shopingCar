import axios from 'axios'

let instace = axios.create({
  baseURL: 'http://localhost:5001/api'
})

// 获取主题的信息

export function getshoplist(data = {}) {
  let defaults = {
    page_size: 20,
    page: 1,
    id: 62,
    sort:"sort"
  }
  Object.assign(defaults, data);
  return instace.get('shop_list', {params:defaults});
}

// 获取详情 根据id
export function getshopDetail(params={}) {
  let defaults={
    ids:''  //
  }
  Object.assign(defaults,params)
  return instace.get(`/shop_skus`,{params:defaults});
}

export default {
  install(vue){
    vue.prototype.$api = {
      getshoplist,
      getshopDetail
    }
  }
}
