<template>
  <p>查看记录</p>
  <div class="see_log_box">
    <!-- <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul> -->
    <el-table :data="tableData" style="width: 100%" height="80%">
      <el-table-column fixed prop="unit" label="楼号" width="60" id="qqq" />
      <el-table-column fixed prop="room" label="寝室" width="60" />
      <el-table-column prop="class" label="班级" width="120" />
      <el-table-column prop="state" label="优良中差" width="120" />
      <el-table-column prop="score" label="点评" width="320" />
      <el-table-column prop="college" label="学院" width="300" />
    </el-table>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "see_log",
  data() {
    return {
      tableData: [
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
        {
          unit: "4",
          room: "407",
          class: "21机器人02",
          state: "优",
          score: "美若仙境",
          college: "能源与智能工程学院",
        },
      ],
    };
  },
  setup() {
    const count = ref(0);
    const load = () => {
      count.value += 3;
    };
    return { count, load };
  },

  methods() {},
};
</script>

<style>
.see_log_box {
  width: 100%;
  height: 100%;
}
#qqq {
  position: absolute;
}
.infinite-list {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
