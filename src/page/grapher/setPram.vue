<template>
  	<div class="setPram">
       <h3>振动参数设置</h3>

            <el-row>

                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span>加速度幅度值：</span>
                         <el-input v-model = 'submit.amp' class="keys" placeholder="请输入幅度值" ></el-input>
                         <p>*取值范围：0~14</p>
                    </div>
                </el-col>

            </el-row>
            <el-row>

                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span>振动次数：</span>
                         <el-input v-model = 'submit.count' class="keys" placeholder="请输入振动次数" ></el-input>
                         <p>*取值范围：0~255</p>
                    </div>
                </el-col>

            </el-row>

            <el-row>

                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span>时间区间：</span>
                         <el-input v-model = 'submit.windowSize' class="keys" placeholder="请输入时间区间" ></el-input>
                         <p>*单位：毫秒/ms</p>
                    </div>
                </el-col>

            </el-row>

            <footer>
              <el-button type='primary' @click="subPram('提交成功')">提交</el-button>
              <el-button type='danger' @click="refresh">重置</el-button>
            </footer>
    </div>
</template>

<script>

import {shakeApi, refreShake} from '../../service/getData'
import {layer, check, exit, checkPro} from '../../components/common/common'

export default {
    data(){
        return{
          submit:{
            amp:'',
            count:'',
            windowSize:''
          },
          pramData:null
        }
    },

	 mounted(){
      exit(this)
      checkPro('shockParameter', this)
      this.initPram()      
    },

    components:{

    },

    computed:{
        
    },

    methods:{
      async refresh(){
        // for(let key in this.submit){
        //   this.submit[key] = this.pramData[key];
        // }
        let data = await refreShake()
        if(data.code != 0){
          layer(this,data.ch || data.message || '发生错误')
          return
        }
        let defaultData = data.res
        this.$confirm(`是否重置为：加速度幅度值 ${defaultData.amp}，振动次数 ${defaultData.count}，时间区间 ${defaultData.windowSize}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            this.submit = defaultData;
            this.subPram('重置成功')

        }).catch(() => {
              // reject('error')      
        });
      },

      async subPram(sucMsg){

        if(check([
          {bol: !(0<=this.submit.amp && 14>=this.submit.amp) || !this.submit.amp, msg: '请填写正确的幅度值'},
          {bol: !(0<=this.submit.count && 255>=this.submit.count) || !this.submit.count, msg: '请填写正确的振动次数'},
          {bol: isNaN(parseInt(this.submit.windowSize)), msg: '请填写真确的时间区间'},
        ], this)) {
          return
        }

        let obj = {};
        for(let key in this.submit){
          obj[key] = parseInt(this.submit[key])
        }

        let data = await shakeApi('post', obj)
        if(data.code == 0){
            layer(this,sucMsg,'success')
        }else{
            layer(this,data.ch||data.message||"请求错误")
        }

      },

      async initPram(){

        let data = await shakeApi()
        if (data.code === 0) {
          this.pramData = data.res;
          for (let key in this.submit){
            this.submit[key] = data.res[key]
          }
        } else {
          layer(this, data.ch||data.message||'数据错误')
        }

      }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .setPram{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
       font-size: 14px;
       padding: .1rem 0 0 3%;
       h3{
        margin-bottom: .3rem;
       }
       .el-row{
          padding: .1rem 0;
          .grid-content{
            >span{
              width: 1.2rem;
              display: inline-block;
            }
            >p{
              font-size: 12px;
              color: #999;
              padding-top: .06rem;
            }
          }
          .el-input{
            width: 60%;
          }
       }

       footer{
          padding-top: .5rem;
          width: 50%;
          text-align: center;
          .el-button{
            width: 1rem;
            margin-right: .2rem;
          }
       }
    }

</style>
