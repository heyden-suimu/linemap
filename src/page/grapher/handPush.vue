<template>
    <div class="handPush">

        <el-row>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>推送类型：</span>
                  <radio-box :boxData='boxData' v-model="type"></radio-box>
              </div>
          </el-col>
      </el-row>
       
       <el-row>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>推送名称：</span>
                  <el-input v-model = 'pushData.name' class="keys" placeholder="请输入名称" ></el-input>
              </div>
          </el-col>
      </el-row>

      <el-row>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span >内容备注：</span>
                  <el-input v-model = 'pushData.remarks' class="keys1" placeholder="请输入备注" ></el-input>
              </div>
          </el-col>
      </el-row>

      <el-row>
          <el-col :span="18">
              <div class="grid-content bg-purple-light pushObject" >
                  <span>推送对象：</span>
                  <div >
                    <el-radio class="radio" v-model="radio" label="1" :disabled='submiType == "edit"'>单设备</el-radio>
                    <el-input v-model = 'toS' class="keys" placeholder="请输入设备IMEI" :disabled='radio === "2"' @change="search" icon="el-icon-close"></el-input>
                    <span v-if="pushE"  :class="{'el-icon-heyden-icon_checkbox_fill':pushSuc, 'el-icon-heyden-icon_roundclose_fill':!pushSuc}" style="margin-right:.1rem;display:inline-block"></span>
                    <el-radio class="radio" v-model="radio" label="2" :disabled='submiType == "edit"'>分组</el-radio>
                    <el-autocomplete
                      class="keys"
                      v-model="toG"
                      :fetch-suggestions="querySearchAsync"
                      placeholder="请输入分组名"
                      @select="handleSelect"
                      :disabled='radio === "1"'
                    ></el-autocomplete>
                  </div>
              </div>
          </el-col>
      </el-row>

      <el-row>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>推送条件：</span>
                  <el-checkbox v-model="pushData.online">仅在线设备</el-checkbox>
              </div>
          </el-col>
      </el-row>

      <el-row v-if='type === 1'>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span class="top">播报内容：</span>
                  <el-input type="textarea" v-model="pushData.category.hasOwnProperty('content')&&pushData.category.content.content" rows='4' class="keys1"></el-input>
              </div>
          </el-col>
      </el-row>

      <el-row v-if='type === 0'>
          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span class="top">Poi选择：</span>
                  <div class="styPoi">
                    <el-button @click="getPoi">选择位置</el-button>
                    <p id="lnglat">{{position&&`已选点：${position}`}}</p>
                    <p>{{positionText}}</p>
                  </div>
              </div>
          </el-col>
      </el-row>
      
      <el-dialog title="Poi选点" :visible.sync="dialogTableVisible" :close-on-click-modal="false" >
          <input placeholder="搜索地点"  id="tipinput" v-model="searchPos"> </input>
          <div id="container"></div>
          <span >{{position}}</span>
      </el-dialog>
      
      <el-row v-if='type === 2'>
        <el-col class="upload">
           <span >图片：</span>
           <el-upload
              class="upload-demo"
              ref="upload"
              action="http://up-z2.qiniu.com/"
              :data="uploddata"
              :before-upload="setToken"
              :on-remove= 'removeFile'
              :file-list="fileList"
              list-type="picture"
              :on-error='handlError'
              :on-success='handlSuc'>
              <el-button slot="trigger" size="small" type="primary">添加</el-button>
            </el-upload>
         </el-col>
      </el-row>

      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

      <footer>
         <el-button type="primary" @click = 'submit' v-if="submiType !== 'edit' ">下发推送</el-button>
      </footer>
    </div>

</template>

<script>
import radioBox from '../../components/common/radioBox'
import {layer, check} from '../../components/common/common'
import {hasImei, pushOne, pushGroup, deviceGroup, getToken} from '../../service/getData'
import {category_tts, category_opi, category_img, qnUrl} from '../../service/Data'
import AMap from 'AMap'
import _ from 'lodash'

    export default {
        data(){
            return{
                showAlert:false,
                boxData:[{
                    label:'Poi推送'
                },
                {
                    label:'语音播报推送'
                },
                {
                    label:'图片推送'
                }
                ],
                typeChange:['poi','tts','pic'],
                type:0,
                pushData:{
                    name:'',
                    remarks:'',
                    online:true,
                    from:(function(){
                      if (!sessionStorage.login) {
                        return
                      }
                      let login = JSON.parse(sessionStorage.login)
                      return login.username
                    })(),
                    category:{
                      content:{
                        content:''
                      }
                    }
                },
                dialogTableVisible:false,
                position:"",
                searchPos:'',
                pushE:false,
                pushSuc:false,
                radio:'1',
                toS:'',
                toG:'',
                pushType:'',
                positionText:'',
                submiType:'',
                uploddata:'',
                fileList:[],
                dialogImageUrl:''
            }
        },
        created(){
          this.pushType = this.$route.query.push&&JSON.parse(this.$route.query.push)
        },
        mounted(){
          this.iniType()
        },
        components:{
            radioBox,
        },
        watch:{
          radio(val){
            if (val === '2') {
              this.pushE = false
              this.toS =""
            } else{
              this.toG = ""
            }
          }
        },
        methods:{
           iniType(){
            if(this.pushType instanceof Object){
              this.pushType.category = JSON.parse(this.pushType.category)
              this.submiType = "edit";
              for (let key in this.pushData){
                if (this.pushData.hasOwnProperty(key)) {
                  this.pushData[key] = this.pushType[key]
                }
              }
              if(this.pushType.type === 'one'){
                this.radio = '1';
                this.toS = this.pushType.module.split('_')[0] || this.pushType.to
              }else if(this.pushType.type === 'group'){
                this.radio = '2';
                this.toG = this.pushType.to
              }
              let that = this;
              this.pushData.category = this.pushType.category
              let boxText = that.pushType.module.indexOf('_') == -1 ?that.pushType.module : that.pushType.module.split('_')[1];
              switch(boxText){
                case that.typeChange[0] :
                    that.type = 0
                    let data = JSON.parse(that.pushType.category.content.dialogs[0].onSuccess['tsd.command.POSITIVE'].params);
                    that.position = data['lng'] + ',' + data['lat']
                    that.positionText = data['name'];break;
                case that.typeChange[1] : 
                    that.type = 1;
                    break;
                case that.typeChange[2] :
                    that.type = 2;
                    that.fileList = [{url: that.pushType.category.content.imageUrl}]
                    break;
                default:
                    that.type = 1;
                    that.boxData[1].label = boxText;
              }
            }
          },
          initMap(){
              let that = this;
              var map = new AMap.Map("container", {
                  resizeEnable: true
              });
              //为地图注册click事件获取鼠标点击出的经纬度坐标
              var clickEventListener = map.on('click', function(e) {
                  that.position = e.lnglat.getLng() + ',' + e.lnglat.getLat()
                  let lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()]
                  // that.category.description = that.position
                  geocoder.getAddress(lnglatXY, function(status, result) {
                      if (status === 'complete' && result.info === 'OK') {
                          that.positionText = geocoder_CallBack(result);
                      }
                  });
              });
              var auto = new AMap.Autocomplete({
                  input: "tipinput"
              });
              var geocoder = new AMap.Geocoder({
                  radius: 1000,
                  extensions: "all"
              });
                   
              map.setDefaultCursor("pointer");
              AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发

              function select(e) {
                  if (e.poi && e.poi.location) {
                      map.setZoom(15);
                      map.setCenter(e.poi.location);
                  }
              }
              function geocoder_CallBack(data) {
                  var address = data.regeocode.formattedAddress; //返回地址描述
                  return address
              }
          },

          getPoi() {
            this.searchPos = ''
            this.dialogTableVisible = true
            setTimeout(()=>{
              this.initMap()
            },10)
            
          },

          async querySearchAsync(queryString, cb) {
            var data = await deviceGroup();
            if(data.code !=0) {
              return
            }
            var restaurants= []
            data.res.forEach((item, index)=>{
              restaurants.push({value:item.name})
            })
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 400 * Math.random());
          },

          createStateFilter(queryString) {
            return (state) => {
              return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },

          handleSelect(item) {
            console.log(item);
          },

          search:_.debounce(function(){
              this.searchRes()
          }, 500),

          async searchRes() {
            let data = await hasImei('get', {
              imei: this.toS
            })
            if(data.code == 0 && this.toS){
                this.pushE = true;
                this.pushSuc = data.res.deviceId;
            }else{
                this.pushE = true;
                this.pushSuc = false;
                // layer(this,data.ch||data.message||"请求错误")
            }
          },

          async submit() {
            this.pushData.module = this.typeChange[this.type] 
            this.pushData.to = this.pushE?this.pushSuc:this.toG

            if (check([
              {bol: !this.pushData.name, msg: '名称不能为空'},
              {bol:  this.pushE&& !this.pushSuc, msg: '无此设备'},
              {bol: !this.pushData.to, msg: '推送对象不能为空'},
              {bol: !this.pushData.category.content, msg: '播报内容不能为空'}
            ], this)) {
              return 
            }
            
            let category = {}

            if (this.type === 1&&category_tts.content) {
              category_tts.content.content = this.pushData.category.content&&this.pushData.category.content.content
              category = category_tts
            }

            if (this.type === 0) {
              let obj = category_opi.content.dialogs[0].onSuccess['tsd.command.POSITIVE']
              obj.speech.content = this.positionText
              let poi = this.position.split(',')
              obj.params = JSON.parse(obj.params)
              obj.params['lng'] = poi&&poi[0]
              obj.params['lat'] = poi&&poi[1]
              obj.params['name'] = this.positionText
              obj.params = JSON.stringify(obj.params)
              category = category_opi
            }

            if (this.type === 2) {
              category_img.content.imageUrl = this.fileList[this.fileList.length-1].url||''
              category = category_img
            }
          
            let data = ''
            this.pushData.category = category
            if(this.radio === '1'){
              this.pushData.module = this.toS + '_'+ this.pushData.module
              data = await pushOne('post',this.pushData)
            }else{
              data = await pushGroup('post',this.pushData)
            }
            if(data.code == 0){
              layer(this,'推送成功','success')
            }else{
              layer(this,data.ch||data.message||"请求错误")
            }
          },

          async setToken(){
              let data = await getToken();
              if (data.code !== 0) {
                return
              }
              this.uploddata = {
                  token:data.res
              }
          },

          handlSuc(res,file) {
            let imgUrl = qnUrl+res.hash;
            console.log(this.fileList)
            this.fileList.push({url: imgUrl});
          },

          handlError() {

          },

          removeFile(file, fileList) {
            this.fileList = fileList
          }

        },
        

    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .handPush {
    	position: absolute;
    	left: 0;
    	right: 0;
    	top: 0;
    	bottom: 0;
      height: 100%;
      width: 100%;
      font-size: 14px;
      padding: .1rem 0 0 3%;
      .el-row{
        padding-bottom: .2rem;
        .el-input{
          width: 40%;
        }
        .el-input.keys1, .keys1{
          // width: ;
          width: 78%;
        }
        span.top{
          vertical-align: top;
        }
        .pushObject{
          >div{
            display: inline-block;
            width: 80%;
            label{
              margin-right: .1rem;
            }
            .el-input{
              width: 26%;
              margin-right: .1rem;
            }
          }
        }
      }
      .el-dialog{
        .el-dialog__body{
          padding-bottom: 0;
        }
        span{
          display: block;
          padding-top: .05rem;
          text-align: right;
          color: #20a0ff;
        }
      }
      #container{
        width: 100%;
        height:4rem;
      }
      .styPoi{
        display: inline-block;
        p{
          padding-top: .1rem;
          color:#20a0ff;
        }
      }
      #tipinput{
        margin-top: -.2rem;
        margin-bottom: .18rem;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: inline-block;
        width: 100%;
        border-radius: 4px;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: none;
        padding: 3px 10px;
      }
      .el-icon-heyden-icon_checkbox_fill{
        color: #67c23a;
        font-size: 16px;
      }
      .el-icon-heyden-icon_roundclose_fill{
        color: #f56c6c;
        font-size: 16px;
      }
      .upload{
        >span{
          vertical-align: top;
        }
        .upload-demo{
          width: 50%;
          display: inline-block;
          button{
            width: .6rem;
          }
        }
      }
    }
</style>
