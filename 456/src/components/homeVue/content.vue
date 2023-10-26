<!-- 内容 -->

<template>
  <div id="content_box">
    <router-view></router-view>
  </div>
</template>

<style>
#content_box {
  width: 80%;
  height: 80%;
  /* background: rgb(0, 255, 149); */
  position: absolute;
  left: 200px;
  top: 10%;
  border-radius: 4px;
}
</style>

<script>
export default {
  name: "content",
};
</script>
