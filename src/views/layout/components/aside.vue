<!-- 左侧导航栏 -->
<template>
    <el-menu
      class="nav-menu"
      default-active="/"
      background-color="#002003"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <div class="logo"></div>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="iconfont iconimage"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="iconfont iconsucai"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/public">
        <i class="iconfont iconfabu"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="iconfont iconpinglun"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="iconfont iconfensi"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.nav-menu{
    border-right: 0;
    .iconfont{
        margin-right: 10px;
        padding-left: 5px;
        font-size: 17px;
    }
    .logo{
      width: 100%;
      height: 60px;
      background: url('../logo.png') no-repeat 50%/140px auto;
    }
}
</style>
