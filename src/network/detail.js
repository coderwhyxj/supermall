import {request} from './request.js'
export function detail(iid){
    return request({
        url:'/detail',
        params:{
          iid:iid
        }
    })
  
  }

  export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
    }
  }

  export function getrecommend(){
     return request({
         url:'/recommend'
     })
  }
  