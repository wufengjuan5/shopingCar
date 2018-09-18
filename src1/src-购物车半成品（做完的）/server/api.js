import axios from 'axios'
let data = {
  data: {
    "data": {
      "success": true,
      "list": [
        {
          "skuId": "2154000002",
          "title": "米家小白智能摄像机 白色",
          "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        },
        {
          "skuId": "215400012",
          "title": "小米6 全网通版 4GB内存 亮蓝色",
          "image": "https://i1.mifile.cn/a1/pms_1510033696.15216628!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        },
        {
          "skuId": "215800013",
          "title": "小米7",
          "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
          "price": "399",
          "buyNumber": 3,
          "buylimit": 10
        }
      ]
    }
  }
}
//axios.defaults.baseURL = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/'
export function getShopList(params) {
  return axios.get('', { params}).then(() => {
    return data;
  })
}

/**
 * 1. 请求的接口是在某个组件中使用的，只需要放在组件中请求就可以了
 *  mounted
 * 2. 多个组件都是用这个接口，可以放在vuex中的actions中
 */