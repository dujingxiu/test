<template>
    <div class="main">
        <div class="content">
            <el-tabs v-model="activeUser" @tab-click="handleClick">
                <el-tab-pane label="早班（9：00-12：00）" name="work">
                    <div class="search-content">
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">                            
                            <el-form-item label="">
                                <el-input v-model="formInline.user" placeholder="职位编号："></el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-select v-model="formInline.region" placeholder="所属部门">
                                    <el-option label="1" value="1"></el-option>
                                    <el-option label="2" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="">
                                <el-input v-model="formInline.user" placeholder="姓名："></el-input>
                            </el-form-item>                                   
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">查询</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="number">
                        <div class="right">                               
                            <span class="small"><i class="el-icon-menu"></i>早班（9：00-12：00）</span>
                            <span class="middle"><i class="el-icon-menu"></i>中班（13：30-18：00）</span>
                            <span class="big"><i class="el-icon-menu"></i>晚班（19：00-23：00）</span>
                        </div>                                
                        <div class="left">                                    
                            <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </div>                               
                    </div>
                    <el-table
                        border
                        ref="singleTable"
                        :data="tableData2"
                        highlight-current-row 
                        @current-change="handleCurrentChange"
                        style="width: 100%"
                        max-height="570">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="编号"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="所属部门">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="星期一"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="星期二"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="星期三">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="星期四"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="星期五"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="星期六">
                        </el-table-column>
                            <el-table-column
                        property="address"
                        label="本月累计（小时）">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="中班（13：30-18：00）" name="days">
                    <div class="search-content">
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                            <el-form-item label="">
                                <el-select v-model="formInline.region" placeholder="部门">
                                    <el-option label="1" value="1"></el-option>
                                    <el-option label="2" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="">
                                <el-input v-model="formInline.user" placeholder="姓名："></el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-input v-model="formInline.user" placeholder="编号："></el-input>
                            </el-form-item>                                   
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">查询</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="number">
                        <div class="left">
                            <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                        </div>                                
                        <div class="right">                                    
                            <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </div>                               
                    </div>
                    <el-table
                        border
                        ref="singleTable"
                        :data="tableData2"
                        highlight-current-row 
                        @current-change="handleCurrentChange"
                        style="width: 100%"
                        max-height="570">
                        <el-table-column
                        type="index"
                        width="50">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="编号"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="所属部门">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="星期一"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="星期二"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="星期三">
                        </el-table-column>
                        <el-table-column
                        property="date"
                        label="星期四"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="name"
                        label="星期五"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        property="address"
                        label="星期六">
                        </el-table-column>
                            <el-table-column
                        property="address"
                        label="本月累计（小时）">
                        </el-table-column>
                    </el-table>
                </el-tab-pane> 
                <el-tab-pane label="晚班（19：00-23：00）" name="unnormal">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="部门/小组" prop="rule">
                            <el-cascader
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                            </el-cascader>
                        </el-form-item>
                        <el-form-item label="职位" prop="region">
                            <el-select v-model="form.region" placeholder="选择职位">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="姓名" prop="name">
                            <el-col :span="5">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="固定休息" prop="type">>
                            <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox label="星期一" name="type"></el-checkbox>
                                <el-checkbox label="星期二" name="type"></el-checkbox>
                                <el-checkbox label="星期三" name="type"></el-checkbox>
                                <el-checkbox label="星期四" name="type"></el-checkbox>
                                <el-checkbox label="星期五" name="type"></el-checkbox>
                                <el-checkbox label="星期六" name="type"></el-checkbox>
                                <el-checkbox label="星期日" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="选择班次" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="早班9：00-12：00"></el-radio>
                            <el-radio label="中班13：30-18：00"></el-radio>
                            <el-radio label="晚班19：00-23：00"></el-radio>
                            </el-radio-group>
                        </el-form-item>                              
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectedOptions: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      radio2: 3,
      activeName: 'first',
      activeUser: 'work',
      num: '',
      value: '2018-05-08',
      form: {
        region: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      // 新增对话框相关
      dialogFormVisible: false,
      form2: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      ruleForm: {
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
      tableData: [
        {
          date: '早班 9：00-12：00',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '中班 13：30-18：00',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '晚班19：30-22：00',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      tableData2: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentRow: null,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        rule: [{ required: true, message: '请选择部门', trigger: 'change' }],
        region: [{ required: true, message: '请选择职位', trigger: 'change' }],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  mounted () {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      console.log('submit!')
    },
    handleChange (value) {
      console.log(value)
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
  padding: 30px;
  background-color: #c8e2f3;
  .content {
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 10px;
    .search-content {
      background-color: #ddf0ff;
      padding: 10px 20px;
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .number {
      padding: 10px 0;
      overflow: hidden;
      .left {
        float: left;
      }
      .right {
        float: right;
        .small {
          color: #d8124d;
        }
        .middle {
          color: #23c546;
        }
        .big {
          color: #060aeb;
        }
      }
    }
  }
}
</style>
