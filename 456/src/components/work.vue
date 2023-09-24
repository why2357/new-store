<script setup>
import axios from 'axios'
// import { Header } from 'element-plus/es/components/table-v2/src/components'
import { ref } from 'vue'
import { selectGroupKey } from 'element-plus'

const grade = ref(null)
const bedroom = ref(null)
const week_id = ref(null)
const weeks = ref(null)
const rating = ref(null)
const username = ref(null)
const password = ref(null)

var redata = 0
function add() {
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
                rating: `${rating.value}`
            })
            .then((r) => {
                console.log(r)
            })
    } else {
        alert('输入不能为空！')
    }
}

function queryall() {
    axios
        .get(`http://49.235.107.169:5000/main/query?page=1&limit=10`)
        .then((ret) => {
            //  console.log(ret);
            redata = ret.data
            console.log(redata)
        })
}

// document.write(251553132)
</script>

<template>
    <!-- <div id="box2">
        年纪：<input type="text" v-model="grade" /><br />
        寝室：<input type="text" v-model="bedroom" /><br />
        第几周：<input type="text" v-model="week_id" /><br />
        星期：<input type="text" v-model="weeks" /><br />
        评价：<input type="text" v-model="rating" /><br />
        <button @click="add()">增加</button><br />
        <button @click="queryall()">查询所有</button><br />
    </div> -->
    <div id="div1">
        <button>11111</button>
        <button>11111</button>
        <button>11111</button>
        <button>11111</button>
        1111111111111111111111111111111111111
    </div>
</template>


<style>
    .div1 {
            width: 320px;
            padding: 100px;
            border: 5px solid gray;
            margin: 0;
            background-color: aliceblue;
            position: fixed;/* 固定定位*/
            top: 110px;
            left: 300px
        }
</style>

  
