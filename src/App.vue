
<template>
  <div id="app">
    <div>111</div>
         <keep-alive  exclude="detail"> 
              <router-view></router-view>
         </keep-alive>  
         <Tabbar></Tabbar>
  </div>
</template>

<script>
  import  Tabbar from '@/components/common/Tabbar/Tabbar'
  export default {
  name:'App',
  components:{
    Tabbar
  }
  }

</script>

<style>
 @import "assets/css/base.css";
</style>
