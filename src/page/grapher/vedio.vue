<template>
   <div class="vedio">
        <div class="search">
            <el-row>
              <!-- <el-col :span="5">
                <div class="grid-content bg-purple">
                  <span>监控类型：</span>
                  <el-select v-model="search.recordingMode" placeholder="请选择" @change='filterSearch'>
                    <el-option
                      v-for="item in options_status"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>

              </el-col> -->
               <el-col :span="8">

                    <div class="grid-content bg-purple">
                        <span>状态：</span>
                      <el-select v-model="search.status" placeholder="请选择" @change='filterSearch'>
                        <el-option
                          v-for="item in options_status1"
                          :key="item.value"
                          :label="item.name"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>

                  </el-col>

              <el-col :span="8">

                <div class="grid-content bg-purple-light">
                    <span>时间段：</span>
                     <el-date-picker
                      v-model="dateM"
                      type="datetimerange"
                      placeholder="选择日期范围"
                      @change='filterSearch'>
                    </el-date-picker>
                </div>

              </el-col>

              <el-col :span="8">

                <div class="grid-content bg-purple-light">
                    <span style="width:.9rem">关键字：</span>
                    <el-input v-model = 'search.key' class="keys" placeholder="IMEI" @keyup.native='Search' style="width:2.6rem"></el-input>
                </div>

              </el-col>
            </el-row>
            
            <el-row>
               

                  <el-col :span="8">

                    <div class="grid-content bg-purple-light">
                        <span>地址：</span>
                         <el-input v-model = 'search.address' class="keys" placeholder="请输入地址" @keyup.native='Search'></el-input>
                    </div>

                  </el-col>

                  <el-col :span="8">

                    <div class="grid-content bg-purple">
                      <span style="width:.9rem">视屏类型：</span>
                      <el-select v-model="videoTypeEvent" placeholder="请选择" @change='filterSearch("typeEvent")'>
                        <el-option
                          v-for="item in vType_status"
                          :key="item.value"
                          :label="item.name"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>

                  </el-col>

                  <el-col :span="8">

                    <div class="grid-content bg-purple">
                      <span style="width:.9rem">所属分组：</span>
                     <el-input v-model = 'search.group' class="keys" placeholder="请输入分组" @keyup.native='Search'></el-input>
                    </div>

                  </el-col>
              </el-row>
        </div>

        <div class="Device_body">
            <el-table
                :data="vedioList"
                border
                style="width: 100%">
                <el-table-column
                  align="center"
                  label="#"
                  width="84"
                  show-overflow-tooltip
                >

                 <template scope="scope">
                        {{getVdType(scope.row.videoType, scope.row.isCollection)}}
                 </template>

                </el-table-column>
                <el-table-column
                  align="center"
                  prop="date"
                  min-width="96"
                  label="缩略图"
                  >

                  <template scope="scope">
                      <div class="wrap">
                    <img :src="scope.row.thumbnail?`data:image/png;base64,${scope.row.thumbnail}`:require('../../images/noPic.png') " alt=""  :class="{'logo':true}" v-if="move">
                    <img :src="scope.row.thumbnail?`data:image/png;base64,${scope.row.thumbnail}`:require('../../images/noPic.png') " alt="" @mouseover="test($event)"  @mouseout='test2($event)' :class="{'show':move,'logo':true}" v-if="!move">
                      </div>
                  </template>

                </el-table-column>
                
               <!--  
                <el-table-column
                  align="center"
                  prop="deviceId"
                  show-overflow-tooltip
                  label="设备号">
                </el-table-column> -->
                <el-table-column
                  align="center"
                  prop="imei"
                  min-width="80"
                  show-overflow-tooltip
                  label="IMEI">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="group"
                  width="96"
                  show-overflow-tooltip
                  label="所属分组">
                </el-table-column>
                <!-- <el-table-column
                  align="center"
                  width="80"
                  label="类型">

                  <template scope="scope">
                        {{scope.row.recordingMode|textRecordingMode(options_status)}}
                  </template>

                </el-table-column> -->
                <el-table-column
                  align="center"
                  prop="address"
                  show-overflow-tooltip
                  min-width="262"
                  label="地址信息">
                </el-table-column>
                <el-table-column
                  align="center"
                  show-overflow-tooltip
                  width="135"
                  label="时间">
                    <template scope="scope">
                        {{scope.row.videoTime|filterTime}}
                    </template>
                </el-table-column>
                <el-table-column
                  width="80px"
                  align="center"
                  show-overflow-tooltip
                  label="大小">

                  <template scope="scope">
                        {{scope.row.size|filterSize(options_status1)}}
                  </template>

                </el-table-column>
                <el-table-column
                  align="center"
                  width="90"
                  label="状态">

                  <template scope="scope">
                        {{scope.row.status|textStatus(options_status1, scope.row, localUpload)}}
                  </template>

                </el-table-column>
                <el-table-column
                  align="center"
                  width="100"
                  label="操作">

                   <template scope="scope">

                    <div>
                            <a :href="scope.row.downloadUrl" download="1" v-if='scope.row.downloadUrl&&scope.row.status == 2' class="download">下载</a>
                            <el-button @click="readVedio(scope.row,scope.$index)" type="text" size="small" v-if='scope.row.status== 2&&scope.row.playUrl'>播放</el-button>
                            <el-button @click="deleteVedio(scope.row,scope.$index)" type="text" size="small" v-if='scope.row.status == 2' style="margin-left:-.01rem!important" class='delteSpan'>删除</el-button>

                        <el-button @click="upLoadDev(scope.row,scope.$index)" type="text" size="small" v-if='scope.row.status <= 0 '>{{scope.row.status==0?"上传":'重新上传'}}</el-button><br/>
                        <span v-if='scope.row.status.progress>=-1'  class="loading">--</span>
    
                    </div>
                    
                  </template>

                </el-table-column>

              </el-table>
              
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 50, 100]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
               </el-pagination>

               <el-dialog :title="`${vedio}视频`" :visible.sync="dialogTableVisible" :close-on-click-modal="false">
                  <video  poster="" autoplay="autoplay" preload="none" width="100%" controls v-if="dialogTableVisible">
                        <source :src="videoSrc" type="video/ogg">
                        <source :src="videoSrc" type="video/mp4">
                            <source :src="videoSrc" type="video/mp4" />
                            <source :src="videoSrc" type="video/ogg" />
                            <source :src="videoSrc" type="video/webm" />
                            <object :src="videoSrc" width="320" height="240">
                            <embed  :src="videoSrc" width="320" height="240" />
                        </object>
                  </video>
               </el-dialog>
        </div>
   </div>
</template>

<script>
    import {vedioApi, vedioDel, uploadVideo, progressVideo} from '../../service/getData'
    import {layer, DateFormat, exit, checkPro} from '../../components/common/common'
    import _ from 'lodash'

    export default {
        data(){
            return{
                options_status:[
                    {name:'全部',value:''},{name:'前录',value:1},{name:'内录',value:2}
                ],
                options_status1:[
                    {name:'全部',value:3},{name:'失败',value:-1},{name:'未上传',value:0},{name:'上传中',value:1},{name:'已完成',value:2}
                ],
                vType_status:[
                    {name:'全部',value:''},{name:'事件',value:1},{name:'收藏',value:2},{name:'普通',value:3}
                ],
                search:{
                    recordingMode:'',
                    status:3,
                    address:'',
                    key:'',
                    videoType:'',
                    isCollection:'',
                    group: ''
                },
                videoTypeEvent:'',
                vedioList:[],
                dialogTableVisible:false,
                move:false,
                total:0,
                dateM:'',
                pageSize:10,
                currentPage:1,
                videoSrc:'',
                start:0,
                count:10,
                page:1,
                Timer:null,
                vedio:''
            }
        },

        created(){
              exit(this)
              checkPro('monitorView', this)
        },

        mounted(){
            if(this.$route.query.device){
                this.search.key = this.$route.query.device
            }
            this.initVedio()
            this.$root.$on('ndRefresh',(val)=>{
                if(val){
                    this.Timer = setInterval(()=>{
                        this.initVedio(this.start, this.count, this.page)
                    }, 10000)
                }else{
                    clearInterval(this.Timer)
                }
            })
        },
       
        methods: {

            async initVedio(start = 0, count = 10, page = 1,) {

                let obj = {
                    start : start,
                    count : count
                };
                let dt
                for(let key in this.search){

                    if(this.search[key]||this.search[key] === 0||this.search[key] === false){
                         obj[key] = this.search[key] 
                         if (typeof this.search[key] === 'string') {
                        	dt = this.search[key].indexOf('#')
                        	if (dt != -1) {
                        	   obj[key] =  obj[key].replace(/#/g, '')
                        	}
                        }
                        if(key=='status'&&this.search.status == 3){
                           delete obj.status 
                        }
                    }

                    if(this.dateM&&this.dateM[0]){
                        obj.startTime = this.dateM[0].getTime();
                    }

                    if(this.dateM&&this.dateM[1]){
                        obj.endTime = this.dateM[1].getTime();
                    }

                }

                let data = await vedioApi('get', obj);
                if(data.code == 0){
                    this.vedioList = data.res.videos;
                    this.total = data.res.totalCount;
                    this.start = start;
                    this.count = count;
                    this.page = page;
                }else{
                    layer(this,data.ch||data.message)
                }
            },

            readVedio(row, index){
                this.dialogTableVisible = true;
                this.videoSrc = row.playUrl;
                this.vedio = row.recordingMode==1?'前录':'内录'
            },
            test(event){
                event.target.classList.add('show');
                // this.move = true;
            },
            test2(event){
                event.target.classList.remove('show');
            },
            handleSizeChange(size){
                this.pageSize = size;
                this.count = size;
                this.initVedio((this.page-1)*size, size, this.page)
            },
            handleCurrentChange(currentPage){
                this.currentPage = currentPage;
                this.page = currentPage;
                this.initVedio((parseInt(currentPage)-1)*this.count, this.count, currentPage)
            },
            Search: _.debounce(function(){
                    this.filterSearch()
                }, 400)
            ,
            filterSearch(type = 'all'){
                if (type === 'typeEvent') {
                  let that = this;
                  switch(this.videoTypeEvent) {
                      case '':
                        that.search.videoType = ''
                        that.search.isCollection = ''
                        break
                      case 1 :
                        that.search.videoType = 1
                        that.search.isCollection = ''
                        break;
                      case 2 :
                        that.search.videoType = ''
                        that.search.isCollection = true
                        break;
                      case 3 :
                        that.search.videoType = 0
                        that.search.isCollection = false
                        break;
                  }
                }
                this.currentPage = 1
                this.initVedio(0,this.count,1)
            },
            async deleteVedio(row, index){
                this.$confirm('是否删除该记录？', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(async ()=>{
                    let data = await vedioDel('get',{
                        videoId:row.videoId
                    })
                    if(data.code == 0){
                        layer(this,'删除成功', 'success')
                        this.initVedio(this.start,this.count,this.page)
                    }else{
                        layer(this,data.ch||data.message)
                    }
                })
                
            },

            localUpload(row){
                if(this[row.videoId]) {
                    clearInterval(this[row.videoId])
                }
                this[row.videoId] = setInterval(async ()=>{
                        // this.initVedio(this.start, this.count, this.page)
                    let res = await progressVideo('get',{
                        videoIds :[row.videoId]
                    })
                    if(res.code != 0) return
                    let hasVideoId = false;
                    if(res.res.length>=1){
                        res.res.map((item, index)=>{
                            if(item.videoId == row.videoId){
                                let that = this;
                                this.vedioList.map((item1,index1)=>{
                                    if(item1.videoId == row.videoId){
                                        hasVideoId = true;
                                        that.vedioList[index1].status={}
                                        that.vedioList[index1].status.progress = item.progress
                                        that.vedioList[index1].status.status = item.status
                                        if(item.status == 3){
                                           that.vedioList[index1].status.progress = -1
                                           that.vedioList[index1].status.status = 3;
                                           that.vedioList[index1].downloadUrl = item.downloadUrl; 
                                        }else if(item.status == 2){
                                            that.vedioList[index1].playUrl = item.playUrl
                                            that.vedioList[index1].downloadUrl = item.downloadUrl
                                            that.vedioList[index1].status = 2
                                            clearInterval( that[row.videoId])
                                            if (that.search.status == 1||that.search.status == 0||that.search.status == -1) {
                                                that.vedioList.splice(index1,1)
                                                that.total -=1
                                            }
                                            
                                        }else if(item.progress == -6){
                                            layer(that,'该视频有问题，不能上传')
                                            clearInterval( that[row.videoId])
                                            that.vedioList[index1].status = -1
                                            if (that.search.status == 1||that.search.status == 0||that.search.status == 2) {
                                                that.vedioList.splice(index1,1)
                                                that.total -=1
                                            }
                                        }else if(item.progress<0&&item.progress!=-6&&item.status == -1){
                                            layer(that,item.ch||item.message||'上传失败')
                                            that.vedioList[index1].status = -1
                                            clearInterval( that[row.videoId])
                                            if (that.search.status == 1||that.search.status == 0||that.search.status == 2) {
                                                that.vedioList.splice(index1,1)
                                                that.total -=1
                                            }
                                        }
                                    }
                                })

                                if(!hasVideoId&&item.status==2){
                                    clearInterval( this[row.videoId])
                                }
                            }
                        })


                    }
                    
                    if (row.status ==2 ||row.status == -1) {
                        clearInterval( this[row.videoId])
                    }

                },500)
            },

            async upLoadDev(row,index){
                let data = await uploadVideo('get', {
                    videoId : row.videoId
                })

                
                if(data.code == 0){
                    this.vedioList.map((item1,index1)=>{
                        if(item1.videoId == row.videoId){
                            // this.vedioList[index1].status = 1
                            this.vedioList[index1].status={}
                            this.vedioList[index1].status.progress = 0;
                        }
                    })
                    layer(this,'正在上传', 'success')
                    // this.initVedio(this.start,this.count,this.page)
                    this.localUpload(row)
                    
                    
                }else{

                    layer(this,data.ch||data.message)
                }

            },

            getVdType(eve, col) {
              if (col&&eve) {
                return '收藏/事件'
              } else if (col&& eve === 0) {
                return '收藏'
              } else if (!col && eve) {
                return '事件'
              } else {
                return '普通'
              }
            }
        },
        filters:{

            textStatus(val, options_status1, row, upload){
                if(!val.progress&&val.progress!=0){
                     let text= val == 0?'未上传':val == 2?'已完成':val < 0?'上传失败':val==3?'转码中':'';
                     if(val == 1){
                        upload(row)
                     }
                    return text;
                }else if(val.progress >=0 ){
                    return val.progress + '%'
                }else if(val.progress == -1&&val.status == 3){
                    return '转码中'
                }else{
                  return '--'
                }
               
            },

            textRecordingMode(val,options_status){
                let text="";
                options_status.map((item)=>{
                    if(item.value == val){
                        text = item.name
                    }
                })
                return text;
            },

            filterTime(val){
                Date.prototype.format = DateFormat;
                let Time  = new Date(val).format('yyyy-MM-dd hh:mm:ss')
                // let Time  = new Date(val)
                // let now = new Date();
                // let TimeS = Time.getTime();
                // let nowS = now.getTime();
                // let h = (nowS - TimeS)/1000
                // if(h<60){
                //     return '刚刚'
                // }else if(h<60*60){
                //     return `${parseInt(h/60)}分钟`
                // }else if(h<=60*60*24){
                //     return `${parseInt(h/60/60)}小时前`
                // }else{
                //     return `1天前`
                // }
                return Time;
            },

            filterSize(val){

                if((val/1024/1024)<0.05){
                    return (val/1024).toFixed(1)+'K'
                }
                return (val/1024/1024).toFixed(1)+'M'
            },
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
     .refresh{
            position: absolute;
            right: 15%;
            top:0rem;
            z-index: 99999;
        }
    .vedio{
        font-size: 14px;
        .search{
            padding-top: .1rem;
            padding-left: .1rem;
            .el-col{
                .grid-content{
                    >span{
                        width: .75rem;
                        display: inline-block;
                    }
                }
            }
            .el-col:nth-child(1){
                .grid-content{
                    >span{
                        width: .9rem;
                        display: inline-block;
                    }
                }
            }
            .el-select{
                width:28%;
            }
            .el-input{
                width: 60%;
            }
            .el-date-editor{
                width: 60%;
            }
            .el-row:nth-child(2){
                margin-top: .12rem;
            }
        }
        .Device_body{
            padding-top: .3rem;
            overflow: auto;
            .el-pagination{
                margin-top: .16rem;
                text-align: center;
                margin-bottom: .16rem;
            }
            .el-dialog{
                background: black;
                color:#ccc;
            }
        }
        .logo{
            width: .8rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
        }
        .wrap{
            width: 0rem;
            height: .8rem;
            // left: 0;
            // z-index: 9;
            // top: 50%;
            // transform: translateY(-50%);
            // position: absolute;
        }
        .show{
            position: absolute;
            z-index: 999999;
            left: 50%;
            top: 50%;
            transform:translate(-50%, -50%) scale(1.5, 1.5);
            transition: .2s;
        }
        .el-dialog{
            background: black!important;
            color:#ccc;
            video{
                max-height: 5rem;
            }
        }

        .download{
            font-size: 12px;
            color: #20a0ff;
        }

        .videoType{
          width: .16rem;
        }

    }
</style>
