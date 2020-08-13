<template>
  <div class="Tabbar">
     <Tabbaritem link='/home'>
             <img src="@/assets/imgs/tabbar/home.svg" slot='icon'>
             <img src="@/assets/imgs/tabbar/home_active.svg" slot='active-icon'>
             <div slot="text">首页</div>
     </Tabbaritem>
     <Tabbaritem link='/category'>
            <img src="@/assets/imgs/tabbar/category.svg" slot='icon'>
            <img src="@/assets/imgs/tabbar/category_active.svg" slot='active-icon'>
            <div slot="text">分类</div>
     </Tabbaritem>
     <Tabbaritem link='/cart'>
            <img src="@/assets/imgs/tabbar/cart.svg" slot='icon'>
            <img src="@/assets/imgs/tabbar/cart_active.svg" slot='active-icon'>
            <div slot="text">购物车</div>
     </Tabbaritem>
     <Tabbaritem link='/profile'>
             <img src="@/assets/imgs/tabbar/profile.svg" slot='icon'>
             <img src="@/assets/imgs/tabbar/profile_active.svg" slot='active-icon'>
             <div slot="text">我的</div>
     </Tabbaritem>
  </div>
</template>

<script>
  import Tabbaritem from '@/components/common/Tabbar/Tabbaritem'
export default {
  name:"Tabbar",
  components:{
    Tabbaritem
  }
};
</script>



<style  scoped>
.Tabbar{
 /* 本身的样式 */
 background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    /* 定位相关 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 利用flex进行布局 */
    display: flex;
    text-align: center;
}
    
</style>