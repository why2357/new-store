<template>
    <div class="box">
        <h1>welcome</h1>   
            <div class="login-box">
<!-- @submit.prevent="login" -->
                <form >

                    <div class="input-box">
                        用户：<input
                            type="text"
                            v-model="username"
                            placeholder="账号"
                        /><br />
                    </div>
                    
                    <div class="input-box">
                        密码：<input
                            type="password"
                            v-model="password"
                            placeholder="密码"
                        /><br />
                    </div>

                    <div class="btn-box">
                        <el-button
                            @click="login()"
                            :disabled="cansubmit"
                            type="primary"
                            plain
                            >登录</el-button
                        ><br />

                        <el-button @click="enroll()" type="primary" plain
                            >注册</el-button
                        ><br />

                        <el-button @click="forget" type="primary" plain
                            >忘记密码</el-button
                        ><br />
                    </div>
                </form>
            </div>
    </div>
</template>
<script >
import axios from 'axios'
import { selectGroupKey } from 'element-plus'
import { compile, computed, ref } from 'vue'

const count = ref(0)
export default {
    name: 'login',
    data() {
        //   `data` 是作为请求体被发送的数据
        return {
            //初始化 username,password。
            username: '',
            password: ''
        }
    },
    // 下面这个组件检测俩输入框是否有输入
    // computed: {
    //     cansubmit() {
    //         const { username, password } = this.username
    //         return Boolean(username && password)
    //     }
    // },
    //methon是一个对象，里面可以有很多属性，如名字，还可以有方法，如函数login（）
    methods: {
        login() {
            let params = new URLSearchParams()  //应该是将params定义为对象吧
            params.append('username', this.username)
            //这里this的对象应该是全局，但具体是多大不知道
            // console.log(this)
            params.append('password', this.password)
            axios
                .post(`http://49.235.107.169:5000/token`, params, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((ret) => {
                    const redata = ret.data
                    console.log(redata.access_token)
                    console.log(ret)

                    localStorage.setItem('token', redata.access_token) //将token本地保存
                    /*
    之后跳转到其他页面，以后每次前端之后的每一个对后端的请求都要在请求头上带上token，
    后端查看请求头是否有token，拿到token检查是否过期，返回对应状态给前端。 
    */
                    this.$router.push('/home')
                    console.log(`试26546541试${this.username},${this.password}`)
                    var a=document.getElementById("")
                    console.log(a)

                })
        },

        // login(){            //登录函数
        //   if(this.username == "why"
        //   && this.password == "123"){    //将来这里hui变成和后端返回数据的验证
        //         this.$router.push("/home")
        //         console.log(`试试${this.username},${this.password}`)
        //       }else{
        //         alert("密码或用户名错误")
        //       }
        // },

        enroll() {
            //注册函数
            if (this.username != null && this.password != null) {
                axios.post(`http://49.235.107.169:5000/user`,
                        {
                            username: this.username,
                            password: this.password,
                        }
                    )
                    .then((r) => {
                        console.log(r)
                    })
            } else {
                alert('输入不能为空！')
            }
        },

        forget() {
            this.$router.push('/forget')
        }
    }
}
</script>


<style>

* {
    margin: 0;
    padding: 0;
}

body {
    /* width: 100%; */
    height: 100vh;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('src/images/1.png') no-repeat;
    background-size: cover;
}

.box {
    border-radius:20px ;
    height: 380px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* boreder-top:1px solid rgba(255,255,·255,0.5);
    boreder-left:1px solid rgba(255,255,255,0.5);
    boreder-bottom:1px solid rgba(255,255,255,0.5);
    boreder-right:1px solid rgba(255,255,255,0.5); */
    top:1px solid rgba(255,255,255,0.5);
    left:1px solid rgba(255,255,255,0.5);
    bottom:1px solid rgba(255,255,255,0.5);
    right:1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(10px);
    background: rgba(50,50,50,0.2);
    /* background: url('src/images/1.png') no-repeat; */

}

.box > h2 {
    color: rgba(255, 255, 255, 0.9);
    /* margin-botom: 20px; */
}

.box .input-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    /* margin-botom: 10px; */
}

.box .input-box > label {
    /* margin-botom: 5px; */
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
}

.box .input-box > input {

    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    height: 35px;
    width: 250px;
    background: rgba(255,255,255,0.3);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 5px;
    transition: 0.2s;
    padding: 0 10px;
    letter-spacing: 1px;
}

.box .input-box >input:focus{
    border: 1px solid rgba(255,255,255,0.8);
}
.box .btn-box{
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.box .btn-box > a{
    font-size: 14px;
    text-decoration: none;
    color: rgba(255,255,255,0.9);
    transition: 0.2s;
    text-align: end;
    width: 250px;

}
.box .btn-box > a:hover{
    color: rgba(255,255,255,1);

}

.box .btn-box > div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin-top: 20px;
}

.box .btn-box > div >button{
    width: 120px;
    height: 35px;
    border: 1px solid rgba(197,81,58,0.8);
    background:  rgba(197,81,58,0.5);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    
}
.box .btn-box > div >button:hover{
    width: 120px;
    height: 35px;
    border: 1px solid rgba(197,81,58,0.8);
    background:  rgba(197,81,58,0.5);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    transition: 0.2s;

}

.box .btn-box > div >button:nth-of-type(2){
    margin-left: 10px;
}

.box .btn-box > div >button:hover{
    border: 1px solid rgba(248, 108, 76, 0.8);
    background: rgba(248, 108, 79, 0.5);
}


</style>
 

