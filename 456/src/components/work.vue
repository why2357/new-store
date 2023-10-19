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

function openform(){
    document.getElementById("add_msg").style.display="block";
}
function closeform(){
    document.getElementById("add_msg").style.display="none";
}
// document.write(251553132)s
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
    <div id="div0">
        <br>
    <router-link to="/login">切换到登录</router-link><br>
    <!-- <router-view></router-view> -->
        <p>将来读取数据用层层嵌套的读取方式，因为数据会关联</p>
        <div class="div1">
            选择年级：
            <select v-model="selected">
                <option disabled value="">第一周</option>
                <option>大一</option>
                <option>大二</option>
                <option>大三</option>
                <option>大四</option>
            </select>
        </div>
        <div class="div2">
            选择专业：
            <select v-model="selected">
                <option disabled value="">第一周</option>
                <option>能源与动力工程</option>
                <option>机器人</option>
                <option>自动化专业</option>
                <option>自动化专业（控制智能化方向）本科</option>
                <option>建筑环境与能源应用工程</option>
               
            </select>
        </div >
        <div class="div3">
            选择班级：
            <select v-model="selected">
                <option disabled value="">第一周</option>
                <option>21机器人01</option>
                <option>21机器人02</option>
                <option>21机器人02</option>
            </select>
        </div>
        <div class="div4">
            选择宿舍:
            <select v-model="selected">
                <option disabled value="">第一周</option>
                <option>401</option>
                <option>402</option>
                <option>403</option>
                <option>404</option>
            
            </select>
        </div>
        <div class="div8">
            选择周数:
            <select v-model="selected">
                <option disabled value="">第一周</option>
                <option>第一周</option>
                <option>第二周</option>
                <option>第三周</option>
                <option>第四周</option>
                <option>第五周</option>
                <option>第六周</option>
                <option>第七周</option>
                <option>第八周</option>
                <option>第九周</option>
                <option>第十周</option>
                <option>第十一周</option>
                <option>第十二周</option>
                <option>第十三周</option>
                <option>第十四周</option>
                <option>第十五周</option>
                <option>第十六周</option>
            </select>

            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">周一</label>

            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">周二</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">周三</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">周四</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">周五</label>
            
        </div>
        <div class="div5">
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">优秀</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">良好</label>
            
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">及格</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">不及格</label><br />
            
            年级信息：<input type="text" v-model="grade" /><br />
            专业信息：<input type="text"><br />
            班级信息：<input type="text"><br />
            宿舍信息：<input type="text" v-model="bedroom" /><br />
        </div>
        <div class="div6">
        <button @click="openform()">增加宿舍</button>
            <div class="div6-1" id="add_msg">
                <form>
                    年级信息：<input type="text" v-model="grade" /><br />
                    专业信息：<input type="text"><br />
                    班级信息：<input type="text"><br />
                    宿舍信息：<input type="text" v-model="bedroom" /><br />
                    <button @click="closeform()">关闭</button>
                </form>
            </div>
        </div>
        <div class="div7"><button>录入卫生情况</button></div>
    </div>
</template>


<style>
    body{
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
        .div1{
            position:  absolute;
            top: 250px;
            left: 350px;
            background: red;
        }
        
        .div2{
            position: absolute;
            top: 250px;
            left: 650px;
            background: rgb(0, 255, 81);

        }
        .div3{
            position: absolute;
            top: 250px;
            left: 490px;
            background: rgb(0, 21, 255);

        }
        .div4{
            position: absolute;
            top: 250px;
            left: 950px;
            background: rgba(255, 247, 0, 0.428);

        }
        .div5{
            position: absolute;
            top: 290px;
    left: 350px;
            background: rgb(0, 183, 255);

        }
        .div6{
            position: absolute;
            top: 450px;
            left: 450px;
            background: rgb(255, 0, 208);

        }
        .div6-1{
            width: 400px;
            height: 300 px;
            background-color: white;
            font-size:20px;
        }
        .div7{
            position: absolute;
            top: 450px;
            left: 900px;
            background: #00ffee;
        }
        .div8{
            position: absolute;
            top: 270px;
    left: 350px;
            background: #ff0088;
        }
       
        .div6-1>input{
            width: 100px;
            height: 300px;
        }
       
        
</style>

  
