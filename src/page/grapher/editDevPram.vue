<template>
    <div class="editDevPram">
         <el-tabs v-model="pushData.activeName" @tab-click="handleClick">
            <el-tab-pane label="视屏参数" name="first">
              <section class="clear"> 
                <div v-for="(witem, windex) in vedioSets" class="vedio">
                  <h3>{{witem.title}}</h3>
                  <div v-for="(item, index) in witem.setArr" class="pram">
                    <span >{{item.name}}</span>
                    <el-radio-group v-model="config['b+sCc1JsaoBdYxqxnH4PaGsZKyA='][witem.key][item.key]">
                      <el-radio class="radio" v-for="(secItem, secIndex) in item.nextItem" :label="secItem.value" >{{secItem.name}}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </section>
            </el-tab-pane>
            <el-tab-pane label="风格配置" name="second">
              <section> 
                <div>
                   <h3>UI风格</h3>
                  <el-row>
                    <div class="pram">
                      <el-radio class="radio"  v-for="(secItem, secIndex) in UIstyle" v-model="config['VEKndri8zP4wJjvYENIlSiFAVR8=']['ipRole']" :label="secItem.value">{{secItem.name}}</el-radio>
                    </div>
                  </el-row>
                </div>
                <div class="lang clear">
                  <h3>语音风格</h3>
                  <el-col >
                    <div>
                      <el-radio class="radio" v-for="(secItem, secIndex) in langStyle" v-model="config['VEKndri8zP4wJjvYENIlSiFAVR8=']['ttsRole']" :label="secItem.value">{{secItem.name}}</el-radio>
                    </div>
                  </el-col>
                </div>
              </section>
                
            </el-tab-pane>
            <el-tab-pane label="播报配置" name="third">
              <section class="clear"> 
                <div class="voice" >
                   <h3>欢迎语</h3>
                   <div>
                     <el-radio class="radio" v-for="(secItem, secIndex) in voiceO" v-model="config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['welcomeSwitch']" :label="secItem.value">{{secItem.name}}</el-radio>
                   </div>
                   <el-col class="conter">
                     <span>播报内容：</span>
                     <div>
                      <textarea name="" id="" style="width:100%;height:100%;background:#f5f5f5;padding:.1rem .1rem 0 .1rem;" v-model="config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['welcomeTts']">
                        欢迎您使用优驰出行。上车请您系好安全带，踩住刹车3秒后，按点火按钮，启动车辆。
                    </textarea>
                      <!-- <div class="audio">
                           <span :class="{'el-icon-heyden-zantingbofang': player,'el-icon-heyden-zanting': !player}" @click="play('in')"></span>
                           <div>
                              <span class="el-icon-heyden-ttpodicon"></span>
                              <el-slider v-model="playerVol"></el-slider>
                           </div>
                      </div> -->
                     </div>

                   </el-col>
                   <el-col class="upload">
                     <span >图片：</span>
                     <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="http://up-z2.qiniu.com/"
                        :on-preview="handlePictureCardPreview"
                        :data="uploddata"
                        :before-upload="setToken"
                        :file-list="comePicList"
                        :on-error='handlError'
                        accept="png"
                        :on-success='handlSuc1'
                        list-type="picture">
                        <el-button size="small" type="primary">添加</el-button>
                      </el-upload>
                   </el-col>
                
                </div>
                <div class="voice">
                  <h3>告别语</h3>
                    <div>
                     <el-radio class="radio" v-for="(secItem, secIndex) in voiceO" v-model="config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['byeSwitch']" :label="secItem.value">{{secItem.name}}</el-radio>
                   </div>
                   <el-col class="conter">
                     <span>播报内容：</span>
                     <div>
                        <textarea name="" id="" style="width:100%;height:100%;background:#f5f5f5;padding:.1rem .1rem 0 .1rem;" v-model="config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['byeTts']">

                        <!-- 欢迎您使用优驰出行。上车请您系好安全带，踩住刹车3秒后，按点火按钮，启动车辆。 -->
                    </textarea>
                        <!-- <div class="audio">
                           <span :class="{'el-icon-heyden-zantingbofang': player,'el-icon-heyden-zanting': !player}" @click="play('out')"></span>
                           <div>
                              <span class="el-icon-heyden-ttpodicon"></span>
                              <el-slider v-model="playerVol"></el-slider>
                           </div>
                        </div> -->
                     </div>

                   </el-col>
                   <el-col class="upload">
                     <span >图片：</span>
                     <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="http://up-z2.qiniu.com/"
                        :on-preview="handlePictureCardPreview"
                        :data="uploddata"
                        :before-upload="setToken"
                        :file-list="leavePicList"
                        :on-error='handlError'
                        accept="png"
                        :on-success='handlSuc2'
                        list-type="picture">
                        <el-button slot="trigger" size="small" type="primary">添加</el-button>
                      </el-upload>
                   </el-col>
                 </div>
              </section>

               <audio id="playerS">
                  <source src="" />
                    Your browser does not support the audio element.
               </audio>
            </el-tab-pane>
          </el-tabs>

          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <footer>
             <el-button type="primary" @click="submit(true, true)">应用</el-button>
             <el-button type="primary" @click.native="submit(false,false)">保存</el-button>
             <el-button type="primary" @click.native="submit(false, true)">保存并应用</el-button>
          </footer>
    </div>

</template>

<script>
import radioBox from '../../components/common/radioBox'
import {CgObject, layer, difObject} from '../../components/common/common'
import {config, qnUrl} from '../../service/Data'
import {editGroupPram, editDevOne, onePram, groupPram, getToken} from '../../service/getData'


    export default {

        data(){
           let comArr = [
            {
              name:'帧数（FPS）：',
              key:'frameRate',
              nextItem:[{name:'25帧', value:25,key:'frameRate'}, {name:'30帧', value:20, key:'frameRate'}],

            },
            {
              name:'文件时长：',
              key:'duration',
              nextItem:[{name:'1分钟', value:60, key:'duration'}, {name:'3分钟', value:180, key:'duration'}],

            }
          ]
            return{
                showAlert:false,
                fileList:[],
                vedioSets: [
                  {
                    title: '行车记录仪',
                    key:'frontVideoConfig',
                     setArr:[
                      ...comArr,
                      {
                        name:'帧分辨率：',
                        key:'resolution',
                        nextItem:[{name:'1080p', value:'1080P'}, {name:'720p', value:'720P'}],

                      }
                    ]
                  },
                  {
                    title: '车内监控', 
                    key: 'insideVideoConfig',
                    setArr: [
                      ...comArr,
                      {
                        name:'帧分辨率：',
                        key:'resolution',
                        nextItem:[{name:'720p', value:'720p'}, {name:'480p', value:'480p'}],

                      }
                    ]
                  }
                ],
                UIstyle:[{name:'小宝', value:0}, {name:'小牛', value:1}],
                langStyle:[{name:'女声', value:0}, {name:'男声', value:1}, {name:'林志玲', value:2}, {name:'郭德纲', value:3}],
                voiceO:[{name:'开启', value:true}, {name:'关闭', value:false}],
                radio:0,
                pushData:{
                    type:2,
                    activeName:'first'
                },
                player:true,
                playerVol:76,
                config:null,
                group:'',
                device:'',
                query:"",
                uploddata:'',
                comePicList:[],
                leavePicList:[],
                copyConfig:null,
                dialogImageUrl:'',
                dialogVisible:false
            }
        },
        created(){
          this.init()
        },
        mounted(){
          this.playerDom = document.getElementById('playerS');
          this.initPlayer();
        },
        watch:{
          config:{
            handler: function(val, old) {
              console.log(val)
              console.log(old)
            },
            deep: true
          }
        },

        components:{
            radioBox,
        },
        methods:{
          async init(){
            let query = this.$route.query
            this.query = query
            let data = ''
            if (query.type === 'one') {
              data = await onePram('get', {
              deviceId: query.val
            }) 
            } else {
              data = await groupPram('get', {
                group: query.val
              }) 
            }
            if (data.code === 0) {
              if (data.data instanceof Object && Object.keys(data.data).length >= 8) {
                if (!data.data['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']) {
                  data.data['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash'] = {}
                }
                this.config = data.data
                this.copyConfig = JSON.parse(JSON.stringify(this.config))
                this.comePicList = this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['welcomeImage']?[{url: this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['welcomeImage'], name:'预览'}]:[]
                this.leavePicList = this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['byeImage']?[{url: this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['byeImage'], name:'预览'}]:[]
              } else {
                this.config = await config
                console.log(this.config)
              }
            } else {
                layer(this, data.ch||data.message||'数据错误')
                this.$router.go(-1)
            }
          },

          play(tip){
            let playerDom = this.playerDom

            if (tip === 'in') {
              playerDom.src = 'http://localhost:8030/asset/mp3/t.mp3'
              if(this.player){
                playerDom.play()
              } else {
                playerDom.pause()
              }
            }else if (tip === 'out') {
              playerDom.src = 'http://localhost:8030/asset/mp3/t.mp3'
               if(this.player){
                playerDom.play()
              } else {
                playerDom.pause()
              }
            }

            this.player = !this.player
            playerDom = null;
          },

          initPlayer(){
            // this.playerDom.volume = 0.76
          },

          handleClick() {
          },

          handlError() {

          },

          handlSuc1(res,file) {
            let imgUrl = qnUrl+res.hash;
            this.comePicList = [{url: imgUrl, name:'预览'}]
            this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['welcomeImage'] = imgUrl
          },

          handlSuc2(res,file) {
            let imgUrl = qnUrl+res.hash;
            this.leavePicList = [{url: imgUrl, name:'预览'}];
            this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']['splash']['byeImage'] = imgUrl
          },

          save() {
          },

          async submit(bol, push) {
              let data = ''
              let query = this.query
              let login = JSON.parse(sessionStorage.login)
              // let obj = new difObject(this.config, this.copyConfig)  //方便以后每个配置修改提交
              let selectIndex = this.pushData.activeName
              let obj = selectIndex == 'first'?{'b+sCc1JsaoBdYxqxnH4PaGsZKyA=': this.config['b+sCc1JsaoBdYxqxnH4PaGsZKyA=']}:
                      selectIndex == 'second'?{'VEKndri8zP4wJjvYENIlSiFAVR8=': this.config['VEKndri8zP4wJjvYENIlSiFAVR8=']}:
                      {'XxTL0cSLXqQ7n2/G/HgEIJlxjoE=': this.config['XxTL0cSLXqQ7n2/G/HgEIJlxjoE=']}
              if(query.type === 'group'){
                data = await editGroupPram ('post', {
                  "group": query.val,
                  "config": obj,
                  "temporary": bol,
                  "push": push,
                  "from": this.$store.state.login?this.$store.state.login.username:login.username
                })
              } else {
                 data = await editDevOne ('post', {
                  "deviceId": query.val,
                  "config": obj,
                  "temporary": bol,
                  "push": push,
                  "from": this.$store.state.login?this.$store.state.login.username:login.username
                })
              }
              
              if (data.code === 0) {
                this.copyConfig = JSON.parse(JSON.stringify(this.config))
                layer(this,'配置成功','success')
              } else {
                layer(this, data.ch||data.message||'数据错误')
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

          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          }
        },

        beforeDestroy(){
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .editDevPram {
    	position: absolute;
    	left: 0;
    	right: 0;
    	top: 0;
    	bottom: 0;
      height: 100%;
      width: 100%;
      font-size: 14px;
      padding: .1rem 0 0 1%;
      .el-tab-pane{
        padding-left: 1%;
      }
      .el-tab-pane:nth-child(1){
        .vedio{
          width: 50%;
          float: left;
          h3{
            margin: .2rem 0;
          }
          .pram{
            padding: .15rem;
            span{
              width: 1.2rem;
              display: inline-block;
            }
            .el-radio{
              width: 1.1rem;
            }
          }
        }
        
      }
      .el-tab-pane:nth-child(2){
        h3{
          padding: .36rem 0;
        }
        .el-radio{
          width: 1rem;
        }
        .lang{
          padding-bottom: .2rem;
        }
      }
      .el-tab-pane:nth-child(3){
        .voice{
          width: 50%;
          float: left;
        }
        .voice:nth-child(1){
          border-right:1px solid #E4E4E4; 
        }
        .voice:nth-child(2){
          padding-left: .2rem;
        }
        .conter{
          margin-top: .2rem;
          >span{
            width: 15%;
            max-width: 1rem;
            display: inline-block;
            vertical-align: top;
          }
          >div{
            width: 80%;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 1.5rem;
            position: relative;
            p{
              position: absolute;
              top: .2rem;
              left: .16rem;
              right: .1rem;
              line-height: 20px;
            }
            
            .audio{
              width: 1.3rem;
              position: absolute;
              height: .4rem;
              right: .4rem;
              bottom: 0;
              >span{
                display: inline-block;
                font-size: 30px;
                color: #20a0ff;
                float: left;
              }
              >div{
                width: .8rem;
                height: .4rem;
                float: right;
                margin-left: .1rem;
                display: flex;
                .el-slider{
                  display: inline-block;
                  flex:1;

                }
                span{
                  display: inline-block;
                  font-size: 16px;
                  height: .36rem;
                  line-height: .36rem;
                  color: #999;
                }
              }
            }
          }
        }
        audio{
          position: absolute;
          width: 2rem;
          right: 0;
          bottom: 0;
          background: #555;
        }
        .upload{
          margin-top: .2rem;
          position: relative;
          >span{
            width: 1rem;
            padding: 7px 0;
            display: inline-block;
          }
          .upload-demo{
            width: 96%;
            .el-button{
              position: absolute;
              width: .8rem;
              top: 0rem;
              left: 1rem;
            }
          }
        }
        
        h3{
            margin: .2rem 0;
        }
      }
      footer{
        padding-top: .3rem;
        .el-button{
          width: 1.3rem;
        }
      }
    }
</style>
