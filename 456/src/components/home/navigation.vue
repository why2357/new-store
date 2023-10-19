<!-- 导航 -->
<template>
  <div id="navigation_box">
    <button>检查卫生</button><br />
    <button>查看记录</button><br />
    <button>增加寝室</button><br />
  </div>
</template>

<style>
#navigation_box {
  width: 200px;
  height: 80%;
  background: blue;
  position: absolute;
  left: 0;
  top: 10%;
}
</style>

<script>
export default {
  name: "navigation",
};
</script>
