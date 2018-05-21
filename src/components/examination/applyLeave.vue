<template>
    <div class="main">
        <div class="content">
            <el-tabs v-model="activeUser" @tab-click="handleClick" type="card">
                <el-tab-pane label="未处理" name="work">
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
                    <el-row :gutter="20">
                        <el-col :span="4">                            
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content"  @click="dialogVisible = true">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>                                  
                                </div>
                                 <el-button type="primary" plain>同意</el-button>
                                 <el-button type="primary" plain>拒绝</el-button>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#effafe' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
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
                                    <span>请假申请</span>
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
                                    <span>请假申请</span>
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
                                    <span>请假申请</span>
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
                                    <span>请假申请</span>
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
                </el-tab-pane>
                <el-tab-pane label="已同意" name="days">
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
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#effafe' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#f0ffe2' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                   <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2fffb' }">                       
                                <div class="card-content"> 
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="success">已同意</el-button>
                                </div>
                            </el-card>
                        </el-col>                  
                    </el-row>
                </el-tab-pane> 
                <el-tab-pane label="已拒绝" name="unnormal">
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
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#effafe' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#f0ffe2' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                   <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2edff' }">                       
                                <div class="card-content">
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="4">
                            <el-card :body-style="{ padding: '0px',backgroundColor: '#e2fffb' }">                       
                                <div class="card-content"> 
                                    <span>请假申请</span>
                                    <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                                    <p><span>姓名：</span>XXX</p>
                                    <p><span>缺卡原因：</span>入职</p>
                                    <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p>
                                    <el-button type="danger">已拒绝</el-button>
                                </div>
                            </el-card>
                        </el-col>                  
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <!-- 对话框 -->
            <transition name="el-fade-in-linear">
                 <div class="dialog-wrap" v-show="dialogVisible">
                    <div class="dialog-content">
                        <div class="dialog-header">
                            <span class="title">xxx的请假申请</span>
                        </div>
                        <div class="dialog-body">
                            <img src="../management/01.png" alt="">
                            <div>这是一段信息</div>
                            <div>审批通过</div>
                            <hr>
                            <time class="time" style="font-size:12px;">{{ currentDate }}</time>
                            <p><span>审批编号：</span>201851515010050206</p>
                            <p><span>所在部门：</span>开发部</p>
                            <p><span>姓名：</span>XXX</p>
                            <p><span>请假班次：</span>2018-05-14  星期一 白班</p>
                            <p><span>缺卡时间：</span>2018-05-14  13：30-15：30</p> 
                            <p><span>缺卡原因：</span>入职</p> 
                        </div>
                        <div class="dialog-footer">
                            <el-button @click="dialogVisible = false">同意</el-button>
                            <el-button type="primary" @click="dialogVisible = false">拒绝</el-button>
                        </div>
                    </div>
                </div>
            </transition>          
            <!-- 对话框 -->
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
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
  mounted() {},
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {
      console.log('submit!')
    },
    handleChange(value) {
      console.log(value)
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
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
    .el-row {
      height: 510px;
      overflow-y: auto;
      overflow-x: hidden;
      .el-col {
        margin: 20px 0;
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
    .dialog-wrap {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
      margin: 0;
      background: rgba(170, 25, 25, 0.3);
      z-index: 2006;
      .dialog-content {
        width: 30%;
        position: relative;
        margin: 0 auto 50px;
        background: #fff;
        border-radius: 2px;
        margin-top: 20vh;
        border-radius: 14px;
        .dialog-header {
          text-align: center;
          // background-color: rgb(77, 130, 201);
          height: 50px;
          line-height: 50px;
          font-size: 20px;
        }
        .dialog-body {
          line-height: 2;
          padding: 14px;
          img {
            width: 11%;
            float: left;
          }
        }
        .dialog-footer {
          text-align: center;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>