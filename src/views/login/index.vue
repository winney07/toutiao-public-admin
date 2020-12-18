<!-- 用户登录 -->
<template>
 <div class="login-container">
     <el-form class="login-form" ref="form" :model="user">
         <div class="login-head">
             <img src="./logo_index.png" alt="">
         </div>
        <el-form-item>
            <el-input
                v-model="user.mobile"
                placeholder="请输入手机号码"
                prefix-icon="el-icon-user"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-input
                v-model="user.code"
                placeholder="请输入验证码"
                prefix-icon="el-icon-success"
            ></el-input>
        </el-form-item>
         <el-form-item>
            <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
        </el-form>
 </div>
</template>

<script>
import { userLogin } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      checked: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
     onLogin () {
    //   const { data } = await userLogin(this.user)

       userLogin(this.user).then(res => {
        console.log(res)

        // 登录成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login-container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("./login_bg.jpg") no-repeat;
    background-size: cover;
    .login-form{
        background-color: #fff;
         padding: 30px 50px 10px;
        min-width: 300px;
        .login-head{
            display: flex;
            justify-content: center;
            img {
               width: 50%;
               margin: 0 auto 20px;
            }
        }
        .login-btn{
            width: 100%
        }
    }
}
</style>
