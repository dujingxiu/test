
<template>
    <div class="side">
        <el-col :span="3">
            <div class="aside">
                <el-menu :default-active="$route.path"  class="el-menu-vertical-demo" background-color="#414346" text-color="#fff" unique-opened="true"  router>
                    <template v-for="bitem in billitem">
                        <template v-if="bitem.sublist">
                            <el-submenu :index="bitem.index" :key="bitem.index">
                                <template slot="title"><i :class="bitem.icon"></i>{{bitem.title}}</template>
                                <template v-for="(subitem,myindex) in bitem.sublist" v-if="subitem.sublists">
                                    <el-submenu :index="subitem.topath" :key="myindex" >  
                                        <template slot="title">{{subitem.title}}</template>                   
                                        <el-menu-item v-for="(aitem, aindex) in subitem.sublists" :index="aitem.topath" :key="aindex">{{aitem.title}}</el-menu-item>
                                    </el-submenu>
                                </template>                                 
                                <template v-for="(subitem,myindex) in bitem.sublist" v-if="!subitem.sublists">
                                    <el-menu-item :index="subitem.topath" :key="myindex">
                                        {{subitem.title}}
                                    </el-menu-item>
                                </template>                                                                                             
                            </el-submenu>
                        </template>                                                                                   
                        <template v-else>
                            <el-menu-item  :index="bitem.index" :key="bitem.index">
                            <i :class="bitem.icon"></i>
                            {{bitem.title}}
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </div>
        </el-col>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      billitem: [
        {
          icon: 'el-icon-menu',
          index: '/home',
          title: '首页'
        },
        {
          icon: 'el-icon-document',
          index: '1',
          title: '基本信息',
          sublist: [
            {
              topath: '/Information',
              title: '信息录入'
            },
            {
              topath: '1-2',
              title: '组织机构',
              sublists: [
                {
                  topath: '/socialSecurity',
                  title: '社保公积金'
                },
                {
                  topath: '/contract',
                  title: '合同管理'
                },
                {
                  topath: '/IndustInfo',
                  title: '工伤信息'
                },
                {
                  topath: '/departure',
                  title: '离职信息'
                },
                {
                  topath: '/organization',
                  title: '博纳德'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-time',
          index: '2',
          title: '考勤管理',
          sublist: [
            {
              topath: '/scheduling',
              title: '职能排班'
            },
            {
              topath: '/Shift',
              title: '轮班管理'
            },
            {
              topath: '/holiday',
              title: '假期管理'
            }
          ]
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '云薪资',
          sublist: [
            {
              topath: '/Compensation',
              title: '薪资算法'
            },
            {
              topath: '11111',
              title: '个税计算'
            },
            {
              topath: '22222',
              title: '薪资待发'
            }
          ]
        },
        {
          icon: 'el-icon-star-off',
          index: '4',
          title: '审批事项',
          sublist: [
            {
              topath: '/overview',
              title: '审批事项总览'
            },
            {
              topath: '/fillCard',
              title: '补卡申请'
            },
            {
              topath: '/applyLeave',
              title: '请假申请'
            },
            {
              topath: '/overtime',
              title: '加班申请'
            },
            {
              topath: '/paidLeave',
              title: '调休申请'
            },
            {
              topath: '/purchase',
              title: '物品申购申请'
            },
            {
              topath: '/applyCar',
              title: '用车申请'
            },
            {
              topath: '/items',
              title: '物品申领申请'
            },
            {
              topath: '/field',
              title: '外勤申请'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: '5',
          title: '人力资源',
          sublist: [
            {
              topath: '/dailyStatistics',
              title: '各部门人员'
            },
            {
              topath: '/monthlyStatistics',
              title: '性别分布'
            },
            {
              topath: '/Staff',
              title: '学历情况'
            },
            {
              topath: '/Attendance',
              title: '报表统计'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: '6',
          title: '系统维护',
          sublist: [
            {
              topath: '/equipment',
              title: '设备管理'
            },
            {
              topath: '/permissions',
              title: '权限管理'
            },
            {
              topath: '/user',
              title: '用户管理'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes: function() {
      console.log(this.$route.path)
      return this.$route.path.replace('/', '') //$route.path表示当前路由，:index能直接跳转路由
    }
  }
}
</script>

<style scoped lange="less">
.aside {
  margin-top: -1px;
  height: calc(100vh - 60px);
  background-color: #414346;
}
.el-menu-vertical-demo {
  border: none;
}
</style>
