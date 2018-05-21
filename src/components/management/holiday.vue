<template>
    <div class="main">
      <div class="top">
          <div class="title">
              <span><i class="el-icon-menu"></i>假期类别</span>
          </div>
            <el-row :gutter="20">
                <el-col :span="3">
                    <router-link to="SickLeave">
                        <el-card shadow="hover" :body-style="{ padding: '40px',color: '#fac344',font: '16px bold' }">
                            <!-- <i class="el-icon-document"></i>  -->
                            <img src="../management/01.png" alt="" style="width:30%">
                            <span style="vertical-align: middle">病假</span>
                        </el-card>
                    </router-link>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#9e9e9e',font: '16px bold' }">
                        <img src="../management/02.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">事假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#bfa',font: '16px bold' }">
                        <img src="../management/03.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">产假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#9e9e9e',font: '16px bold' }">
                        <img src="../management/04.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">陪产假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#fac344',font: '16px bold' }">
                        <img src="../management/05.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">年休假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#5b86ff',font: '16px bold' }">
                        <img src="../management/06.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">婚假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card shadow="hover" :body-style="{ padding: '40px',color: '#449f20',font: '16px bold' }">
                        <img src="../management/07.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">丧假</span>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <router-link to="Statutory">
                        <el-card shadow="hover" :body-style="{ padding: '40px 30px',color: '#9e9e9e',font: '16px bold' }">
                        <img src="../management/01.png" alt="" style="width:30%">
                        <span style="vertical-align: middle">法定节假日</span>
                    </el-card>
                    </router-link>
                </el-col>
            </el-row>
      </div>
      <div class="content">
           <div class="title">
               <span><i class="el-icon-date"></i>2018法定节假日预览</span>
           </div>
           <el-table
                :data="tableData"
                stripe
                max-height="556"
                style="width: 100%">
                <el-table-column
                prop="date"
                label="节日"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="放假时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="调休上班日期">
                </el-table-column>
                <el-table-column
                prop="status"
                label="放假天数">
                </el-table-column>
            </el-table>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '元旦',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '提交'
      }, {
        date: '春节',
        name: '春节',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '已终止'
      }, {
        date: '清明节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '劳动节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '端午节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '国庆节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '元旦',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '提交'
      }, {
        date: '春节',
        name: '春节',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '已终止'
      }, {
        date: '清明节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '劳动节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '端午节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '国庆节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '元旦',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '提交'
      }, {
        date: '春节',
        name: '春节',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '已终止'
      }, {
        date: '清明节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '劳动节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '端午节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '国庆节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '元旦',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '提交'
      }, {
        date: '春节',
        name: '春节',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '已终止'
      }, {
        date: '清明节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '劳动节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '端午节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '国庆节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '元旦',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '提交'
      }, {
        date: '春节',
        name: '春节',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '已终止'
      }, {
        date: '清明节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '劳动节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }, {
        date: '端午节',
        name: '清明节',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '进行中'
      }, {
        date: '国庆节',
        name: '劳动节',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '作废'
      }]
    }
  },
  mounted () {},
  methods: { }
}
</script>
<style scoped lang="less">
    .main{
        height:100%;
        padding:30px;
        background-color: #c8e2f3;
        .top{
            .title{
              margin-bottom:20px;
            }
        }
        .content{
            .title{
                margin:20px 0;
            }
        }
    }
</style>
