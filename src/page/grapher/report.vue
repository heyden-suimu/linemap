<template>
  	<div class="report">
        <div class="search">
          <el-row>
            <el-col :span="7"><div class="grid-content bg-purple-light">
                <span>日期：</span>
                 <el-date-picker
                  v-model="searchData.date"
                  type="date"
                  @change = 'cgDate'
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
            </div></el-col>

          </el-row>
       </div>
        <p class="title">各时段在线车辆统计</p>
        <div id="myChart"></div>
    </div>
</template>

<script>

import {getReport} from '../../service/getData'
import {layer, exit, checkPro} from '../../components/common/common'

export default {
    data(){
        let defaultDate = new Date();
        let nowDate = `${defaultDate.getFullYear()}/${defaultDate.getMonth()+1}/${defaultDate.getDate()}`
        defaultDate = new Date(nowDate) - 8.64e7
        return{
          searchData:{
            date:new Date(defaultDate)
          },
          defaultDate,
          pickerOptions0: {
            disabledDate(time) {
              return time.getTime() > Date.now() - 8.64e7;
            }
          },
          initOption:{
            title: {
                
            },
            tooltip: {
                trigger: 'axis',
                // showContent :false,
                axisPointer: {
                    type: 'cross',
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: true,
                name:'时间',
                axisLabel:{
                  interval:0 ,
                },
                data: []
            },
            yAxis: {
                type: 'value',
                name:'车辆数',
                axisLabel: {
                    formatter: '{value} '
                },
                axisPointer: {
                    snap: true
                },
                // max: function(value) {
                //     return value.max + Math.ceil(value.max*0.33);
                // }
            },
            visualMap: {
                show: false,
                dimension: 0,
                pieces: [{
                    lte: 6,
                    color: 'gray'
                }, {
                    gt: 6,
                    lte: 8,
                    color: 'gray'
                }, {
                    gt: 8,
                    lte: 14,
                    color: 'gray'
                }, {
                    gt: 14,
                    lte: 17,
                    color: 'gray'
                }, {
                    gt: 17,
                    color: 'gray'
                }]
            },
            series: [
                {
                    name:'车辆数',
                    type:'line',
                    smooth: true,
                    data: [],
                    itemStyle:{
                      normal:{
                        label :{
                          show:true
                        }
                      }
                    } 
                }
            ]
          }
        }
    },

	  mounted(){
        exit(this)
        checkPro('statisticalReport', this)
        this.drawLine();
        this.getOption();
             
    },

    components:{
       
    },

    computed:{
        
    },

    methods:{
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption(this.initOption);
           
        },

        getDate(){

        },

        async getOption(){
          let data = await getReport('get', {
            startTime: this.searchData.date.getTime(),
            endTime: this.searchData.date.getTime() + 8.64e7
          })

          if (data.code === 0) {
            this.initOption = this.$options.data().initOption;
            data.res.forEach((item, index)=>{
              this.initOption.xAxis.data.push(item.clock)
              this.initOption.series[0].data.push(item.onlineCount)
            })
            
            this.drawLine()
          } else {
             layer(this,data.ch || data.message || '发生错误')
          }
        },

        cgDate(){
          this.getOption()
        }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .report{
      position: relative;
      left: 0;
      height: 100%;
      width: 100%;
      right: 0;
      bottom: 0;
      top: 0;
      padding-top: .2rem;
      font-size: 14px;
        #myChart{
          width: 110%;
          margin-left: -5%;
          height: 400px;
        }
        .title{
          text-align: center;
          margin-top: .4rem;

        }
        .search{
          .serinput{
            width: 70%;
          }
        }
    }

</style>
