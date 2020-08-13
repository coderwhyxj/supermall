<template>
  <div class="detailcloseinfo" v-if="Object.keys(clouse).length!==0">
    <div class="close-desc">
        <div class="close-start"></div>
        <div  class="close-mid">{{clouse.desc}}</div>
        <div class="float-father">
          <div class="close-end"></div>
        </div>
    </div>    
    <div v-for="item in clouse.detailImage" class="aaa">
         <div>{{item.key}}</div>
         <div class="imglist" v-for="itemimg in item.list">
               <img :src="itemimg" alt="" @load="getload">
         </div>
    </div>  
    
  </div>
</template>

<script>
export default {
  name:"detailcloseinfo",
  props:{
    clouse:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  methods: {
    getload(){
      this.$emit("detailimgload")
    }
  },
};
</script>
<style  scoped>
   .close-desc{
       margin: 10px;
       font-size: 12px;
       text-indent: 2em;
       position: relative;
   } 
   .close-start,.close-end{
      margin: 10px 0;
      width: 90px;
      height: 1px;
      background-color: black;
   }
   .close-start::before{
     content:"";
     display: block;
     width: 5px;
     height: 5px;
     background-color: black;
     position: absolute;
     top: -5px;
   }
   .close-end::after{
     content:"";
     display: block;
     width: 5px;
     height: 5px;
     background-color: black;
     position: absolute;
     top:5px;
   }

  .close-end{
   float:right
  }
  .float-father{
      overflow: hidden;
      position: relative;
  }
  .imglist img{
    width: 100%;
  }

</style>