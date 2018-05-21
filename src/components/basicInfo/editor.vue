<template>
    <div class="main">
      <div class="content">
            <div class="back"  @click="back">
                <a href="#">
                    <i class="el-icon-arrow-left"></i>
                    <span>返回</span>
                </a>
            </div>
             <div class="search-content">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="">
                        <el-input v-model="formInline.user" placeholder="合同编号："></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-select v-model="person.size" placeholder="合同类型">
                        <el-option label="5" value="5"></el-option>
                        <el-option label="6" value="6"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="formInline.user" placeholder="合同名称："></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">编辑</el-button>
                        <el-button type="primary" @click="onSubmit">新建</el-button>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button type="primary" @click="onSubmit">盖章</el-button>
                        <el-button type="primary" @click="onSubmit">打印</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="page">
                <h2>劳动合同终止协议</h2>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 搜索条件相关
      formInline: {
        user: '',
        region: ''
      },
      person: {
        type: '',
        position: '',
        size: ''
      }
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
    .main{
        height:100%;
        padding:30px;
        background-color: #fff;
        .content{
            .back{
                a:hover{
                    cursor: pointer;
                }
            }
            .search-content{
                background-color: #ddf0ff;
                padding:10px 15px;
                .el-form-item{
                    margin-bottom:0;
                }
            }
            .page{
                height: 650px;
                width: 500px;
                border-radius: 10px;
                box-shadow: 3px 3px 24px 5px #b8b5b5;
                margin: 20px auto;
                text-align: center;
                }
            }
        }
</style>
