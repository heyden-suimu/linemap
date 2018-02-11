<template>
  	<div class="editUser">
       <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>登录账号：</span>
                   <el-input v-model = 'submit.username' class="keys" placeholder="请输入账号" ></el-input>
              </div>
          </el-col>

      </el-row>
      <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>登录密码：</span>
                   <el-input v-model = 'submit.password' class="keys" placeholder="请输入密码" ></el-input>
              </div>
          </el-col>

      </el-row>
      <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>确认密码：</span>
                   <el-input v-model = 'surePassword' class="keys" placeholder="请再次输入密码" ></el-input>
              </div>
          </el-col>

      </el-row>
      <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>员工姓名：</span>
                   <el-input v-model = 'submit.name' class="keys" placeholder="请输入姓名" ></el-input>
              </div>
          </el-col>

      </el-row>
      <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                  <span>角色类型：</span>
                    <el-radio-group v-model="submit.level">
                      <el-radio :label="1" >普通员工</el-radio>
                      <el-radio :label="2" >管理员</el-radio>
                    </el-radio-group>
              </div>
          </el-col>

      </el-row>
      <el-row>

          <el-col :span="12">
              <div class="grid-content bg-purple-light">
                    <span style="margin-bottom:.1rem;display:block">使用权限：</span>

                      <el-checkbox label="" name="type" v-model="submit.deviceInfo">设备状态查询</el-checkbox><br/>
                      <el-checkbox label="地推活动" name="type" v-model="submit.monitorView">监控查看</el-checkbox><br/>
                      <el-checkbox label="线下主题活动" name="type" v-model="submit.shockParameter">振动参数设置</el-checkbox><br/>
                      <el-checkbox label="单纯品牌曝光" name="type" v-model="submit.deviceStorage">设备入库</el-checkbox><br/>
                      <el-checkbox label="单纯品牌曝光" name="type" v-model="submit.statisticalReport">统计报表</el-checkbox><br/>
                      <!-- <el-checkbox label="单纯品牌曝光" name="type" v-model="">账号管理</el-checkbox><br/> -->

              </div>
          </el-col>

      </el-row>

      <footer>
        <el-button type='primary' @click="cgUser">提交</el-button>
        <el-button type='warning' @click="$router.go(-1)">取消</el-button>
      </footer>
    </div>
</template>

<script>

import {userApi} from '../../service/getData'
import md5 from 'js-md5'
import {layer, check, exit, checkPro} from '../../components/common/common'

export default {
    data(){
        return{
          submit:{
            username:'',
            password:'',
            name:'',
            level:1,
            "deviceInfo":true,
            "monitorView": true,
            "shockParameter": true,
            "deviceStorage": true,
            "statisticalReport": true
          },
          surePassword:'',
          submiType:'',
        }
    },

	  mounted(){
       exit(this)
       checkPro('admin', this, true)
       this.init()         
    },

    components:{

    },

    computed:{
        
    },

    methods:{
      init(){
        if(this.$route.query&&this.$route.query.userId){

          this.submiType = "edit";
          for (let key in this.submit){
            this.submit[key] = this.$route.query[key]
          }
          this.surePassword = this.submit.password
        }
      },

      async cgUser(){

        if (check([
          {bol: !this.submit.username, msg: '账号不能为空'},
          {bol: !this.submit.password, msg: '密码不能为空'},
          {bol: this.surePassword !== this.submit.password, msg: '确认密码不一致'},
          {bol: !this.submit.name, msg: '姓名不能为空'},
        ], this)) {
          return -1
        }

        let obj  = JSON.parse(JSON.stringify(this.submit))
        let data = null
        if (this.submiType === 'edit') {
            obj.userId = this.$route.query.userId;
            if(obj.password !== this.$route.query.password){
              obj.password = md5(obj.password);
            }
            data = await userApi('put',obj)

        }else{
            obj.password = md5(obj.password);
            data = await userApi('post',obj)
        }

        if(data.code == 0){
            layer(this,'成功提交','success')
            this.$router.push({'path':'userMag'})
        }else{
            layer(this,data.ch||data.message||"请求错误")
        }

      },

    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .editUser{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        font-size: 14px;
        padding: .1rem 0 0 3%;
        .el-row{
          padding-bottom: .16rem;
          .el-input{
            width: 40%;
          }
          .el-checkbox{
            padding: .06rem 0;
          }
        }
       footer{
        padding-top: .2rem;
          text-align: center; 
       }
    }

</style>
