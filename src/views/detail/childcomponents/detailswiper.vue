<template>
    <swiper ref="swiper" v-if="topimgs.length"  class="swiper1">
      <swiper-item v-for="(item, index) in topimgs" :key="index">
       
          <img :src="item" alt="" >
      
      </swiper-item>
    </swiper>
  </template>

<script>
     import {Swiper, SwiperItem} from 'common/swiper'
export default {
  name:"detailswiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topimgs:{
        type:Array,
        default(){
            return []
        }
    } 

  }
};
</script>
<style  scoped>
 .swiper1{
    width: 100%;
    height: 300px;
    overflow: hidden;
} 

</style>