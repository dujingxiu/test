<template>
  <!-- 人员统计 -->
  <div id="main">
  <div id="mainRouterView">
  <div class="SexDistribution">

    <!-- maxTop -->
    <div class="maxTop pageChild" id='maxTop'>

      <div class="mtHeader">
        <div class="title">
          <i class="fa fa-address-card"></i>
          <span>性别分布</span>
        </div>
      </div>

      <div class="ecBox" id="ec1"></div>

    </div>

    <!-- maxBtm -->
    <div class="maxBtm pageChild" id="btmCtr">
      <div class="mbHeader">
        <ul>
          <!-- '数融通科技', '财务部', '人力资源部', '行政部', '业管部', '业务部', '销售部', '后勤部', 'IT部', '营销部', '运营推广部', '其它' -->
          <li><a href="javascript:void(0)">数融通科技</a></li>
          <li><a href="javascript:void(0)">财务部</a></li>
          <li><a href="javascript:void(0)">人力资源部</a></li>
          <li><a href="javascript:void(0)">行政部</a></li>
          <li><a href="javascript:void(0)">业管部</a></li>
          <li><a href="javascript:void(0)">业务部</a></li>
          <li><a href="javascript:void(0)">销售部</a></li>
          <li><a href="javascript:void(0)">后勤部</a></li>
          <li><a href="javascript:void(0)">IT部</a></li>
          <li><a href="javascript:void(0)">营销部</a></li>
          <li><a href="javascript:void(0)">运营推广部</a></li>
          <li><a href="javascript:void(0)">其它</a></li>
        </ul>
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

  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SexDistribution',
  data() {
    return {
      msg: '性别分布'
    }
  },
  methods: {
    setCss() {
      document.getElementById('main').style.height =
        document.body.clientHeight - 60 + 'px'
      document.getElementById('mainRouterView').style.height =
        document.getElementById('main').clientHeight - 30 + 'px'
      // 设置第一个图表高度
      document.getElementById('ec1').style.height =
        document.getElementById('maxTop').clientHeight - 50 + 'px'
      document.getElementById('dataCtr').style.height =
        document.getElementById('btmCtr').clientHeight - 110 + 'px'
    },
    makeBar: function() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('ec1'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: [
            '数融通科技',
            '财务部',
            '人力资源部',
            '行政部',
            '业管部',
            '业务部',
            '销售部',
            '后勤部',
            'IT部',
            '营销部',
            '运营推广部',
            '其它'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 188, 158, 125, 132],
            type: 'bar',
            itemStyle: {
              normal: {
                // 柱形条颜色
                color: '#6a00d6',
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}',
                  color: '#fff',
                  fontSize: 8
                },
                areaStyle: { type: 'default' }
              }
            }
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 188, 158, 125, 132],
            type: 'bar',
            itemStyle: {
              normal: {
                // 柱形条颜色
                color: '#dcb0ff',
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}',
                  color: '#fff',
                  fontSize: 8
                },
                areaStyle: { type: 'default' }
              }
            }
          }
        ],
        // 柱条宽度
        barWidth: '20',
        // 柱条间距
        barGap: '0'
      })
    }
  },
  mounted: function() {
    var self = this
    setTimeout(function() {
      self.setCss()
      self.makeBar()
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SexDistribution {
  width: 100%;
  height: 100%;
}
.SexDistribution i {
  vertical-align: text-bottom;
  margin-right: 0;
}
.SexDistribution .pageChild {
  width: 100%;
  height: 49.5%;
}

/* maxTop */
.SexDistribution .maxTop {
  margin-bottom: 0.5%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.SexDistribution .maxTop .mtHeader {
  width: 96%;
  height: 50px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 auto;
}
.SexDistribution .maxTop .mtHeader .title {
  font-weight: 600;
  font-size: 16px;
  float: left;
}

.SexDistribution .maxTop .ecBox {
  width: 116%;
  position: absolute;
  left: 50%;
  margin-left: -57%;
  bottom: 0;
}

/* maxBtm */
.SexDistribution .maxBtm {
  margin-bottom: 0.5%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.SexDistribution .maxBtm .mbHeader {
  width: 96%;
  height: 50px;
  line-height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.SexDistribution .maxBtm .mbHeader ul {
  width: 100%;
}
.SexDistribution .maxBtm .mbHeader ul li {
  width: 8.33333%;
  text-align: center;
  float: left;
}
.SexDistribution .maxBtm .mbHeader ul li a {
  display: block;
}

/* searchCtr */
.SexDistribution .searchCtr {
  width: 98%;
  height: 50px;
  background: #ddf0ff;
  margin: 0 auto;
}
.SexDistribution .searchCtr .serBox {
  height: 32px;
  line-height: 32px;
  background: #fff;
  float: left;
  margin: 9px 0 0 8px;
  border-radius: 3px;
  overflow: hidden;
}
.SexDistribution .searchCtr .iptBox {
  width: 140px;
}
.SexDistribution .searchCtr .iptBox input {
  width: 130px;
  height: 100%;
  padding: 0 5px;
  display: block;
}
.SexDistribution .searchCtr .slBox {
  width: auto;
  padding: 0 5px;
}
.SexDistribution .searchCtr .slBox span {
  float: left;
}
.SexDistribution .searchCtr .slBox select {
  width: 120px;
  height: 100%;
  float: left;
}
.SexDistribution .searchCtr .btnBox {
  height: 32px;
  line-height: 32px;
  float: left;
  margin: 9px 0 0 8px;
}

.SexDistribution .dataBox {
  width: 98%;
  height: 520px;
  margin: 5px auto 0;
  position: relative;
}
.SexDistribution .dataBox table {
  width: 100%;
  text-align: center;
  border: 1px solid #f6f6f6;
  table-layout: fixed;
}
.SexDistribution .dataBox table tr {
  height: 38px;
  line-height: 36px;
}
.SexDistribution .dataBox table tr:nth-child(2n) {
  background: #f6fbff;
}
.SexDistribution .dataBox .dataHeader {
  width: 100%;
  height: 38px;
  line-height: 36px;
  background: #e8e8e8;
  position: absolute;
  left: 0;
  top: 0;
}
.SexDistribution .dataBox .dataHeader table {
  border: 1px solid #f6f6f6;
}
.SexDistribution .dataBox .dataTable {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

