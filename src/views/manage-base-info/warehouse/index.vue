<template>
  <div class="dashboard-container">
    <div class="app-container">
      <div class="whareHouse">
        <!-- 头部 -->
        <div class="header">
          <div class="header-list" style="margin-left: -15px; margin-right: -15px;">
            <div class="header-li" style="padding-left: 15px; padding-right: 15px;">
              <div class="top">仓库名称</div>
              <el-input v-model="input" placeholder="请输入内容" />
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// 主盒子
.whareHouse {
  width: 1226px;
  background-color: mediumpurple;
  margin: 20px 30px 30px 30px;
  height: 816px;
  // 头部
  .header{
    height: 127px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    padding: 30px;
    margin-bottom: 20px;

    .header-list{
      background-color:pink;

      .header-li{
        width: 25%;
        width: 299px;
        height: 68px;
        background-color: purple;
      }
    }
  }
  //身体
  .content{
    height: 669px;
      background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  }
}
</style>
