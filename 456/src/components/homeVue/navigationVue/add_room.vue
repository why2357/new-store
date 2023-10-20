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
</template>

<script>
export default {
  name: "add_room",
  methods: {
    openform() {
      document.getElementById("add_msg").style.display = "block";
    },
    closeform() {
      document.getElementById("add_msg").style.display = "none";
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
}
.div6-1 {
  width: 400px;
  height: 300 px;
  background-color: white;
  font-size: 20px;
}
</style>
