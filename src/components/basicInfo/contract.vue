<template>
    <div class="main">
      <div class="top">
          <div class="title">
              <span><i class="el-icon-news"></i>合同状态</span>
          </div>
            <el-row :gutter="20">
                <el-col :span="6">
                    <router-link to="contractDetails">
                        <el-card shadow="hover" :body-style="{ padding: '40px 0px 40px 120px',color: '#fac344',font: '20px bold' }">
                            <i class="el-icon-document"></i>
                            <span>已提交 234</span>
                        </el-card>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link to="contractList">
                        <el-card shadow="hover" :body-style="{ padding: '40px 0px 40px 120px',color: '#5b86ff',font: '20px bold' }">
                            <i class="el-icon-document"></i>
                            <span>已终止 234</span>
                        </el-card>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover" :body-style="{ padding: '40px 0px 40px 120px',color: '#449f20',font: '20px bold' }">
                        <i class="el-icon-document"></i>
                        <span>进行中 234</span>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover" :body-style="{ padding: '40px 0px 40px 120px',color: '#9e9e9e',font: '20px bold' }">
                        <i class="el-icon-document"></i>
                        <span>作废 234</span>
                    </el-card>
                </el-col>
            </el-row>
      </div>
      <div class="content">
           <div class="title">
               <span><i class="el-icon-news"></i>最近合同</span>
           </div>
           <el-table
                :data="tableData"
                stripe
                max-height="573"
                style="width: 100%">
                <el-table-column
                prop="date"
                label="合同标题"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="合同编号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="更新时间">
                </el-table-column>
                <el-table-column
                prop="status"
                label="合同状态">
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
