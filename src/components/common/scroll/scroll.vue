<template>
  <div class="wrapper" ref="wrapper">
       <div class="content">
              <slot></slot>
       </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

export default {
  name:"scroll",
  data() {
      return {
          scroll:null
      }
  },
  props:{
    probeType:{
        type:Number,
        default:0
    },
    pullUpLoad:{
        type:Boolean,
        default:true
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, { 
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
   })
    //2.滚动过程派发事件,实时执行onscroll函数
    this.scroll.on('scroll', onScroll)
    const that=this;
    function onScroll(pos){
         that.$emit("posnow",pos)  
    }
   
    //3.监听上拉事件 
    this.scroll.on('pullingUp',()=>{
       this.$emit("loadmore")
    })
  },
  methods: {
      scrollto(x,y,time=300){
          this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishpullup(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
         //console.log("oo")
        this.scroll && this.scroll.refresh();
      },
      getscrollY(){
        return  this.scroll? this.scroll.y:0;
      }
  },
}
</script>
<style  scoped>
</style>