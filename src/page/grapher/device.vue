<template>
   <div class="device">
        <div class="search">
            <el-row>

              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span>分组名称：</span>
                  <el-input class="serinput" v-model="search.group" @change="filterSearch" placeholder="请输入分组名称"></el-input>
                </div>
              </el-col>

              <el-col :span="5">
                <div class="grid-content bg-purple">
                    <span>在线状态：</span>
                  <el-select v-model="search.online" placeholder="请选择" @change='filterSearch'>
                    <el-option
                      v-for="item in options_status"
                      :key="item.name"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>

              <el-col :span="6">

                <div class="grid-content bg-purple-light">
                    <span>关键字：</span>
                    <el-input v-model = 'search.imei' class="keys" placeholder="IMEI" @keyup.native='Search'></el-input>
                </div>

              </el-col>

              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span>添加时间：</span>
                  <el-date-picker
                    v-model="dateM"
                    class="serinput"
                    type="datetimerange"
                    placeholder="选择日期范围"
                    @change='filterSearch'>
                  </el-date-picker>
                </div>
              </el-col>

            </el-row>

            <div class="dosome">
              <el-button type="primary" @click="$router.push({path:'addDevice'})">添加</el-button>
              <!-- <el-button type="danger">删除</el-button> -->
            </div>
        </div>
        <div class="Device_body">
            <el-table
                :data="devList"
                border
                style="width: 100%">
                <!-- <el-table-column
                  type="selection"
                  width="45">
                </el-table-column> -->
                <el-table-column
                  prop="imei"
                  width="150"
                  align='center'
                  show-overflow-tooltip
                  label="IMEI">
                </el-table-column>
               <!--  <el-table-column
                  prop="plateNumber"
                  align='center'
                  width="110"
                  label="绑定车牌">
                </el-table-column> -->
                <el-table-column
                  prop="group"
                  align='center'
                  show-overflow-tooltip
                  label="所属分组">
                </el-table-column>
                <el-table-column
                  prop="properties.address"
                  width="190"
                  align='center'
                  show-overflow-tooltip
                  label="当前位置">
                </el-table-column>
                <!-- <el-table-column
                  prop="remarks"
                  align='center'
                  show-overflow-tooltip
                  label="备注">
                </el-table-column> -->
                <el-table-column
                  align='center'
                  width="100"
                  label="在线状态">
                  <template scope="scope">
                    {{status(scope.row.updatedTime) }}
                  </template>
                </el-table-column>
                <el-table-column
                  align='center'
                  width="80"
                  label="状态">
                  <template scope="scope">
                    {{scope.row.status=="soldOut"?'出库':scope.row.status=="notSoldout"?"入库":'激活'}}
                  </template>
                </el-table-column>
                <el-table-column
                  align='center'
                  show-overflow-tooltip
                  width="160"
                  label="更新时间">

                  <template scope="scope">
                    {{scope.row.updatedTime | dateF}}
                  </template>

                </el-table-column>
                <el-table-column
                  align='center'
                  show-overflow-tooltip
                  width="160"
                  label="添加时间">

                  <template scope="scope">
                    {{scope.row.createdTime | dateF}}
                  </template>

                </el-table-column>
                <el-table-column
                  align='center'
                  width='160'
                  label="操作">

                  <template scope="scope">
                    <el-button @click="editDev(scope.row,scope.$index)" type="text" size="small">编辑</el-button>
                   <!--  <el-button @click="readVedio(scope.row,scope.$index)" type="text" size="small">监控查看</el-button> -->
                    <el-button @click="pramDev(scope.row,scope.$index)" type="text" size="small">配置</el-button>
                    <el-button @click="readDev(scope.row,scope.$index)" type="text" size="small">详情</el-button>
                    <!-- <el-button @click="deleteDev(scope.row,scope.$index)" type="text" size="small">删除</el-button> -->
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
   </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex' 
    import {deviceApi, deviceCount, delDevice} from '../../service/getData'
    import {layer, DateFormat, exit, checkPro} from '../../components/common/common'
    import _ from 'lodash'
    export default {
    	data(){
            return{
                options_status:[
                    {name:'全部',value:''},{name:'在线',value:true},{name:'不在线',value:false}
                ],
                search:{
                    online:'',
                    imei:'',
                    startTime:'',
                    endTime:'',
                    group:''
                },
                devList:[],
                pageSize:10,
                currentPage:1,
                total:0,
                dateM:'',
                requestTime:''
            }
        },
        beforeCreate(){
            // this.exit()
            if(!sessionStorage.login){
                    layer(this,'请先登录')
                    this.$router.push("/login")
                }
        },
        created(){
            // 获取用户信息

        },
        watch:{
          dateM(val, oldval){
            if (val instanceof Array
              && val.length > 1) {
              this.search.startTime = val[0]&&val[0].getTime()
              this.search.endTime = val[1]&&val[1].getTime()
            }
          },
        },
        mounted(){
            exit(this)
            checkPro('deviceInfo', this)
            this.initDev();
        },
       
        methods: {
            status(val){
              val = new Date(val)
              if(val.getTime() + 1.2e5 <= this.requestTime){
                return '不在线'
              }else{
                return '在线'
              }
            },

            async initDev(start = 0, count = 10, page = 1, ) {

                let obj = {
                    start : start,
                    size : count,
                };
                
                for(let key in this.search){
                    
                    if(this.search[key] || this.search[key] === 0){
                        obj[key] = this.search[key] 
                    }

                }
                let dataCount = await deviceCount('get', obj)
                if(dataCount.code == 0){
                    this.total = dataCount.res; 
                }
                
                let data = await deviceApi('get', obj);
                this.requestTime = Date.now()
                if(data.code == 0){
                    this.devList = data.res;
                    this.start = start;
                    this.count = count;
                    this.page = page;
                    // document.body.scrollTop = 0;
                }else{
                    layer(this,data.ch||data.message||"请求错误")
                }
            },

            exit(){
                if(!sessionStorage.login){
                    layer(this,'请先登录')
                    this.$router.push("/login")
                }
            },
            readDev(row, index){
                this.$router.push({path:'devStatus', query:{imei:row.imei}})
            },

            editDev(row, index) {
              this.$router.push({path:'addDevice', query:{device:row.imei}})
            },

            readVedio(row,index){
                this.$router.push({path:'vedio', query:{device:row.imei}})
            },

            pramDev(row, index){
               this.$router.push({path:'editDevPram', query:{val:row.deviceId, type:'one'}})
            },

            handleSizeChange(size){
                this.pageSize = size;
                this.count = size;
                this.initDev((this.page-1)*size, size, this.page)
            },
            handleCurrentChange(currentPage){
                this.currentPage = currentPage;
                this.page = currentPage;
                this.initDev((parseInt(currentPage)-1)*this.count, this.count, currentPage)
            },
            filterSearch(){
                this.currentPage = 1
                this.initDev(0, this.count, 1)
            },
            Search: _.debounce(function(){
                    this.filterSearch()
                }, 400)
            ,

            async deleteDev(row){
              this.$confirm('是否删除该设备？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(async ()=>{

                  let data = await delDevice('post', {devices:[row.deviceId]});
                  if(data.code == 0){
                      layer(this,'删除成功', 'success')
                      this.initDev(this.start,this.count,this.page)
                  }else{
                      layer(this,data.ch||data.message)
                  }

              })
            }
        },
        filters:{
          dateF(val) {
            val = new Date(val)
            val.DateFormat = DateFormat
            return val.DateFormat('yyyy-MM-dd hh:mm:ss')
          },
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .device{
        font-size: 14px;
        .search{
            padding-top: .1rem;
            padding-left: .1rem;
            .el-select{
                width:45%;
            }
            .el-input{
                width: 60%;
            }
            .el-row{
              padding-bottom: .16rem;
              border-bottom: 1px solid #ccc;
            }
            .dosome{
              padding-top: .16rem;
              .el-button{
                width: 1rem;
              }
            }
        }
        .Device_body{
            padding-top: .16rem;
            .el-pagination{
                margin-top: .16rem;
                text-align: center;
                margin-bottom: .16rem;
            }
        }
    }
</style>
