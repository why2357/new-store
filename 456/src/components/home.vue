<template>
  <div>
    <p>登录成功</p>

    <bottom></bottom>
    <top></top>
    <content></content>
    <navigation></navigation>

    
    <router-link to="/work">切换到work</router-link><br />
  </div>
</template>

<script>
import bottom from "./home/bottom.vue";
import top from "./home/top.vue";
import navigation from "./home/navigation.vue";
import content from "./home/content.vue";

export default {
  components: {
    top,
    bottom,
    navigation,
    content,
  },
  name: "home", //给组件起名字，为啥login不用
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
</style>
