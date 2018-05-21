<template>
  <!-- 各部门人员 -->
  <div class="DepartmentPersonnel">

    <!-- header -->
    <div class="header">
      <div class="hl">
        <i class="fa fa-address-card-o"></i>
        <select name="" id="">
          <option value="">- 请选择 -</option>
          <option value="">博纳德信息</option>
          <option value="">数融通科技</option>
        </select>
      </div>
      <div class="hr">
        <a href="javascript:void(0)">新增</a>
        <span>|</span>
        <a href="javascript:void(0)">批量导入</a>
        <span>|</span>
        <a href="javascript:void(0)">跟多操作</a>
      </div>
    </div>

    <!-- searchCtr -->
    <div class="searchCtr">
      <div class="serBox iptBox"><input type="text" placeholder="人员编号"></div>
      <div class="serBox iptBox"><input type="text" placeholder="姓名"></div>
      <div class="serBox iptBox"><input type="text" placeholder="表示卡编号"></div>
      <div class="serBox slBox">
        <span>人员类型:</span>
        <select name="" id="">
          <option value="">- 请选择 -</option>
        </select>
      </div>
      <div class="serBox slBox">
        <span>职位:</span>
        <select name="" id="">
          <option value="">- 请选择 -</option>
        </select>
      </div>
      <div class="serBox slBox">
        <span>离职:</span>
        <select name="" id="">
          <option value="">- 请选择 -</option>
        </select>
      </div>
      <div class="btnBox">
        <a href="javascript:void(0)">搜索</a>
        <span>|</span>
        <a href="javascript:void(0)">重置</a>
      </div>
    </div>

    <div class="dataBox" id="dataCtr">

      <div class="dataHeader">
        <table border=1>
          <thead>
            <tr>
              <td>序号</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
          </thead>
        </table>
      </div>

      <div class="dataTable">
        <table border=1>
          <thead>
            <tr>
              <td>1</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
            <tr>
              <td>2</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
            <tr>
              <td>3</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
            <tr>
              <td>4</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
            <tr>
              <td>5</td>
              <td>头像</td>
              <td>人员编号</td>
              <td>姓名</td>
              <td>银行卡号</td>
              <td>工资</td>
              <td>职位</td>
              <td>所属部门</td>
              <td>性别</td>
              <td>电话</td>
              <td>民族</td>
              <td>籍贯</td>
              <td>出生日期</td>
              <td>联系地址</td>
              <td>电子邮箱</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepartmentPersonnel',
  data() {
    return {}
  },
  methods: {
    setCss() {
      document.getElementById('main').style.height =
        document.body.clientHeight - 100 + 'px'
      document.getElementById('mainRouterView').style.height =
        document.getElementById('main').clientHeight - 30 + 'px'
      document.getElementById('dataCtr').style.height =
        document.getElementById('mainRouterView').clientHeight - 120 + 'px'
    }
  },
  mounted: function() {
    var self = this
    setTimeout(function() {
      self.setCss()
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 设置滚动条样式 */
::-webkit-scrollbar {
  width: 2px;
  height: 15px;
  background-color: #f5f5f5;
}

.el-scrollbar__bar,
.is-horizontal {
  display: none;
}

.DepartmentPersonnel {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
}
/* header */
.DepartmentPersonnel .header {
  width: 97.5%;
  height: 50px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0.5% 0 0;
  margin: 0 auto;
  overflow: hidden;
}
.DepartmentPersonnel .header .hl {
  float: left;
}
.DepartmentPersonnel .header .hr {
  float: right;
}
/* searchCtr */
.DepartmentPersonnel .searchCtr {
  width: 98%;
  height: 50px;
  background: #ddf0ff;
  margin: 0 auto;
}
.DepartmentPersonnel .searchCtr .serBox {
  height: 32px;
  line-height: 32px;
  background: #fff;
  float: left;
  margin: 9px 0 0 8px;
  border-radius: 3px;
  overflow: hidden;
}
.DepartmentPersonnel .searchCtr .iptBox {
  width: 140px;
}
.DepartmentPersonnel .searchCtr .iptBox input {
  width: 130px;
  height: 100%;
  padding: 0 5px;
  display: block;
}
.DepartmentPersonnel .searchCtr .slBox {
  width: auto;
  padding: 0 5px;
}
.DepartmentPersonnel .searchCtr .slBox span {
  float: left;
}
.DepartmentPersonnel .searchCtr .slBox select {
  width: 120px;
  height: 100%;
  float: left;
}
.DepartmentPersonnel .searchCtr .btnBox {
  height: 32px;
  line-height: 32px;
  float: left;
  margin: 9px 0 0 8px;
}

.DepartmentPersonnel .dataBox {
  width: 98%;
  height: 520px;
  margin: 5px auto 0;
  position: relative;
}
.DepartmentPersonnel .dataBox table {
  width: 100%;
  text-align: center;
  border: 1px solid #f6f6f6;
  table-layout: fixed;
}
.DepartmentPersonnel .dataBox table tr {
  height: 38px;
  line-height: 36px;
}
.DepartmentPersonnel .dataBox table tr:nth-child(2n) {
  background: #f6fbff;
}
.DepartmentPersonnel .dataBox .dataHeader {
  width: 100%;
  height: 38px;
  line-height: 36px;
  background: #e8e8e8;
  position: absolute;
  left: 0;
  top: 0;
}
.DepartmentPersonnel .dataBox .dataHeader table {
  border: 1px solid #f6f6f6;
}
.DepartmentPersonnel .dataBox .dataTable {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
