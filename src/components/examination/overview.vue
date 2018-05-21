<template>
    <div class="main">
        <div class="wrap">
            <div class="top">
                <div class="title">
                    <span><i class="el-icon-menu"></i>审批事项</span>
                </div>
                <el-row :gutter="20">
                    <el-col :span="3">
                        <router-link to="fillCard">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#fac344',font: '16px bold',backgroundColor: '#e2edff' }">
                                <!-- <i class="el-icon-document"></i>  -->
                                <img src="../management/01.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">补卡申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="overtime">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#9e9e9e',font: '16px bold',backgroundColor: '#e3f7ff' }">
                                <img src="../management/02.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">加班申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="paidLeave">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#bfa',font: '16px bold',backgroundColor: '#f0ffe2' }">
                                <img src="../management/03.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">调休申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="purchase">
                            <el-card shadow="hover" :body-style="{ padding: '8px 20px',color: '#9e9e9e',font: '16px bold',backgroundColor: '#e2edff' }">
                                <img src="../management/04.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">物品申购申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="applyCar">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#fac344',font: '16px bold',backgroundColor: '#e3f7ff' }">
                                <img src="../management/05.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">用车申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="items">
                             <el-card shadow="hover" :body-style="{ padding: '8px 20px',color: '#5b86ff',font: '16px bold',backgroundColor: '#f0ffe2' }">
                                <img src="../management/06.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">物品申领申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="field">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#449f20',font: '16px bold',backgroundColor: '#bfa' }">
                                <img src="../management/07.png" alt="" style="width:30%">
                                <span style="vertical-align: middle">外勤申请</span>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="3">
                        <router-link to="applyLeave">
                            <el-card shadow="hover" :body-style="{ padding: '20px',color: '#9e9e9e',font: '16px bold',backgroundColor: '#bca' }">
                            <img src="../management/01.png" alt="" style="width:30%">
                            <span style="vertical-align: middle">请假申请</span>
                        </el-card>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
            <div class="content">
                <div class="title">
                    <span><i class="el-icon-date"></i>最近申请</span>
                    <span>刷新</span>
                </div>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#effafe' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#f0ffe2' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#e2fffb' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#2ceed3' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#ea5a7f' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#84e3a3' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card :body-style="{ padding: '0px',backgroundColor: '#e5ef4d' }">
                            <div class="card-content">
                                <span>补卡申请</span>
                                <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                <p><span>姓名：</span>XXX</p>
                                <p><span>缺卡原因：</span>入职</p>
                                <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                <el-button type="primary" plain>同意</el-button>
                                <el-button type="primary" plain>拒绝</el-button>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.main {
  height: 100%;
  padding: 30px;
  background-color: #c8e2f3;
  .wrap {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    .top {
      padding: 10px;
      .title {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
      }
    }
    .content {
      .title {
        margin: 20px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #e0e0e0;
      }
      .el-row {
        height: 510px;
        overflow-y: auto;
        overflow-x: hidden;
        .el-col {
          margin-bottom: 20px;
          .el-card {
            .card-content {
              padding: 14px;
              line-height: 2;
              p {
                span {
                  color: #98a1aa;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
