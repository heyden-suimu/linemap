<template>
  	<div class="lineMap">
          <div id="map_container" >

          </div>
          <div class="aside">
                 <!-- <input type="button" class="button" value="开始动画" id="start" @click="test"/> -->
                <!--<input type="button" class="button" value="暂停动画" id="pause"/>
                <input type="button" class="button" value="继续动画" id="resume"/>
                <input type="button" class="button" value="停止动画" id="stop"/> -->
              {{message}}
          </div>
    </div>
</template>

<script>

import AMap from 'AMap'
import {getLineData} from '../../service/getData'
import {layer, exit} from '../../components/common/common'
import {dataline} from '../../service/Data'

export default {
    data(){
        return{
            message : "",
            map: null,
            lineArr:"",
            index: 0,
            maker:null,
            Icon: null,
            infoWindow: null,
            lngt:null
        }
    },

	mounted(){
        
        this.init()
    },

    components:{
        
    },

    computed:{
        
    },

    methods:{
         open() {
            const h = this.$createElement;

            this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, ' 车好像出毛病了，电压低'),
            customClass: "tips",
            duration:1000
            });
        },

        initLine(lineData) {
            var marker, lineArr = [];

            var map = new AMap.Map("map_container", {
                resizeEnable: true,
                center: [lineData[0].properties.longitude, lineData[0].properties.latitude],
                zoom: 17
            });
            map.plugin(["AMap.ToolBar"], function() {
                map.addControl(new AMap.ToolBar({
                        position:'RB',
                        offset: new AMap.Pixel(22, 0),
                    })
                );
            });

            this.map = map
            this.lineData = lineData
            let lngX,latY;
            for (var i = 0, len = lineData.length; i <len ; i++) {
                lngX = lineData[i].properties.longitude;
                latY = lineData[i].properties.latitude;
                lineArr.push([lngX, latY]);
            }



            // 绘制轨迹
            var polyline = new AMap.Polyline({
                map: map,
                path: lineArr,
                strokeColor: "#00A",  //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 3,      //线宽
                // strokeStyle: "solid"  //线样式
            }); 
            var passedPolyline = new AMap.Polyline({
                map: map,
                // path: lineArr,
                strokeColor: "#F00",  //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 3,      //线宽
                // strokeStyle: "solid"  //线样式
            });

           AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow)=>{
              this.infoWindow = new SimpleInfoWindow({
                     infoTitle: '<strong>提示</strong>',
                     infoBody: '没有事件触发，稳定前行...',
                     //基点指向marker的头部位置
                     offset: new AMap.Pixel(0, -36)
                 });
             
                //  infoWindow.open(map, marker.getPosition());
             })
            map.setFitView();
        },

        async init() {
            let data = await getLineData();
            this.initLine(data)
            // this.initLine(dataline)
        },

        showUser(data){

            let position =  [data.gps.lng,data.gps.lat]
            this.infoWindow.open(this.map, position);
            this.infoWindow.setInfoBody(data.title);

            if(data.aside){
                this.message = data.aside
                setTimeout(() => {
                    this.message = data.aside || '正在前行...' 
                }, 1000);
            }

            if(!data.gps){
                return
            }
            this.loadMark(position)
        },

        loadMark(position) {
            this.map.setCenter(position)
// let pos = new AMap.LngLat()
            AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {

                if(this.SimpleMarker){
                    this.SimpleMarker.setPosition(position)
                    // this.SimpleMarker.moveTo(position, 50)
                } else {
                    this.SimpleMarker = new SimpleMarker({
                        iconLabel: {
                            //普通文本
                            innerHTML: '<img src='+ require('../../images/carLogo.png') +' style="width:.45rem;height:.45rem;border-radius:50%;border:1px solid white">',
                            //设置样式
                            style: {
                                color: '#fff',
                                fontSize: '120%',
                                marginTop: '-8px',
                                marginLeft:'-2.5px'
                            }
                        },
                        // iconStyle: 'red',
                        map: this.map,
                        position: position
                    })
                }

            })
        }
    },

     sockets:{
        msg: function(message){
            // this.id=this.$socket.id
            // console.log(message)
            // {"imei":"354008079855669","speed":15.550000190734863,"mileage":4677,"geofencing":{"now":"围栏1"},"navigation":[{"name":"华纳商务中心703","distance":4}]}
            let data = JSON.parse(message);
            data.title = '正在前行';

            if (data.gps) {
                this.lngt = data.gps 
            } else {
                data.gps = this.lngt
            }

            //let info = data;
            if(data.event){
                data.title = data.event
            } else {
                if(data.info){
                     data.title = "导航目的地是:" + data.info.navigation.name + " 距离还有" + data.info.navigation.distance + "公里";
                }
            }
            if(data.gps&&data.info){
                 data.title += '，当前时速'+ data.info.speed+'km/h'
            }
            console.log(data)
            this.showUser(data)
        },
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .lineMap{
        position: absolute;
        font-size: 14px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding-bottom: .16rem;
        #map_container{
            width: 100%;
            // height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 1.6rem;
        }
        .aside{
            position: absolute;
            bottom: .1rem;
            left: 0;
            background: white;
            border-radius: 5px;
            border: #ccc;
            text-indent: 16px;
            padding: 0 .1rem;
            width:100%;
            margin-top: .1rem;
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
            font-size: 18px;
        }
        

    }



</style>
