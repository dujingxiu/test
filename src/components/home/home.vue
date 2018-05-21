<template>
  <div id="Main">
    <!-- 我是首页 -->
    <div class="indexContainer">

      <!-- maxTop -->
      <div class="maxTop">

        <div class="header">
          <div class="title">出勤月历</div>
          <div class="date">2018-05</div>
        </div>

        <div class="ecBox" id="ec1"></div>

      </div>

      <!-- maxBtm -->
      <div class="maxBtm">

        <div class="btmChild btmLeft">
          <div class="bl_title">
            <div class="blt_left">
              <p>人员出勤</p>
            </div>
            <div class="blt_right">
              <p>2018-05-09</p>
            </div>
          </div>

          <div class="bl_main">
            <div class="bm_left">
              <div id="ec2"></div>
              <div class="info">
                <p>100/80</p>
                <p>出勤人数</p>
              </div>
            </div>
            <div class="bm_right">
              <table>
                <tbody>
                  <tr>
                    <td><p>迟到</p><p>10</p></td>
                    <td><p>早退</p><p>10</p></td>
                    <td><p>旷工</p><p>10</p></td>
                  </tr>
                  <tr>
                    <td><p>外勤</p><p>10</p></td>
                    <td><p>未排班</p><p>10</p></td>
                    <td><p>缺卡</p><p>10</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="btmChild btmRight">
          <div class="bl_title">
            <div class="blt_left">
              <p>人员出勤</p>
            </div>
            <div class="blt_right">
              <p>2018-05-09</p>
            </div>
          </div>

          <div class="br_main" id="ec3"></div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main'
    }
  },
  methods:{
    setCss:function(){

      // 设置 main 高度
      $("#Main").height($(window).height() - 130);

      var ctrWidth = $('#Main').width() - 30;
      var ctrHeight = $('#Main').height() - 30;

      $(".indexContainer").css({
        width : ctrWidth,
        height : ctrHeight,
      });

      $(".indexContainer .maxTop .ecBox").css({
        height:$('.indexContainer .maxTop').height() - 62
      });

      $(".indexContainer .maxBtm .btmLeft .bl_main,.indexContainer .maxBtm .btmRight .br_main").css({
        height:$('.indexContainer .maxBtm .btmLeft').height() - 50
      });

    },
    drawLine:function(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('ec1'))
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {},
                itemStyle:{
                  normal:{
                      // 柱形条颜色
                      color: '#0068ff',
                      label: {
                          show: true,			// 是否显示
                          position: 'top',	// 定位位置
                          formatter: '{c}',	// 显示内容
                          color:'#fff',		// 字体颜色
                          fontSize:8			// 字体大小
                      },
                      areaStyle: {type: 'default'}
                  }
              }
            }]
        });
    },
    makePie:function(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('ec2'))
        // 绘制图表
        myChart.setOption({
            title: {show:false},
            legend: {show:false},
            tooltip : {show:false},
            series:{
                name:'今天考勤分析',
                type:'pie',
                selectedMode:true,			// 选中模式，表示是否支持多个选中
                selectedOffset:20,			// 选中扇区的偏移距离
                radius : ['90%','100%'],		// 饼图的半径，数组的第一项是内半径，第二项是外半径。
                center: ['50%', '50%'],		// 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
                data:[
                    {value:168, name:'准时',itemStyle:{normal:{color:'#066dfe'}}},
                    {value:10, name:'迟到',itemStyle:{normal:{color:'#cee1ff'}}}
                ],
                
                // 饼图图形上的文本标签，可用于说明图形的一些数据信息
                label: {
                    show:false,
                    normal: {
                        show:true,
                        position:'inside',		// 标签的位置
                        formatter:'',
                        textStyle: {
                            color: '#fff'		// 标签字体颜色
                        }
                    }
                },
                animationType: 'scale',				// 初始动画效果
                animationEasing: 'elasticOut',		// 初始动画的缓动效果
                animationDelay: function (idx) {	// 初始动画的延迟
                    return Math.random() * 200;
                }
            },
            color:['rgba(26,205,210,0.8)','rgba(26,205,210,0.5)','blueviolet']
        });
    },
    makeBar:function(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('ec3'))
        // 绘制图表
        myChart.setOption({
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              itemStyle:{
                  normal:{
                      // 柱形条颜色
                      color: '#0068ff',
                      label: {
                          show: true,			// 是否显示
                          position: 'top',	// 定位位置
                          formatter: '{c}',	// 显示内容
                          color:'#fff',		// 字体颜色
                          fontSize:8			// 字体大小
                      },
                      areaStyle: {type: 'default'}
                  }
              }
            },
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              itemStyle:{
                  normal:{
                      // 柱形条颜色
                      color: '#c0d9ff',
                      label: {
                          show: true,			// 是否显示
                          position: 'top',	// 定位位置
                          formatter: '{c}',	// 显示内容
                          color:'#fff',		// 字体颜色
                          fontSize:8			// 字体大小
                      },
                      areaStyle: {type: 'default'}
                  }
              }
            },
          ],
          barWidth:'20',      // 柱条宽度
          barGap:'0'          // 柱条间距
        });
    },
  },
  mounted:function(){
    this.setCss();
    this.drawLine();
    this.makePie();
    this.makeBar();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Main{position:relative;background:#c8e2f3;}
  .indexContainer{position:absolute;left:15px;top:15px;}

  .indexContainer .maxTop{width:100%;height:49.5%;background:#fff;border-radius:5px;}
  .indexContainer .maxTop .header{width:96%;height:60px;line-height:60px;border-bottom:1px solid #e5e5e5;margin:0 auto;}
  .indexContainer .maxTop .header .title{float:left;}
  .indexContainer .maxTop .header .date{float:right;}
  .indexContainer .maxTop .ecBox{width:96%;margin:0 auto;}

  .indexContainer .maxBtm{width:100%;height:49.5%;margin-top:1%;}

  .indexContainer .maxBtm .btmChild{width:49.5%;height:100%;float:left;background:#fff;border-radius:5px;overflow:hidden;}
  .indexContainer .maxBtm .btmChild .bl_title{width:96%;height:50px;line-height:70px;font-size:16px;border-bottom:1px solid #e5e5e5;margin:0 auto;overflow:hidden;}
  .indexContainer .maxBtm .btmChild .bl_title .blt_left{float:left;}
  .indexContainer .maxBtm .btmChild .bl_title .blt_right{float:right;}

  .indexContainer .maxBtm .btmLeft .bl_main{width:100%;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_left,.indexContainer .maxBtm .btmLeft .bl_main .bm_right{width:50%;height:100%;float:left;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_left{position:relative;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_left .info{width:150px;height:60px;padding:20px 0;position:absolute;left:50%;margin-left:-75px;top:50%;margin-top:-40px;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_left .info{line-height:30px;text-align:center;font-weight:600;font-size:22px;}
  #ec2{width:68%;height:68%;position:absolute;left:50%;margin-left:-34%;top:18%;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_right table{width:68%;height:38%;text-align:center;margin:28% auto;table-layout:fixed;border-collapse:collapse;}
  .indexContainer .maxBtm .btmLeft .bl_main .bm_right table td{font-size:16px;font-weight:bold;}

  
  .indexContainer .maxBtm .btmRight{width:49.5%;height:100%;float:right;background:#fff;border-radius:5px;}
  .indexContainer .maxBtm .btmRight .br_main{width:100%;}
</style>
