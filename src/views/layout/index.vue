<!-- 布局 -->
<template>
    <el-container class="layout-container">
    <el-aside :width="isCollapse ? '64px' : '200px'">
        <app-aside class="aside-menu" :is-collapse="isCollapse"/>
    </el-aside>
    <el-container>
        <el-header class="header">
            <div>
                <i
                    class="icon"
                    :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
                    @click="isCollapse=!isCollapse"
                ></i>
                <span>江苏传智播客教育有限公司</span>
            </div>
            <el-dropdown>
                <!-- <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span> -->
                <div class="avator-wrap">
                    <img class="avator" :src="user.photo" alt="">
                    <span class="name">{{ user.name }}</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人设置</el-dropdown-item>
                    <el-dropdown-item
                        @click.native="onLogOut"
                    >用户退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
import AppAside from './components/aside'
// import { getUserProfile } from '@/api/user'
import { setItem, getItem, removeItem } from '@/utils/storage'

export default {
  name: 'LayoutIndex',
  components: {
      AppAside
  },
  props: {},
  data () {
    return {
        user: {},
        isCollapse: false
    }
  },
  computed: {},
  watch: {},
  created () {
      this.loadUserProfile()
  },
  mounted () {},
  methods: {
      async loadUserProfile() {
        //  const { user } = await getUserProfile()
        //  console.log(user)

         // 模拟数据
        const data = {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU',
            refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU',
            id: 1,
            name: 'winney',
            photo: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
        // 将返回的用户数据存储在本地，方便数据共享
        setItem('user', data)

        const user = getItem('user')
        console.log(user)
        this.user = user
      },
      onLogOut () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            // 将用户的登录状态清除
          removeItem('user')

           // 跳转到登录页面
           this.$router.push('/login')
            this.$message({
                type: 'success',
                message: '退出成功!'
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
      }
  }
}
</script>
<style lang='scss' scoped>
    .layout-container{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            line-height: 60px;
            .avator-wrap{
                display: flex;
                align-items: center;
            }
            .avator{
                width: 30px;
                height: 30px;
                border-radius: 10%;
                margin-right: 5px;
            }
            .icon{
                font-size: 24px;
                vertical-align: middle;
            }
        }
    }
    .el-aside {
        background-color: #002003;
       .aside-menu{
           height: 100%;
       }
    }
    .el-main {
        background-color: #E9EEF3;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>
