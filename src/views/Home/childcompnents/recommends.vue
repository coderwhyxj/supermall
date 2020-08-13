<template>
  <div class="recommends">
       <div v-for="(item,index) in recommends" :key="index" class='recommends-items'>
             <a :href="item.link">
                 <img :src="item.image" >
             </a>
             <div class="recommend-title">{{item.title}}</div>
       </div>
  </div>
</template>

<script>
export default {
  name:"recommends",
  props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    }
  }
  
};
</script>
<style  scoped>
    .recommends{
        width: 100%;
        display: flex;
        text-align: center;
        padding-bottom: 25px;
        padding-top: 10px;
        border-bottom: 8px solid #eee;
    }
    .recommends-items{
        flex: 1;
    }
    .recommends-items img{
       width: 80px;
       height: 80px;
     
    }

</style>