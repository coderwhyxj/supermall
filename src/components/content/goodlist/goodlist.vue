<template>
  <div class="goodlist">
    <goodslistitem v-for="(item,index) in goodslist" :itemlist='item' :key=index>
    </goodslistitem>
  </div>
</template>

<script>
     import goodslistitem from '@/components/content/goodlist/goodslistitem'
export default {
  name:"goodlist",
  components:{
    goodslistitem
  },
  props:{
    goodslist:{
        type:Array,
        default(){
            return []
        }
    }
  },
  mounted() {
   // console.log(this.goodslist)
  }
};
</script>
<style  scoped>
  .goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>