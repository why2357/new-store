<!-- 导航 -->
<template>
  <div id="navigation_box">
    <!-- <button id="" >检查卫生</button><br />
    <button id="" >查看记录</button><br />
    <button id="" >增加寝室</button><br /> -->

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <router-link to="/home/check_health" @click="check_health()"
            >检查卫生</router-link
          >
        </template>

        <el-sub-menu index="1-4">
          <template #title>1号楼</template>
          <el-menu-item index="1-4-1">
            <router-link to="/work">切换到work</router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1-4">
          <template #title>2号楼</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1-4">
          <template #title>3号楼</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <router-link to="/home/see_log" @click="see_log()"
          >查看记录</router-link
        >
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <router-link to="/home/add_room" @click="add_room()">
          增加寝室
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";

export default {
  name: "navigation",
  data() {},
  setup() {
    return {};
  },
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
  components: {
    Location,
    Setting,
    IconMenu,
    Document,
  },
};
</script>

<style>
#navigation_box {
  width: 15%;
  height: 80%;
  background: rgb(255, 255, 255);
  position: absolute;
  left: 0;
  top: 10%;
  border-radius: 8px;
}
.el-menu-vertical-demo {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0px;
}
</style>
