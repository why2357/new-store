<!-- <script>
import axios from "axios";
// import { Header } from 'element-plus/es/components/table-v2/src/components'
import { ref } from "vue";
import { selectGroupKey } from "element-plus";

const grade = ref(null);
const bedroom = ref(null);
const week_id = ref(null);
const weeks = ref(null);
const rating = ref(null);
const username = ref(null);
const password = ref(null);

export default {
  name: "work",
  methdos: {
    add() {
      if (
        grade.value != null &&
        bedroom.value != null &&
        week_id.value != null &&
        weeks.value != null &&
        rating.value != null
      ) {
        axios
          .post(`http://49.235.107.169:5000/main/add?`, {
            grade: `${grade.value}`,
            bedroom: `${bedroom.value}`,
            week_id: week_id.value,

            weeks: `${weeks.value}`,
            rating: `${rating.value}`,
          })
          .then((r) => {
            console.log(r);
          });
      } else {
        alert("输入不能为空！");
      }
    },
    queryall() {
      axios
        .get(`http://49.235.107.169:5000/main/query?page=1&limit=10`)
        .then((ret) => {
          //  console.log(ret);
          redata = ret.data;
          console.log(redata);
        });
    },
  },
};
</script> -->

<!-- <template>
  <div id="box2">
    年纪：<input type="text" v-model="grade" /><br />
    寝室：<input type="text" v-model="bedroom" /><br />
    第几周：<input type="text" v-model="week_id" /><br />
    星期：<input type="text" v-model="weeks" /><br />
    评价：<input type="text" v-model="rating" /><br />
    <button @click="add()">增加</button><br />
    <button @click="queryall()">查询所有</button><br />
  </div>
</template> -->

<!-- <style>
body {
  margin: 0;
  padding: 0;
  /* background-color: rgb(64, 158, 255); */
  background-color: aliceblue;
}
#div0 {
  width: 100%;
  height: 100%;
  padding: 100px;
  margin: 0;
  background-color: aliceblue;
  /* background-color: rgb(64, 158, 255); */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.div1 {
  position: absolute;
  top: 250px;
  left: 350px;
  background: red;
}

.div2 {
  position: absolute;
  top: 250px;
  left: 650px;
  background: rgb(0, 255, 81);
}
.div3 {
  position: absolute;
  top: 250px;
  left: 490px;
  background: rgb(0, 21, 255);
}
.div4 {
  position: absolute;
  top: 250px;
  left: 950px;
  background: rgba(255, 247, 0, 0.428);
}
.div5 {
  position: absolute;
  top: 290px;
  left: 350px;
  background: rgb(0, 183, 255);
}

.div7 {
  position: absolute;
  top: 450px;
  left: 900px;
  background: #00ffee;
}
.div8 {
  position: absolute;
  top: 270px;
  left: 350px;
  background: #ff0088;
}

.div6-1 > input {
  width: 100px;
  height: 300px;
}
</style> -->

<template>
  <h5 class="mb-2">Default colors</h5>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
