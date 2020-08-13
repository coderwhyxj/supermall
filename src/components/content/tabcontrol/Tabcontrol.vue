<template>
  <div class="Tabcontrol">
       <div v-for="(item,index) in tabcontrolitem" :key="index" 
       :class="{isactive:currentindex==index}" @click="controlclick(index)">
           <span>{{item}}</span>
       </div>
  </div>
</template>

<script>
export default {
  name:"Tabcontrol",
  data() {
      return {
          currentindex:0
      }
  },
  methods: {
    controlclick(index){
        this.currentindex=index;
        this.$emit("tabclick",index)
    }
  },
  props:{
    tabcontrolitem:{
        type:Array,
        default(){
            return []
        }
    }
  }
};
</script>
<style  scoped>
    .Tabcontrol{
        display: flex;
        text-align: center;
    }
    .Tabcontrol div{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .Tabcontrol div span{
        padding-bottom: 5px;
    }
    .isactive{
        color: red;
    }
    .isactive span{
        border-bottom: 2px solid red;
    }

</style>