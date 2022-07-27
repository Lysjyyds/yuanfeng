<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!--      整体大盒子-->
      <div class="dashboard">
        <!--        上半部分-->
        <div class="top"> <div class="divLeft">
                            <!--          导航栏-->
                            <div class="banner">
                              <div class="img-left"><img src="	http://www-wms-java.itheima.net/img/dashboard-banner-left@2x.5afd2949.png"></div>
                              <div class="img-right"><img src="http://www-wms-java.itheima.net/img/dashboard-banner-right@2x.28195570.png"></div>
                              <div class="user-header"><img src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"></div>
                              <p class="user-title">老艺术家</p>
                              <p class="subject-title">长路漫漫，当克己，当慎独!</p>
                              <p class="subject-author">—— 张张包哦</p>
                              <div class="site">
                                <p class="title">杭州总仓</p>
                              </div>
                            </div>
                            <!--          下半部分-->
                            <div class="backlog">
                              <div class="subject">代办信息</div>
                              <div class="item-list">
                                <div v-for="(item,index) in todo" :key="index" class="el-row" style="margin-left: -15px;margin-right: -15px;">
                                  <div class="el-col" style="padding-left: 15px; padding-right: 15px">
                                    <a href="#/manage-storage-in/list-in/list">
                                      <div class="backlog-item">
                                        <div class="icon" style="background: mediumpurple">
                                          <span><i class="el-icon-document-remove" /></span>
                                        </div>
                                        <div class="title">{{ item.name }}</div>
                                        <div class="bottom">
                                          <span class="a">新增</span>
                                          <span class="b">{{ item.value1 }}</span>
                                          <span class="a">待审核</span>
                                          <span class="b" style="color: rgb(0,118,255)">{{ item.value2 }}</span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                </div>

                              </div>

                            </div>
                          </div>
          <!--          通知/公告-->
          <div class="divRight">
            <div class="notes">
              <div class="subject">通知/公告</div>
              <div class="item">
                <div class="hr" />
                <div class="title">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>

              </div>
              <div class="item">
                <div class="hr" />
                <div class="title">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>

              </div>
              <div class="item">
                <div class="hr" />
                <div class="title">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>

              </div>
              <div class="item">
                <div class="hr" />
                <div class="title">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>

              </div>
              <div class="item">
                <div class="hr" />
                <div class="title">紧急盘点通知</div>
                <div class="time">2020.12.30 18:23:14</div>

              </div>

            </div>
          </div>
        </div>
        <!--        任务导航-->
        <div class="task">
          <div class="subject">任务导航</div>
          <div class="item-list">
            <div class="el-row">
              <div class="el-col">
                <a href="#/manage-storage-in/list-in/task-receive" class>
                  <div class="tasks-item">
                    <div class="icon"><i class="el-icon-sunny" /></div>
                    <div class="title">收货任务</div>
                  </div>

                </a>
              </div>
              <div class="el-col">
                <a href="#/manage-storage-in/list-in/task-receive" class>
                  <div class="tasks-item">
                    <div class="icon"><i class="el-icon-cloudy" /></div>
                    <div class="title">上架任务</div>
                  </div>

                </a>
              </div>
              <div class="el-col">
                <a href="#/manage-storage-in/list-in/task-receive" class>
                  <div class="tasks-item">
                    <div class="icon"><i class="el-icon-partly-cloudy" /></div>
                    <div class="title">盘点任务</div>
                  </div>

                </a>
              </div>
              <div class="el-col">
                <a href="#/manage-storage-in/list-in/task-receive" class>
                  <div class="tasks-item">
                    <div class="icon"><i class="el-icon-cloudy-and-sunny" /></div>
                    <div class="title">拣货任务</div>
                  </div>

                </a>
              </div>
              <div class="el-col">
                <a href="#/manage-storage-in/list-in/task-receive" class>
                  <div class="tasks-item">
                    <div class="icon"><i class="el-icon-moon" /></div>
                    <div class="title">交接任务</div>
                  </div>

                </a>
              </div>
            </div>
          </div>
        </div>
        <!--        入库出库信心-->
        <div class="inout-charts">
          <div class="header el-row">
            <div class="el-col el-col-6">
              <p class="subject">入库/出库信息</p>
            </div>
            <div class="el-col-8">
              <div class="el-radio-group">
                <el-button type="warning" plain size="medium">本周</el-button>
                <el-button type="warning" plain size="medium">本月</el-button>
                <el-button type="warning" plain size="medium">全年</el-button>
              </div>

            </div>
          </div>
          <div ref="chart1" class="canvas" style="height: 430px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" />
        </div>
        <!--        下半部分-->
        <div class="button">
          <div class="use-charts">
            <div class="header">
              <p class="subject">库存使用情况</p>
            </div>
            <div ref="chart2" class="canvas" style="height: 280px; width: 100%; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" />
          </div>
          <div class="libs-charts">
            <div class="header">
              <p class="subject">库存使用情况</p>
            </div>
            <div ref="chart3" style="position: relative; width: 787px; height: 280px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;" />
          </div>
        </div>
      </div>
    </div></div></template>

<script>
import { getTodo } from '@/api/home'
export default {
  data() {
    return {
      todo: ''
    }
  },
  created() {
    this.getTodo()
  },
  mounted() {
    this.getChart2()
    this.getChart3()
    this.getChart1()
  },
  methods: {
    getChart1() {
      const chart = this.$refs.chart1
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const options1 = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['入库', '出库'],
            bottom: '18px'
          },
          xAxis: [
            {
              type: 'category',
              // prettier-ignore
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '入库',
              type: 'bar',
              data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
              ]
            },
            {
              name: '出库',
              type: 'bar',
              data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
              ]
            }
          ]
        }
        myChart.setOption(options1)
      }
    },
    getChart2() {
      const chart = this.$refs.chart2
      console.log(chart)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const options2 = {
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 329.7, name: '冻结库存' },
                { value: 670.3, name: '可用库存' }
              ]
            }
          ]
        }
        myChart.setOption(options2)
      }
    },
    getChart3() {
      const chart = this.$refs.chart3
      console.log(chart)
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const options3 = {
          title: {
            text: '库存使用情况',
            left: '3%'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            right: '3%',
            top: 'center',
            icon: 'circle'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}'
                }
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
              // labelLine:false
            }
          ]

        }
        myChart.setOption(options3)
      }
    },
    async getTodo() {
      const res = await getTodo()
      this.todo = res.data.data
    }
  }
}
</script>

<style lang="scss" scoped>
//主盒子
.dashboard{
  width: 100%;
  background-color: mediumpurple;
  padding: 20px 30px 30px;

  //上半部分
.top{
  display: flex;
  justify-content: space-between;

  //左盒子
  .divLeft{
    width: 895px;
    height: 450px;
    //background-color: deeppink;
    //padding: 0 30px 0 0 ;

    // 导航栏
    .banner{
      width: 100%;
      height: 148px;
      background: linear-gradient(270deg,#ffc771,#ffa634);
      border-radius: 12px;
      position: relative;
      //左边图片大小
      .img-left{
        position: absolute;
        top: 0;
        left: 0;
        height: 148px;
        img{
          height: 100%;
        }
      }
      // 右边图片大小
      .img-right{
        position: absolute;
        top: 0;
        right: 0;
        height: 148px;
        img{
          height: 100%;
        }
      }
      //头像
      .user-header{
        position: absolute;
        top: 31px;
        left: 43px;
        height: 62px;
      }
      // 文字
      .user-title{
        position: absolute;
        left: 41px;
        bottom: -5px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: purple;
        line-height: 22px;
      }
      // 中间的文字
      .subject-title{
        position: absolute;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: purple;
        line-height: 25px;
        top: 20px;
        left: 200px;
        font-size: 18px;
      }
      // 作者
      .subject-author{
        position: absolute;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: purple;
        line-height: 25px;
        top: 76px;
        left: 400px;
        font-size: 16px;
      }
      //杭州总仓
      .site{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 147px;
        height: 40px;
        background: #f8f5f5;
        border-radius: 6px;
        opacity: .79;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .title{
          color: purple;
        }
      }
    }

    .backlog{
      width: 100%;
      height: 282px;
      background-color: #fff;
      margin-top: 20px;
      border-radius: 12px;
      padding: 25px;

      .subject{
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: purple;
        line-height: 22px;
      }

      .item-list{
        margin-top: 19px;
        display: flex;
        flex-direction:row; /* 表示内容直接横排列 */
        align-items: center;
        justify-content: space-around;
        //flex-direction: row;
        .el-row{
          position: relative;
          box-sizing: border-box;
          width: 291px;

          /* 1 把a转换为块元素 */
          a{
            display: block;
          }

          /* 鼠标经过链接变换背景颜色 */
          a:hover{
            background-color: purple;
            z-index: 30;
          }

        .backlog-item{
          position: relative;
          height: 186px;
          background: #fbf7f7;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;

          .icon{
            width: 49px;
            height: 49px;
            background: #0076ff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          .title{
            position: absolute;
            top: 34px;
            left: 85px;
            font-size: 16px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: purple;
            line-height: 22px;
          }

          .bottom{
            position: absolute;
            bottom: 20px;

            span{
              font-size: 32px;
              color: #f8f5f5
            }

            .a{
              font-size: 14px;
              font-family: PingFangSC-Regular,PingFang SC;
              font-weight: 400;
              color: #887e7e;
              margin-right: 10px;
              vertical-align: super;
            }
            .b{
              font-size: 36px;
              font-family: DIN-Medium,DIN;
              font-weight: 500;
              color: #332929;
              margin-right: 20px;
            }
          }

        }
        }
      }
    }
  }

  //右侧
  .divRight{
    width: 261px;
    height: 451px;
    //background-color: blue;
    //padding: 30px;

    .notes{
      width: 261px;
      height: 451px;
      background: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      padding: 30px;

      .subject{
        ont-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: purple;
        line-height: 22px
      }
    }

    .item{
      margin-top: 15px;

      .hr{
        width: 201px;
        height: 1px;
        background-color: #f5efee;
      }

      .title{
        width: 195px;
        height: 18px;
        font-size: 13px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: #332929;
        line-height: 18px;
        margin-top: 15px;
      }

      .time{
        width: 115px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: #887e7e;
        line-height: 17px;
        margin-top: 10px
      }
    }
  }
}

//任务导航
  .task{
    width: 1202px;
    margin: 20px auto;
    height: 188px;
    background: #fff;
    box-shadow: 0 0 6px 0rgba(144,142,142,.17);
    border-radius: 12px;
    padding: 25px;

    .subject{
      font-size: 16px;
      font-family: PingFangSC-Semibold,PingFang SC;
      font-weight: 600;
      color: purple;
      line-height: 22px
    }
    .item-list{
      margin-top: 19px;
      background-color: #fff;
      width: 100%;

      .el-row{
        position: relative;
        margin-left: -15px;
        margin-right: -15px;
        height: 93px;
        background-color: #fff;
        display: flex;

        .el-col{
          padding-left: 15px;
          padding-right: 15px;
          width: 20%;

          .tasks-item{
            position: relative;
            width: 100%;
            height: 93px;
            background: #fbf7f7;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-evenly
          }

          .icon{
            width: 50px;
            height: 50px;
            background: #0076ff;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: space-around
          }

          .title{
            font-size: 16px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: purple;
            line-height: 22px
          }
        }
      }
    }

  }
  //入库出库信心
  .inout-charts{
    width: 100%;
    height: 500px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;

    .el-row{
      position: relative;

      .el-col-6 {
        width: 25%;

        .subject{
          ont-size: 16px;
          font-family: PingFangSC-Semibold,PingFang SC;
          font-weight: 600;
          color: mediumpurple;
          line-height: 22px}
      }
      .el-col-8{
            width: 75%;
            text-align: right;
          .el-radio-group{
            display: inline-block;
      line-height: 1;
      vertical-align: middle;
      font-size: 0;
      width: 208px;
      height: 36px;
      display: flex;
      float:right;
      margin-right: 0;

          }
      }
    }

    }

  //下半部分
  .button{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 354px;
    margin-top: 50px;
    margin: 20px 0 0;

    //左盒子
    .use-charts{
      height: 354px;
      padding: 25px ;
      width: 30%;
      background: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      margin-right: 30px;

      .subject{
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: purple;
        line-height: 22px;
      }

      .canvas{
        position: absolute;
        left: 0px;
        top: 0px;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        padding: 0px;
        margin: 0px;
        border-width: 0px
      }

    }
    .libs-charts{
      height: 354px;
      width: 70%;
      background: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      padding: 25px;

      .subject{
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: purple;
        line-height: 22px
      }
    }
  }
}

</style>

