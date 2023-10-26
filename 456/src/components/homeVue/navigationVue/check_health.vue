<template>
  <h3>检查卫生</h3>
  <div class="college">
    <el-select v-model="value" placeholder="年级" @click="college">
      <!-- el-option-group为大分类，如校区北林等 -->
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <!-- el-option为学院,如双能 -->
        <el-option
          v-for="(item, GradeID) in college_data"
          :key="GradeID"
          :label="item.GradeName"
          :value="item.GradeName"
        />
      </el-option-group>
    </el-select>
  </div>

  <div class="div2">
    选择专业：
    <el-select v-model="value" placeholder="专业" @click="grade">
      <!-- el-option为学院,如双能 -->
      <el-option
        v-for="(item, MajorID) in grade_data"
        :key="MajorID"
        :label="item.MajorName"
        :value="item.MajorName"
      />
    </el-select>
  </div>
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

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">周一</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">周二</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">周三</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">周四</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">周五</label>
  </div>
  <div class="div5">
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">优秀</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">良好</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">及格</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">不及格</label><br />

    寝室评价：<input type="text" v-model="grade" /><br />
    <textarea class="form-control" rows="3"></textarea>
  </div>
  <div class="qin_shi"></div>

  <div class="div7"><button>录入卫生情况</button></div>

  <div>
    <h3>共{{ buttons.length }}个寝室</h3>
    <div>
      <button @click="CreateButton()">创建按钮</button>
      <div>
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="handleButtonClick(button)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

const collegename = ref(null);
const gradename = ref(null);
const majorname = ref(null);
const classname = ref(null);
const dormname = ref(null);
export default {
  name: "check_health",
  data() {
    return {
      buttons: [], // 存储创建的按钮
      buttonCount: 1, // 初始按钮数量
      college_data: {},
      grade_data: {},
      major_data: {},
      classes_data: {},
      collegename,
      gradename,
      majorname,
      classname,
      dormname,
      value: null,
      college_options: [], // 初始化下拉框数据为空
      grade_options: [], // 初始化下拉框数据为空
    };
  },
  methods: {
    CreateButton() {
      // 创建一个新按钮对象并添加到数组中
      //push方法：向数组buttons添加数据
      // 创建一个新按钮对象，这个对象具有一个 label 属性，label 的值是一个字符串，
      // 包含按钮的标签文本，文本中包含了 this.buttonCount 的值，用于标识按钮的唯一性。
      this.buttons.push({
        label: `按钮 ${this.buttonCount}`,
      });
      this.buttonCount++;
    },
    handleButtonClick(button) {
      // 处理按钮点击事件，你可以在这里定义按钮的行为
      console.log(`按钮 "${button.label}" 被点击了`);
    },
    college() {
      axios
        .get(
          `http://172.19.219.128:5000/class_info/query_info?college=%E5%8F%8C%E8%83%BD&skip=0&limit=100`
        )
        .then((ret) => {
          // console.log(typeof ret.data);
          this.college_data = Object.assign(ret.data); //把data的东西给collage
          console.log(this.college_data);
          this.college_options = [
            {
              label: "college",
              college_options: ret.data.map((item) => {
                return { label: item.GradeName, value: item.GradeName };
              }),
            },
          ];
        });
    },

    grade() {
      axios
        .get(
          `http://172.19.219.128:5000/class_info/query_info?grade=20&skip=0&limit=100`
        )
        .then((ret) => {
          this.grade_data = Object.assign(ret.data); //把data的东西给grade_data
          console.log(this.grade_data);
          this.grade_options = [
            {
              label: "grade",
              grade_options: ret.data.map((item) => {
                return { label: item.MajorName, value: item.MajorName };
              }),
            },
          ];
        });
    },
  },
};

/*<el-select v-model="value" placeholder="Select" @click="college">
  <!-- el-option-group为大分类，如校区北林等 -->
  <el-option-group
    v-for="group in options"
    :key="group.label"
    :label="group.label"
  >
    <!-- el-option为学院,如双能 -->
    <el-option
      v-for="(item, GradeID) in college_data"
      :key="GradeID"
      :label="item.GradeName"
      :value="item.GradeName"
    />
  </el-option-group>
</el-select>*/
</script>

<style>
#college {
  width: 100%;
  height: 100%;
  padding: 100px;
  margin: 0;
  background-color: aliceblue;
  position: absolute;
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
  border-radius: 4px;
}

.div2 {
  position: absolute;
  top: 250px;
  left: 650px;
  border-radius: 4px;
  background: rgb(0, 255, 81);
}
.div3 {
  position: absolute;
  top: 250px;
  left: 490px;
  background: rgb(0, 21, 255);
  border-radius: 4px;
}
.div4 {
  position: absolute;
  top: 250px;
  left: 950px;
  background: rgba(255, 247, 0, 0.428);
  border-radius: 4px;
}
.div5 {
  position: absolute;
  top: 80%;
  left: 350px;
  background: rgb(0, 183, 255);
  border-radius: 4px;
}

.div7 {
  position: absolute;
  top: 450px;
  left: 900px;
  background: #00ffee;
  border-radius: 4px;
}
.div8 {
  position: absolute;
  top: 270px;
  left: 350px;
  background: #ff0088;
  border-radius: 4px;
}

.div6-1 > input {
  width: 100px;
  height: 300px;
  border-radius: 4px;
}
</style>
