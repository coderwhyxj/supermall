<template>
  <div class="detailnavbar">
    <Navbar>
         <div slot="left" class="leftitem" @click="goback">
              <img src="@/assets/imgs/common/back.svg" >
         </div>
         <div slot="mid" class="miditem" >
             <div v-for="(item,index) in titles" 
             class="miditemmore"
             :class="{isactive:currentindex==index}"
             @click="miditemclick(index)">{{item}}</div>
         </div>
    </Navbar>
  </div>
</template>

<script>
    import Navbar from '@/components/common/navbar/Navbar'
export default {
  name:"detailnavbar",
  components:{
    Navbar
  },
  data() {
      return {
          titles:["商品","参数","评论","推荐"],
          currentindex:0
      }
  },
  methods: {
    miditemclick(index){
           this.currentindex=index;
          // console.log(this.currentindex)
         this.$emit("titleclick",index) 
    },
    goback(){
        this.$router.back()
    }
  }
};
</script>
<style  scoped>
    .detailnavbar{
        position: relative;
        z-index: 101;
    }
    .miditem{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .miditemmore{
        flex: 1;
        font-size: 14px;  
    }
    .isactive{
        color: black;
    }
    .leftitem{
        position: relative;
        height: 44px;
    }
    .leftitem img{
        position: absolute;
        left: 50%;
        margin-left: -11px;
        top: 50%;
        margin-top: -11px;
    }


</style>