<template>
  <div class="main">
    <div class="title">
      <span><i class="el-icon-setting"></i>权限管理</span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>普通管理员</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="centerDialogVisible = true">权限设置</el-button>
      </div>
      <div class="text item" style="overflow:hidden">
        <div style="text-align:center;float:left;margin:0 10px;">
          <img src="../../assets/icon01.png" alt="">
          <div>XXX</div>
        </div> 
        <div style="text-align:center;float:left;margin:0 10px;">
          <img src="../../assets/icon01.png" alt="">
          <div>XXX</div>
        </div> 
        <div style="text-align:center;float:left;margin-left:-20px;cursor:pointer;" @click="dialogFormVisible = true">
          <img src="../../assets/add.png" alt="" style="width:30%">
          <div>添加普通管理员</div>
        </div> 
      </div>
    </el-card>
    <!-- 添加管理员对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加管理员对话框 -->

<!-- 权限设置对话框 -->
    <el-dialog title="收货地址" :visible.sync="centerDialogVisible" center>
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
<!-- 权限设置对话框 -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        centerDialogVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    }
  }
</script>
<style scoped lang="less">
.main{
  height:100%;
  padding:30px;
  background-color: #c8e2f3;
}
</style>

