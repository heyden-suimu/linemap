<template>
  	<div class="userMag">

       <div class="search">
          <el-row>
            <el-col :span="7"><div class="grid-content bg-purple-light">
                <span>关键字：</span><el-input class="serinput" v-model="searchData.key" @change="search" placeholder="登录账号、员工姓名"></el-input>
            </div></el-col>

            <el-button class="addBt " type="primary" icon='plus' @click='addUser'>添加</el-button>

          </el-row>
       </div>

      <el-table
        :data="userData"
        style="width: 96%;margin-left:2%;"
        border
        >
        <el-table-column
          label="序列号"
          type="index"
          align='center'
          width="90">
        </el-table-column>
        <el-table-column
          prop="username"
          align='center'
          label="登录账号">
        </el-table-column>
        <el-table-column
          prop="name"
          align='center'
          label="员工姓名">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          align='center'
          label="角色类型">

          <template scope="scope">
                {{ type[scope.row.level - 1] }}
          </template>

        </el-table-column>
        <el-table-column
          align='center'
          label="操作">

            <template scope="scope">
              <div>
                  <el-button type="text" size="small" @click="editUser(scope.row)">详情</el-button>
                  <el-button type="text" size="small" @click="deleteUser(scope.row,scope.$index)">删除</el-button>
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

      <!-- <el-dialog
          :visible.sync="dialogVisible"
          @close="inituser"
          title="业务员管理"
          top="9%"
          >
          <div class="eidtuser">
              <eidt-user :showPart="false" :user="user"></eidt-user>
          </div>          
      </el-dialog>  -->

    </div>
</template>

<script>

import {userApi} from '../../service/getData'
import {layer, exit, checkPro} from '../../components/common/common'
import _ from 'lodash'

export default {
    data(){
        return{
          searchData:{
            key:''
          },
          userData:[
          ],
          type:['普通员工','管理员'],
          pageSize:10,
          total:0,
          currentPage:1,
          start:0,
          count:10,
          page:1,
        }
    },

	  mounted(){
       exit(this)
       checkPro('admin', this, true)
       this.initUser()         
    },

    components:{

    },

    computed:{
        
    },

    methods:{

      search:_.debounce(function(){
          this.filterSearch()
      }, 400),

      editUser(data){
        this.$router.push({path:"editUser",query:data})
      },

      deleteUser(row){
        this.$confirm('是否删除该用户？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            let data = await userApi('delete', {userId:row.userId});

            if(data.code === 0){
                layer(this,'删除成功','success');
                this.initUser(this.start,this.count,this.page)
            }else{
                layer(this,data.ch || data.message || '发生错误')
            }

        }).catch(() => {
              // reject('error')      
        });
      },

      addUser(){
        this.$router.push({path:"editUser"})
      },

      handleSizeChange(size){
        this.pageSize = size;
        this.count = size;
        this.initUser((this.page-1)*size, size, this.page)
      },

      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
        this.page = currentPage;
        this.initUser((parseInt(currentPage)-1)*this.count, this.count, currentPage)
      },

      async initUser(start = 0, count = 10, page = 1, ) {

          let obj = {
              start : start,
              count : count,
          };

          for(let key in this.searchData){
              
              if(this.searchData[key]){
                  obj[key] = this.searchData[key] 
              }

          }
          
          let data = await userApi('get', obj);
          if(data.code == 0){
              this.total = data.res.totalCount;
              this.userData = data.res.users;
              this.start = start;
              this.count = count;
              this.page = page;
          }else{
              layer(this,data.ch||data.message||"请求错误")
          }
      },

      filterSearch(){
        this.currentPage = 1
        this.initUser(0,this.count,1)
      }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .userMag{
        position: absolute;
        overflow: scroll;
        font-size: 14px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding-bottom: .16rem;
        .search{
          width: 96%;
          margin-left:2%;
          margin-top: .1rem;
          margin-bottom: .3rem;
          .serinput{
            width: 80%;
          }
          .addBt{
            float:right;
            margin-right: 3%;
          }
          .el-icon-plus{
            font-size: 12px;
            margin-right: .03rem;
          }
        }
        .el-pagination{
          text-align: center;
          margin-top: .2rem;
        }
    }

</style>
