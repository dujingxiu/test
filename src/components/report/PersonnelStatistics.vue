<template>
  <!-- 人员统计 -->
  <div class="PersonnelStatistics">

    <!-- maxTop -->
    <div class="maxTop pageChild" id='maxTop'>

      <div class="mtHeader">
        <div class="title">
          <i class="fa fa-address-card"></i>
          <span>人员统计</span>
        </div>
      </div>

      <div class="ecBox" id="ec1"></div>

    </div>

    <!-- maxBtm -->
    <div class="maxBtm pageChild">
      <div class="mbChild mbLeft" id="mbChilds">

        <div class="title">
          <i class="fa fa-user-times"></i>
          <span>离职人员统计</span>
        </div>

        <div class="mcBtm" id="mcBtm1"></div>

      </div>
      <div class="mbChild mbRight">

        <div class="title">
          <i class="fa fa-user-plus"></i>
          <span>人员需求</span>
        </div>

        <div class="mcBtm" id="mcBtm2">
          <ul>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
            <li>
              <img src="../../../assets/img/PersonnelStatistics/icon01.png">
              <p>UI设计（2）</p>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PersonnelStatistics',
  data() {
    return {
      msg: '人员统计'
    }
  },
  methods: {
    setCss() {
      document.getElementById('main').style.height =
        document.body.clientHeight - 100 + 'px'
      document.getElementById('mainRouterView').style.height =
        document.getElementById('main').clientHeight - 30 + 'px'
      // 设置第一个图表高度
      document.getElementById('ec1').style.height =
        document.getElementById('maxTop').clientHeight - 50 + 'px'
      document.getElementById('mcBtm1').style.height =
        document.getElementById('mbChilds').clientHeight - 50 + 'px'
      document.getElementById('mcBtm2').style.height =
        document.getElementById('mbChilds').clientHeight - 50 + 'px'
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
                color: '#ff7f00',
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
                color: '#ffd4af',
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
    },
    drawLine() {
      var option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [980, 1380, 820, 1250, 901],
            type: 'line',
            areaStyle: {},
            itemStyle: {
              normal: {
                // 柱形条颜色
                color: '#0068ff',
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
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('mcBtm1'))
      myChart.setOption(option)
    }
  },
  mounted: function() {
    var self = this
    setTimeout(function() {
      self.setCss()
      self.makeBar()
      self.drawLine()
    }, 10)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PersonnelStatistics {
  width: 100%;
  height: 100%;
}
.PersonnelStatistics i {
  vertical-align: text-bottom;
  margin-right: 0;
}
.PersonnelStatistics .pageChild {
  width: 100%;
  height: 49.5%;
}

/* maxTop */
.PersonnelStatistics .maxTop {
  margin-bottom: 0.5%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.PersonnelStatistics .maxTop .mtHeader {
  width: 96%;
  height: 50px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 auto;
}
.PersonnelStatistics .maxTop .mtHeader .title {
  font-weight: 600;
  font-size: 16px;
  float: left;
}

.PersonnelStatistics .maxTop .ecBox {
  width: 116%;
  position: absolute;
  left: 50%;
  margin-left: -57%;
  bottom: 0;
}

/* maxBtm */
.PersonnelStatistics .maxBtm {
  margin-bottom: 0.5%;
}
.PersonnelStatistics .maxBtm .mbChild {
  width: 49.75%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  float: left;
}
.PersonnelStatistics .maxBtm .mbChild .title {
  width: 96%;
  height: 50px;
  line-height: 60px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 auto;
}
.PersonnelStatistics .maxBtm .mbChild .mcBtm {
  width: 100%;
}
#mcBtm2 ul {
  width: 96%;
  height: 92%;
  padding: 2% 1%;
  margin: 0 auto;
}
#mcBtm2 ul li {
  width: 25%;
  height: 50%;
  float: left;
}
#mcBtm2 ul li img {
  display: block;
  margin: 20% auto 10%;
}
#mcBtm2 ul li p {
  text-align: center;
}

.PersonnelStatistics .maxBtm .mbLeft {
  margin-right: 0.5%;
}
</style>
