<template>
  	<div class="handHistory">

       <div class="search">
          <el-row>

            <el-col :span="8"><div class="grid-content bg-purple-light">
                <span>下发目标：</span><el-input class="serinput" v-model="searchData.to" @change="search" placeholder="分组名称/IMEI号"></el-input>
            </div></el-col>

            <el-col :span="8"><div class="grid-content bg-purple-light">
                <span>推送名称：</span><el-input class="serinput" v-model="searchData.name" @change="search" placeholder="请输入名称"></el-input>
            </div></el-col>
  
          </el-row>

       </div>

      <el-table
        :data="userData"
        style="width: 96%;margin-left:2%;"
        border
        >
        <el-table-column
          prop="name"
          align='center'
          label="名称">
        </el-table-column>
        <el-table-column
          align='center'
          label="下发内容">

          <template scope="scope">
            {{scope.row.module | getRemark(scope.row.type)}}
          </template>

        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          align='center'
          label="备注">

          <template scope="scope">
            {{scope.row.remarks}}
          </template>

        </el-table-column>
        <el-table-column
          align='center'
          label="下发目标">

          <template scope="scope">
            {{getDes(scope.row)}}
          </template>

        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          align='center'
          label="下发时间">

          <template scope="scope">
            {{scope.row.createdTime | dateF}}
          </template>

        </el-table-column>
        <el-table-column
          align='center'
          label="操作">

            <template scope="scope">
              <div>
                  <el-button type="text" size="small" @click="readPush(scope.row)">查看详情</el-button>
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

    </div>
</template>

<script>

import {getPushList} from '../../service/getData'
import {layer, exit, checkPro, DateFormat} from '../../components/common/common'
import _ from 'lodash'

export default {
    data(){
        return{
          searchData:{
            to:'',
            name:''
          },
          userData:[
          ],
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
          
          let data = await getPushList('get', obj);
          if(data.code == 0){
              this.total = data.res.totalCount;
              this.userData = data.res.records;
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
      },

      readPush(row) {
        this.$router.push({path:'handPush', query:{push:row&&JSON.stringify(row)}})
      },

      getDes(row) {
        let data;
        if(row.module.indexOf('_') == -1){
          data = "_" + row.module
        }else {
          data = row.module&&row.module.split('_')
        }

        if (row.type === 'one') {
          return (data&&data[0]||row.to) + '(设备)'
        } else {
          return row.to +'(组)'
        }
      }
      
    },
    filters:{
      dateF(val) {
        val = new Date(val)
        val.DateFormat = DateFormat
        return val.DateFormat('yyyy-MM-dd hh:mm:ss')
      },

      getRemark(val, type) {
        if (val&&val.indexOf('_') != -1) {
           return val&&val.split('_')[1]
        } else {
          return val
        }
      }
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .handHistory{
        position: absolute;
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
          .el-row:nth-child(1){
            margin-bottom: .18rem;
          }
          .serinput{
            width: 70%;
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
