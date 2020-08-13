import {request} from './request.js'

export function gethomemultidata(){
 
  return request({
      url:'/home/multidata'
  })

}


export function getgoods(type,page){
  return request({
      url:'/home/data',
      params:{
        type,
        page
      }
  })

}

