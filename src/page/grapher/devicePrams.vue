<template>
  	<div class="handHistory">

       <div class="search">
          <el-row>

            <el-col :span="8"><div class="grid-content bg-purple-light">
                <span>分组名称：</span><el-input class="serinput" v-model="searchData.name" @change="search" placeholder="请输入分组名称"></el-input>
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
          label="分组名称">
        </el-table-column>
        <el-table-column
          prop="device"
          align='center'
          label="设备数">
        </el-table-column>
        <el-table-column
          align='center'
          label="操作">

            <template scope="scope">
              <div>
                  <el-button type="text" size="small" @click="editPram(scope.row)">配置参数</el-button>
                  <!-- <el-button type="text" size="small" @click="editUser(scope.row)">删除</el-button> -->
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

import {deviceGroup, nameGroup} from '../../service/getData'
import {layer, exit, checkPro} from '../../components/common/common'
import _ from 'lodash'

export default {
    data(){
        return{
          searchData:{
            name:'',
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
       this.initDeviceGroup()         
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
        this.initDeviceGroup((this.page-1)*size, size, this.page)
      },

      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
        this.page = currentPage;
        this.initDeviceGroup((parseInt(currentPage)-1)*this.count, this.count, currentPage)
      },

      initDeviceGroup(start = 0, count = 10, page = 1) {

          // let obj = {
          //     start : start,
          //     count : count,
          // };

          
          this.loaderData(deviceGroup('get'), start, count, page)
         
      },

      async loaderData(fetch, start = 0, count = 10, page = 1){

          let data = await fetch;
          if(data.code == 0){
              for(let key in this.searchData){
              
                  if(this.searchData[key] && this.searchData[key] !== 0){
                    data.res = data.res.filter((item, index)=>{
                       return item[key]&&item[key].indexOf(this.searchData[key]) != -1
                    })
                  }

              }
              this.total = data.res.length;
              this.userData = data.res instanceof Array?data.res.slice(start,start + count):[data.res]
              this.start = start;
              this.count = count;
              this.page = page;
          }else{
              layer(this,data.ch||data.message||"请求错误")
          }
      },

      filterSearch(){
        // this.currentPage = 1
        if (true) {
          this.initDeviceGroup()
          return
        }
        // this.loaderData(nameGroup('get', {group:this.searchData.name}))
      },

      editPram(row){
        this.$router.push({path: 'editDevPram', query:{val:row.name,type:'group'}})
      }
    },
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
