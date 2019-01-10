<template>
    <div class="time-statistical">
        <div>
            <div id="time" key="time"></div>
        </div>
        <div>
            <div id="pipe" key="haha"></div>
        </div>
    </div>
</template>
<script>
    var echarts = require('echarts');
    export default{
        name:'time-statistical',
        data(){
            return {

            }
        },
        mounted(){
            let myChart = echarts.init(document.getElementById('time'));
            let myChart2 = echarts.init(document.getElementById('pipe'));
            myChart.setOption({
                title: {
                    text: '页面首次加载时间统计',
                    color:'red'
                },
                tooltip: {},
                xAxis: {
                    data: ['白屏时间', '用户可操作时间', '总下载时间']
                },
                yAxis: {},
                series: [{
                    name: '加载时间(ms)',
                    type: 'bar',
                    data: [3433, 3434, 3650]
                }]
            });
            myChart2.setOption({
                backgroundColor: '#2c343c',
                visualMap: {
                    show: false,
                    min: 2000,
                    max: 5000,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name: '加载时间',
                        type: 'pie',
                        radius: '55%',
                        data:[
                            {value:3433, name:'白屏时间'},
                            {value:3434, name:'用户可操作时间'},
                            {value:3650, name:'总下载时间'}
                        ],
                        roseType: 'angle',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .time-statistical{

    }
    #time{
        width: 500px;
        height: 400px;
    }
    #pipe{
        width: 500px;
        height: 400px;
    }
</style>