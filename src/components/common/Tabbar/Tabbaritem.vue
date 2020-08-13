<template>
  <div class="Tabbaritem" @click='itemclick'>
        <div class="item-icon" v-if='!isshow'>
             <slot name='icon' ></slot>
        </div>
        <div class="item-icon-active" v-else='isshow'>
             <slot name='active-icon' ></slot>
        </div>
        <div class="item-text" :class="{itemactive:isshow}">
            <slot name='text' ></slot>
        </div>
  </div>
</template>

<script>
export default {
  name:"Tabbaritem",
  data() {
      return {
         // isshow:true
      }
  },
  computed: {
      isshow(){
        return this.$route.path.indexOf(this.link)!==-1;  
      }
  },
  props:{
        link:String
  },
  methods: {
    itemclick(){
    this.$router.replace(this.link)
    }   
  }
};


</script>
<style  scoped>
    .Tabbaritem{
        flex:1;
        text-align: center;

    }

    .item-icon img, .item-icon-active img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;

    }

    .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
.itemactive{
    color: red;
}
</style>