<template>
  <div class="detail">
    <detailnavbar @titleclick="titleclick"></detailnavbar>
    <scroll class="content" ref="scroll">
        <detailswiper :topimgs="topimgs"></detailswiper>
        <detailbaseinfo :goods="goods"></detailbaseinfo>
        <detailshopinfo :shop="shopInfo"></detailshopinfo>
        <detailcloseinfo :clouse="clouseinfo" @detailimgload="detailimgload"></detailcloseinfo>
        <detailparams :params="itemparams" ref="params"></detailparams>
        <detailcommentinfo :commentInfo="commentsinfo" ref="comments"></detailcommentinfo>
        <!-- <goodlist :goodslist="recommends"></goodlist> -->
    </scroll>
     
       
  </div>
</template>

<script>
    import detailnavbar from '@/views/detail/childcomponents/detailnavbar'
    import detailswiper from '@/views/detail/childcomponents/detailswiper'
    import detailbaseinfo from '@/views/detail/childcomponents/detailbaseinfo'
    import detailshopinfo from '@/views/detail/childcomponents/detailshopinfo'
    import detailcloseinfo from '@/views/detail/childcomponents/detailcloseinfo'
    import detailparams from '@/views/detail/childcomponents/detailparams'
    import detailcommentinfo from '@/views/detail/childcomponents/detailcommentinfo'
    import goodslistitem from '@/components/content/goodlist/goodslistitem'
    import goodlist from '@/components/content/goodlist/goodlist'
    


    import scroll from '@/components/common/scroll/scroll'
    
    import {detail,Goods,getrecommend} from '@/network/detail.js'
    
export default {
  name:"detail",
  components:{
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    detailcloseinfo,
    detailparams,
    detailcommentinfo,
    goodslistitem,
    goodlist,
    scroll
  },
  data() {
      return {
          goodsid:"",
          topimgs:[],
          goods:{},
          shopInfo:{},
          clouseinfo:{},
          itemparams:{},
          commentsinfo:{},
          recommends:[],
          itemimglistener:null,
          img:null,
          themetopYs:[0,]
      }
  },
  created() {
      //1.保存传入的id
     this. goodsid=this.$route.query.id;

     //2.根据保存的id请求数据
     detail(this.goodsid).then(res=>{ 
        this.topimgs=res.result.itemInfo.topImages;
        const data=res.result;
         //2.3.商品详细信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          //2.4.店铺详细信息
        this.shopInfo=data.shopInfo;
        //2.5.衣服穿着效果
        this.clouseinfo=data.detailInfo;
        //2.6.取出参数信息
        this.itemparams=data.itemParams;
        //2.7.取出评论信息
          if(data.rate.cRate!=0){
            this.commentsinfo=data.rate.list[0]
          }
     })
    //3请求推荐数据
        getrecommend().then(res=>{
          this.recommends=res.data.list;
         // console.log(res.data.list)
        })
    
  },
  mounted(){
    const refresh=this.debance(this.$refs.scroll.refresh,200);
    this.itemimglistener=()=>{
      refresh()
    }
    this.$EventBus.$on("imgload",this.itemimglistener ) 
  },
  updated() {
    // this.themetopYs=[];
    //  this.themetopYs.push(0);
    //  this.themetopYs.push(this.$refs.params.$el.offsetTop);
    //  this.themetopYs.push(this.$refs.comments.$el.offsetTop);

  //console.log(this.themetopYs);
  },
  deactivated() {
    this.$EventBus.$off("imgload",this.itemimglistener ) 
  },
  methods: {
        //防抖函数
        debance(func,delay){
        let timer=null;
        return function(...args){
          if(timer){
            clearInterval(timer)
          }
          timer=setTimeout(()=>{
            func.apply(this,args)
          },delay)

        }
     },
     //监听详情完成
    detailimgload(){
      //  let a= this.$refs.scroll.refresh
      //  let b= this.debance(a,200)
      //  b();
     //监听图片加载完成事件
      this.debance(this.$refs.scroll.refresh,200)(); 
      this.themetopYs=[];
      this.themetopYs.push(0);
      this.themetopYs.push(this.$refs.params.$el.offsetTop);
      this.themetopYs.push(this.$refs.comments.$el.offsetTop); 
      //console.log(this.themetopYs)
    },
    titleclick(index){
         this.$refs.scroll.scrollto(0,-this.themetopYs[index],1000)
    }
  }
};
</script>
<style  scoped>
    .detail{
        height: 100vh;
        position: relative;
        z-index: 100;
        background-color: #fff;
    }

 .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
  }
   

</style>