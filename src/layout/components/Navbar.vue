<template>
  <div class="navbar">
        <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

        <breadcrumb class="breadcrumb-container" />
    <div class="app-breadcrumb">
      <span class="breadBtn">工作台</span>
    </div>

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png" class="user-avatar">
          <i class="el-icon-caret-bottom" style="color:#ffb200" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              <i class="el-icon-back">关闭左侧</i>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-right">关闭右侧</i>
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://gitee.com/shuiruohanyu/hrsaas53">
            <el-dropdown-item><i class="el-icon-close">关闭其他</i></el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;"><i class="el-icon-delete">关闭全部</i></span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.user-avatar {
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  vertical-align: middle;

}
//.name {
//  color: purple;
//  vertical-align: middle;
//  margin-left:5px;
//}
.user-dropdown {
  color: #fff;
}

.el-icon-caret-bottom{
  color:#fff;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: -webkit-linear-gradient(bottom, #75147c, #7f44be);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: #ffb200
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }

  .app-breadcrumb {
    display: inline-block;
    font-size: 18px;
    line-height: 50px;
    margin-left: 10px;
    color: #ffffff;
    cursor: text;
    .breadBtn {
      background: #fff;
      font-size: 14px;
      padding: 0 10px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
      color: #ffb200;
      //display: inline-block;
      //position: relative;
      //cursor: pointer;
      //height: 36px;
      //background: #fff;
      //border-radius: 6px;
      //line-height: 36px;
      //color: #b5abab;
      //padding: 0 9px 0 15px;
      //font-size: 13px;
      //margin-left: 10px;
      //margin-top: 14px;
      //margin-bottom: 14px;
      //font-weight: 400;
      //font-family: PingFangSC,PingFangSC-Regular;
    }
  }
}
</style>
