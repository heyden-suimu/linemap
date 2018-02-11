<template>
   <div class="devStatus">
        <div class="devAbout">
            <h3>设备详情</h3>
            <div class="devInfo info">

                 <el-row>

                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>设备编号：</span><span>{{device.deviceId||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>ICCID：</span><span>{{device.iccid||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>状态：</span><span>{{status[device.status]||'--'}}</span>
                  </div></el-col>

                </el-row>
                <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>IMEI：</span><span>{{device.imei||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>userId: </span><span>{{device.userId||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>硬件版本：</span><span>{{device.romVersion||'--'}}</span>
                  </div></el-col>

                </el-row>
                <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>入库时间：</span><span>{{device.createdTime||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>最后在线：</span><span>{{device.updatedTime | dateF}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>备注：</span><span>{{device.remarks||'--'}}</span>
                  </div></el-col>
                </el-row>
                <el-row>
                  
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>MAC地址：</span><span>{{device.macAddress||'--'}}</span>
                  </div></el-col>
                </el-row>     

            </div>
           <div class="wrap-map">
               <div id="map"></div>
           </div>
        </div>

        <div>
            <h3>设备状态</h3>
            <div class="info">

                 <el-row>
                    <!-- <el-col :span="8"><div class="grid-content bg-purple">
                      <span>TF卡：</span><span :class='{"red":!device.properties.sdcard}'>{{device.properties.sdcard?'正常':'异常'}}</span>
                    </div></el-col> -->
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>所属组：</span><span >{{device.group||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>appVersion：</span><span>{{device.appVersion||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span style="float:left">romVersion：</span><span>{{device.romVersion||'--'}} </span>
                  </div></el-col>
                 </el-row>
                 <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>patchVersion：</span><span>{{device.patchVersion||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>project：</span><span>{{device.project||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span style="float:left">GPS：</span><span style="text-align:right;display:inline-block">{{device.properties&&device.properties.loc[0].toFixed(6)}} , {{device.properties&&device.properties.loc[1].toFixed(6)}} </span>
                  </div></el-col>
                 </el-row>
                 <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>地址：</span><span>{{device.properties&&device.properties.address||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple">
                      <span>总容量：</span><span>{{(device.properties&&device.properties.total_size+'Mb')||'--'}}</span>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                      <span>可用容量：</span><span>{{(device.properties&&device.properties.avaibale_size+'Mb')||'--'}}</span>
                  </div></el-col>
                </el-row>  

            </div>
        </div>



         <!-- <div v-if="false">
            <h3>联系人</h3>
            <div class="info">

                 <el-row>
                  <el-col :span="12"><div class="grid-content bg-purple">
                      <span>第一联系人：</span><span>{{device.firstContact}} {{device.firstContactPhoneNumber||'--'}}</span>
                  </div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                      <span>第二联系人：</span><span>{{device.secondContact}} {{device.secondContactPhoneNumber||'--'}}</span>
                  </div></el-col>
                </el-row> 

            </div>
        </div> -->    
   </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {layer, DateFormat, exit, checkPro} from '../../components/common/common'
    import {deviceInfo} from '../../service/getData'
    import AMap from 'AMap'
    export default {
    	data(){
            return{
                device:{

                },
                status:{
                    'soldOut':'出库',
                    'notSoldout': '入库',
                    'active': '激活'
                }
            }
        },
        created(){
            //获取用户信息
            // debugger
            this.initData()
        },
        mounted(){
            exit(this)
            checkPro('deviceInfo', this)
        },
       
        methods: {
            exit(){
                this.$router.push("/login")
            },

            async initData(){

              let data = await deviceInfo('get', {imei:this.$route.query.imei})
              if (data.code === 0 ) {
                this.device = data.res
                this.init()
              } else {
                layer(this,data.ch||data.message||"请求错误")
              }
            },

            init(){
                this.initMap()
            },
            initMap(){
               var map = new AMap.Map("map", {
                    zoom: 17,
                    center:this.device.properties&&this.device.properties.loc || [0,0]
                });
               var marker = new AMap.Marker({
                    map:map,
                    position:this.device.properties.loc,
                })
                marker.setLabel({
                    offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
                    // content: "点击Marker打开高德地图"
                });
                // map.plugin(["AMap.ToolBar"], function() {
                //     map.addControl(new AMap.ToolBar());
                // });

            },
            exit(){
                if(!sessionStorage.login){
                    layer(this,'请先登录')
                    this.$router.push("/login")
                }
            }
        },
        filters:{
          dateF(val) {
            if (!val) {
              return '--'
            }
            val = new Date(val)
            val.DateFormat = DateFormat
            return val.DateFormat('yyyy-MM-dd hh:mm:ss')
          }
        }

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .devStatus{
        font-size: 14px;
        padding: .1rem 0 0 .1rem;
        .devAbout{
            .devInfo{
                height: 2.6rem;
                width: 66%;
                padding:.3rem 0;
                padding-left: .2rem;
                float: left;
            }
            overflow: hidden;
            box-sizing:border-box;
        }
        .wrap-map{
            width: 34%;
            float: right;
            height:2.6rem;
            padding: .04rem 0 .1rem .3rem;
            #map{
                height: 2.54rem;
            }
        }
        #map{
            // width: 
        }
        h3{
            border-bottom: 1px solid #B8BABB;
            background: #F9F9F9;
            padding: .06rem 0;
            padding-left: .1rem;
        }
        .info{
            background: white;
            border-bottom: 1px solid #B8BABB;
            padding-left: .2rem;
            padding-top: .3rem;
            .el-row{
                margin-bottom: .3rem;
            }
        }
        .red{
            color:#E21E00
        }
    }
</style>
