<template>
  <p>增加寝室</p>
  <div class="div6">
    <button @click="openform()">增加宿舍</button>
    <div class="div6-1" id="add_msg">
      <form>
        年级信息：<input type="text" v-model="grade" /><br />
        专业信息：<input type="text" /><br />
        班级信息：<input type="text" /><br />
        宿舍信息：<input type="text" v-model="bedroom" /><br />
        <button @click="closeform()">关闭</button>
      </form>
    </div>
  </div>
  <div>
    <el-button @click="showOrHide()">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="el-zoom-in-center">
        <div v-show="show" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "add_room",
  data() {
    return {
      show: ref(true),
    };
  },
  methods: {
    openform() {
      document.getElementById("add_msg").style.display = "block";
    },
    closeform() {
      document.getElementById("add_msg").style.display = "none";
    },
    showOrHide() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.div6 {
  position: absolute;
  top: 450px;
  left: 450px;
  background: rgb(255, 0, 208);
  border-radius: 4px;
}
.div6-1 {
  width: 400px;
  height: 300 px;
  background-color: white;
  font-size: 20px;
  border-radius: 4px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
