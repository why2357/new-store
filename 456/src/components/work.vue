<script>
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
</script>

<template>
  <!-- <div id="box2">
        年纪：<input type="text" v-model="grade" /><br />
        寝室：<input type="text" v-model="bedroom" /><br />
        第几周：<input type="text" v-model="week_id" /><br />
        星期：<input type="text" 
        v-model="weeks" /><br />
        评价：<input type="text" v-model="rating" /><br />
        <button @click="add()">增加</button><br />
        <button @click="queryall()">查询所有</button><br />
    </div> -->
  
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
#div0 {
  width: 100%;
  height: 100%;
  padding: 100px;
  margin: 0;
  background-color: aliceblue;
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
</style>
