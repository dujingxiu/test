<template>
    <div class="main">
        <div class="attendance">
            <div class="top">
                <div class="title">                  
                    <span><i class="el-icon-service"></i>数融通科技</span>
                    <span>机构名称：博纳德</span>
                    <span>机构编码：OA001</span>
                    <span>备注：</span>
                </div>
                <ul class="set">
                    <li><el-button type="text" @click="dialogFormVisible = true">新增机构</el-button></li>
                    <li class="middle"><el-button type="text">批量导入</el-button></li>
                    <li><el-button type="text">更多操作</el-button></li>
                </ul>
            </div>
            <div class="search-content">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="">
                        <el-input v-model="formInline.user" placeholder="职位编号："></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="formInline.user" placeholder="职位名称："></el-input>
                    </el-form-item>                                   
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">重置</el-button>
                    </el-form-item>
                </el-form>
            </div> 
            <div class="table-content">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    max-height="632"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    type="index"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    label="职位编号"
                    width="160">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="职位名称"
                    width="160">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="所属机构"
                    width="250"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    label="备注">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>                                   
                </el-table>
            </div>  
             <el-collapse-transition>
                <div class="bottom" v-show="isBottom">
                    <el-row>
                        <el-button>删除</el-button>
                        <el-button type="primary">冻结</el-button>
                        <el-button type="success">还原</el-button>
                        <el-button type="info">发卡</el-button>
                        <el-button type="warning">收卡</el-button>
                        <el-button type="danger">人员职位配置</el-button>
                        <el-button type="primary">导出</el-button>
                    </el-row>
                </div> 
            </el-collapse-transition>       
        </div>
        <!-- 新增对话框 -->
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
        <!-- 新增对话框 -->
    </div>
</template>

<script>
export default {
data () {
    return {
        // 新增对话框相关
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
        formLabelWidth: '120px',
        // 新增对话框相关
        // 搜索条件相关
        formInline: {
            user: '',
            region: ''
            },
        person: {
            type: '',
            position: '',
            size: '',
        },
        // 搜索条件相关
        // 表单相关信息
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        // 表单相关信息
        isBottom: false
    }
},
mounted () {},
methods: {
  onSubmit() {
    console.log('submit!');
  },
  toggleSelection(rows) {
    if (rows) {
        rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row);
        });
    } else {
        this.$refs.multipleTable.clearSelection();
    }
},
handleSelectionChange(val) {
    console.log(val)
    if (val.length > 0) {
        this.isBottom = true;
    } else {
        this.isBottom = false;
    }
    this.multipleSelection = val;
}
 }
}
</script>



<style scoped lang="less">
    .main{
        height:100%;
        padding:30px;
        background-color: #c8e2f3;
        .attendance{
            // height:300px;
            background-color: #fff;
            padding:30px;
            .top{
                overflow:hidden;
                border-bottom: 1px solid #c2c2c2;
                padding-bottom: 10px;
                .title{
                    float:left;
                    color:#626262;
                    span{
                        margin-right:50px;
                    }
                }
                .set{
                    float:right;
                    li{
                        float:left; 
                        padding:0 10px; 
                        .el-button{
                            font-size:16px;
                            padding:0;
                        }                    
                    }
                    .middle{                       
                        border-right:2px solid #1c7ada;
                        border-left:2px solid #1c7ada;
                    }
                }
            }
            .search-content{
                background-color: #ddf0ff;
                padding:10px 20px;
                .el-form-item{
                    margin-bottom:0;
                }
            }
            .bottom{
                height: 60px;
                margin-top: 30px;
                background-color: #ddf0ff;
                border-radius: 10px;
                line-height: 60px;
                padding-left: 16px;
            }
        }
    }
</style>