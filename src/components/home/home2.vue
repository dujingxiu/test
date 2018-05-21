<template>
    <div class="main">
        <div class="attendance">
            <div class="top">
                <div class="title">
                    <i class="el-icon-date"></i>
                    <span>出勤月历</span>
                </div>
                <div class="date">
                    <el-date-picker
                        v-model="value"
                        type="month"
                        placeholder="选择月">
                    </el-date-picker>
                </div>
            </div>
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>
        <div class="bottom">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    import { DatePicker } from 'element-ui';
    export default {
        data () {
            return {
                value: ''
            }
        },
        components: {
            'ElDatePicker': DatePicker
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                        }]
                    });
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
            height:400px;
            background-color: #fff;
            .top{
                overflow:hidden;
                border-bottom: 1px solid #c2c2c2;
                .title{
                    float:left;
                    color:#626262;
                }
                .date{
                    float:right;
                }
            }
        }
        .bottom{
            overflow:hidden;
            height:300px; 
            background-color: #345;
        }
    }
</style>