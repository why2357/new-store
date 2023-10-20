<!-- 导航 -->
<template>
  <div id="navigation_box">
    <!-- <button id="" >检查卫生</button><br />
    <button id="" >查看记录</button><br />
    <button id="" >增加寝室</button><br /> -->
    <router-link to="/home/check_health" @click="check_health()"
      >检查卫生</router-link
    ><br />
    <router-link to="/home/see_log" @click="see_log()">查看记录</router-link
    ><br />
    <router-link to="/home/add_room" @click="add_room()">增加寝室</router-link
    ><br />
  </div>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    add_room() {
      console.log("增加寝室");
    },
    see_log() {
      console.log("查看记录");
    },
    check_health() {
      console.log("检查卫生");
    },
  },
};
</script>

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
