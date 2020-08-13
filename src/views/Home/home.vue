<template>
  <div class="home">
   
      <Navbar class="haha"><div slot="mid">购物街</div></Navbar>
      <tabcontrol :tabcontrolitem="tabcontrol" 
      @tabclick="tabconclick"
      :class="{fixed:isfixed}" 
      v-show="isfixed" ref="tab1"></tabcontrol>
     <!-- 加了冒号出现数字当数子 不加会当作字符串 -->
      <scroll class="content" 
      ref="scroll" 
      :probeType="3"
      @posnow="position"
      :pullUpLoad="true" 
      @loadmore="pullloadmore">
          <HomeSwiper :banners="bannerdata" 
          @bannerloadimg="bannerloadimg"></HomeSwiper>
          <recommends :recommends="recommenddata"></recommends>
          <feature></feature>
          <tabcontrol :tabcontrolitem="tabcontrol" 
          @tabclick="tabconclick" 
          ref="tabcontrol" 
          ></tabcontrol>
          <goodlist :goodslist="goodschange"></goodlist>
      </scroll>
     <backtop @click.native="backtopclick" v-show="ishidden"></backtop>
   
  </div>
</template>

<script>
  import Navbar from '@/components/common/navbar/Navbar'
  import scroll from '@/components/common/scroll/scroll'
  import Tabcontrol from '@/components/content/tabcontrol/Tabcontrol'
  import goodlist from '@/components/content/goodlist/goodlist'
  import backtop from '@/components/content/backtop/backtop'

  import HomeSwiper from '@/views/Home/childcompnents/HomeSwiper'
  import recommends from '@/views/Home/childcompnents/recommends'
  import feature from '@/views/Home/childcompnents/feature'

  import {gethomemultidata,getgoods} from '@/network/home.js'

export default {
  name:"home",
  components:{
    Navbar,
    HomeSwiper,
    recommends,
    feature,
    Tabcontrol,
    goodlist,
    scroll,
    backtop
  },
  data() {
    return {
      bannerdata:[],
      recommenddata:[],
      tabcontrol:['流行','新款','精选'],
      goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
      },
      type:"pop",
      ishidden:false,
      offsetTop:0,
      isfixed:false,
      scrollY:0,
      itemimglistener:null
    }
  },
  computed: {
    goodschange(){
         return this.goods[this.type].list
    }
  
  },
  created() {
           //1.获取版心和推荐数据
           this.gethomemultidata()
           //2.获取流行新款精选的商品数据
            this.getgoods('pop')
            this.getgoods('new')
            this.getgoods('sell')
  },
  mounted() {
    
    //监听图片加载完成事件
    const refresh=this.debance(this.$refs.scroll.refresh,200);
     
    //对监听的事件进行保存
      this.itemimglistener=()=>{     
        refresh();
      }
    this.$EventBus.$on("imgload",this.itemimglistener)
   
  },
  deactivated() {
      this.scrollY=this.$refs.scroll.getscrollY();
     // console.log(this.scrollY)
    //取消全局监听
    this.$EventBus.$off("imgload",this.itemimglistener)
  },
  activated() {
    this.$refs.scroll.scrollto(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  methods: {
    //1.网络请求
     gethomemultidata(){
        gethomemultidata().then(res=>{
          //1.保存banner和recommend数据 
           this.bannerdata=res.data.banner.list;
           this.recommenddata=res.data.recommend.list;
          });
     },
     getgoods(type){
        const page=this.goods[type].page+1;
        getgoods(type,page).then(res=>{
              this.goods[type].list.push(...res.data.list) 
             this.goods[type].page++;
        })
     
     },
     //2.事件监听  tabcontrol点击
     tabconclick(index){
          switch (index){
           case 0:this.type='pop';break;
           case 1:this.type='new';break;
           case 2:this.type='sell';break;
           default:break;
          }
         this.$refs.tab1.currentindex=index;
         this.$refs.tabcontrol.currentindex=index; 
     }, 
     //本次是监听backtop组件的点击。
     backtopclick(){
       this.$refs.scroll.scrollto(0,0,1000)
     },
    //实时监听滚动的位置
     position(pos){
         
         this.ishidden=-pos.y>1000;
         this.isfixed=-pos.y>this.offsetTop?true:false
     },
     //监听上拉事件
     pullloadmore(){
        //  console.log("上拉加载更多")
          this.getgoods(this.type);//调用加载更多的函数
          this.$refs.scroll.finishpullup();
        //  console.log("告诉scroll完成了")

     },
     //监听banner加载完成事件
     bannerloadimg(){
          this.offsetTop=this.$refs.tabcontrol.$el.offsetTop;
     },
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
     }
    

  }

};
</script>
<style  scoped>
  .home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }
  .haha{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .content{
   overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .hideorno{
    visibility: hidden;
  }
  .fixed{
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: white;
  }
</style>