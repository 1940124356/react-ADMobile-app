import axios from './fetch'

//获取轮播图
export function fetchImg(params){
    return axios({
        url:'/home/swiperdata',
        method:'GET',
        params
    })
}

//获取导航分类
export function fetchCatItems(params){
    return axios({
        url:'home/catitems',
        methods:'GET',
        params
    })
}

export default {
    fetchImg,
    fetchCatItems
}