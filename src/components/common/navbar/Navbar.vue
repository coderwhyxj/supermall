<template>
  <div class="Navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="mid"><slot name="mid"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:"Navbar"
};
</script>
<style  scoped>
.Navbar{

    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(150,150,150,.08);
    background-color:  #ff5777;
}
.left,.right{
    width: 60px;
}
.mid{
    flex: 1;
    font-weight: 700;
    color: whitesmoke;
    font-size: 18px;
}

</style>