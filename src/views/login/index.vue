<!-- 用户登录 -->
<template>
 <div class="login-container">
     <el-form
      class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
      >
         <div class="login-head">
             <img src="./logo_index.png" alt="">
         </div>
        <el-form-item prop="mobile">
            <el-input
                v-model="user.mobile"
                placeholder="请输入手机号码"
                prefix-icon="el-icon-user"
            ></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input
                v-model="user.code"
                placeholder="请输入验证码"
                prefix-icon="el-icon-success"
            ></el-input>
        </el-form-item>
         <el-form-item prop="agree">
            <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              @click="onLogin"
              :loading="loginLoading"
            >登录</el-button>
        </el-form-item>
        </el-form>
 </div>
</template>
<script>
// import { userLogin } from '@/api/user'
// import { setItem } from '@/utils/storage'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false
      },
      // checked: false,
      loginLoading: false,
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'blur' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async login () {
      this.loginLoading = true
      try {
        // const { data } = await userLogin(this.user)
        // console.log(data)
        this.$router.push({
          name: 'home'
        })

        // 登录成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })

        this.loginLoading = false

        // // 模拟数据
        // const data = {
        //   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU',
        //     refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU',
        //     id: 1,
        //     name: 'winney',
        //     photo: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        // }
        // // 将返回的用户数据存储在本地，方便数据共享
        // setItem('user', data)
      } catch {
        // 登录失败
        this.$message({
          message: '登录失败',
          type: 'fail'
        })

        this.loginLoading = false
      }
    },
      onLogin () {
       this.$refs['login-form'].validate(valid => {
          if (valid) {
            this.login()
          } else {
            return false
          }
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
