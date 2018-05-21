<template>
    <div class="header">
        <el-col :span="5">
            <div class="logo">云考勤博纳德</div>
        </el-col>
        <el-col :span="5">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="14">
            <div class="userimgbox">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <img class="userimg" src="../../assets/1.jpg">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item>我的主页</el-dropdown-item>
                    <el-dropdown-item>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-col>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input5: ''
    }
  }
}
</script>
<style scoped lang="less">
  .header{
    height:60px;
    line-height:60px;
    width:100%;
    background-color: #414346;
    color:#fff;
    .logo{
        float:left;
        margin-left:50px;
    }
    .userimgbox{
        float:right;
        margin-right:50px;
        .el-dropdown-link{
            .userimg{
                height:50px;
                border-radius:100%;
                outline:none;
                vertical-align:middle;
            }
        }
    }
    }
</style>
