<template>
    <transition name="fade">  
        <section id='left' v-if="showLeft">
            <!-- <el-menu :default-active="leftIndex" class="el-menu-vertical-demo" theme="dark">
                
                <el-submenu v-for='(item, index) in nav' :index="String(index+1)">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span>{{item.navName}}</span>
                    </template>
                      <el-menu-item v-for= '(subItem, subIndex) in item.subNav' :index="index + 1 +'-'+ (subIndex + 1)" @click="gorouter(subItem.route)">{{subItem.text}}</el-menu-item>
                </el-submenu>
            </el-menu> -->
        </section>
    </transition>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
    	data(){
            return{
                leftIndex:'',
                showLeft: true,
                nav:[
                    {
                        navName:'风控视频',
                        icon:'el-icon-heyden-fengkong',
                        subNav:[
                            {route:'vedio', text:'监控查看', pname:'deviceInfo'},
                            {route:'warnHistory', text:'报警记录', pname:'deviceInfo'},                          
                            ]
                    },
                    {
                        navName:'推送中心',
                        icon:'el-icon-heyden-icon',
                        subNav:[
                            {route:'handPush', text:'创建推送', pname:'deviceInfo'},
                            {route:'handHistory', text:'推送记录', pname:'deviceInfo'},                          
                            ]
                    },
                    {
                        navName:'设备管理',
                        icon:'el-icon-heyden-shebeiguanli',
                        subNav:[
                            {route:'device', text:'设备列表', pname:'deviceInfo'},
                            {route:'devicePrams', text:'组配置', pname:'deviceInfo'},                          
                            ]
                    }
                    // {route:'device',icon:'el-icon-menu', text:'设备查询', pname:'deviceInfo'},
                    // {route:'vedio',icon:'el-icon-upload', text:'监控查看', pname:'monitorView'},
                    // {route:'setPram',icon:'el-icon-setting', text:'参数配置', pname:'shockParameter'},
                    // {route:'report',icon:'el-icon-heyden-tongjibaobiao', text:'统计报表', pname:'statisticalReport'},
                    // {route:'userMag',icon:'el-icon-heyden-account-16', text:'账号管理', pname:'admin'},
                ]
            }
        },
        created(){
            this.leftIndex = this.$route.path
            if(this.$route.path == '/home/devStatus'){
                this.leftIndex = '/home/device'
            }
        },
        mounted(){
            this.$parent.$on('showL',(val)=>{
                this.showLeft = val
            })
        },
        computed: {
            
        },
        methods: {
            // 二级路由跳转
            gorouter(path){
                // debugger
                if(this.$route.path == '/home/devStatus'){
                    this.leftIndex = '/home/device'
                }
                this.$router.push(path);                
            },

            getPrority(name){

                let info = JSON.parse(sessionStorage.login)
                if(name === 'admin' && info.level >= 2){
                    return true
                } else if (name ==='admin' && info.level < 2){
                    return false
                } else {
                    return info[name]
                }
                
            }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #left{
        background-color: #3F4066;
        font-size: 16px;
        width: 15.6%;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 70px;
        bottom: 0;
        min-width: 100px;       
    }
    .fade-enter-active, .fade-leave-active {
      transition: margin-left .2s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
      margin-left: -16.2%;
    }
    
   
</style>
