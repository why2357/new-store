<template>
  <div>
    <bottom></bottom>
    <top></top>
    <content></content>
    <navigation></navigation>
  </div>
</template>

<script>
import bottom from "./bottom.vue";
import top from "./top.vue";
import navigation from "../homeVue/navigationVue/navigation.vue";
import content from "./content.vue";

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
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
  border-radius: 4px;
}
</style>
