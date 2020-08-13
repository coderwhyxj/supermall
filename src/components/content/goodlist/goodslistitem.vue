<template>
  <div class="goodslistitem" @click="seemore">
     <img v-lazy="this.itemlist.show.img" alt="" @load="imgload">
     <div class="box">
               <p>{{itemlist.title}}</p>
               <div class="boxbottom">
                   <span class="price">{{itemlist.price}}</span>
                   <div class="back"></div>
                   <span class="cfav">{{itemlist.cfav}}</span>
               </div>
      </div> 
  </div>
</template>

<script>
export default {
 
  name:"goodslistitem",
  props:{
    itemlist:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  computed: {
    
  },
  mounted() {
   // console.log(this.itemlist)
  },
  methods: {
    imgload(){
      //就是用vue实例发射事件
      this.$EventBus.$emit("imgload")
    },
    seemore(){
        this.$router.push({
          path:'/detail',
          query:{
            id:this.itemlist.iid
          }
        })
       
    }
  },
};
</script>
<style  scoped>
  .goodslistitem{
  width: 48%;
  font-size: 16px;
  
  }
  .goodslistitem img{
    width: 100%;
    border-radius:5px;
  }
  .box p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .price{
    color:palevioletred;
  }
  .boxbottom{
    text-align: center;
  }
  .boxbottom .back {
   display: inline-block;
    width: 14px;
    height: 14px;
    background: url("../../../assets/imgs/common/collect.svg") 0 0/14px 14px;
  }
</style>