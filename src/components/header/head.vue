<template>
    <header id='head_top'>
      <transition name="fade">  
          <div class="tip" v-if= "showLeft">
            <span>Demo</span>
          </div> 
      </transition>
      <div style="text-align:center;font-size:20px;height:70px;line-height:70px;color:white">实时路线演示</div>
      <!-- <span :class="{'el-icon-arrow-left':showLeft, 'leftIcon': showLeft, 'el-icon-arrow-right': !showLeft}" @click="hidLeft"></span>
      <div class="back" v-if="$route.path == '/home/devStatus' " @click="back"><span class="el-icon-arrow-left" >返回</span></div>
      <div class="user">
             <el-checkbox v-model="refresh" class = 'refresh' v-if='$route.path == "/home/vedio"' @change='getval'>自动刷新</el-checkbox>
            <el-dropdown trigger="click" @command="exit">
              <span class="el-dropdown-link" style="cursor:pointer">
                {{name}} <img src="../../images/user.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="exit">
                <el-dropdown-item command="a">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
      </div> -->
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {onVue} from '../../components/common/common'
    export default {
    	data(){
            // let info = JSON.parse(sessionStorage.login);
            // let name = info.username
            return{
              refresh:false,
              name: 'admin',
              showLeft: true
            }
        },
        created(){
            //获取用户信息
        },

        mounted(){

        },
        
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
            ...mapState([
                'userInfo'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
            exit(){
                sessionStorage.removeItem('login')
                this.$router.push("/login")
            },
            back(){
                this.$router.go(-1)
            },
            getval(val){
                this.$root.$emit('ndRefresh', this.refresh)
            },

            hidLeft() {
                this.showLeft = !this.showLeft;
                this.$parent.$emit('showL', this.showLeft)
            }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #head_top{
        height: 70px;
        font-size: 16px;
        background: #444967;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        right: 0;
        color: #B6B4C7;
        .tip{
            color: #B6B4C7;
            font-size: 18px;
            background: #232639;
            width: 15.6%;
            text-align:center;
            height: 70px;
            line-height: 70px;
            float: left;
            min-width: 100px; 
            overflow: hidden;   
        }
        >span{
            height: 70px;
            width: .24rem;
            display: inline-block;
            line-height: 70px;
        }
        .leftIcon{
            margin-left: -.24rem;
        }
        .back{
            position: absolute;
            bottom: .27rem;
            left: 17%;
            color: white;
            cursor:pointer
        }
        .user{
            position: absolute;
            width: 40%;
            text-overflow:ellipsis ;
            overflow: hidden;
            white-space: nowrap;
            min-width: 200px;
            right: 0;
            height: 70px;
            line-height: 70px;
            top: 0;
            text-align: right;
            span{
                font-size: 15px;
                width: 1.5rem;
                display: inline-block;
                text-decoration: underline;
                text-overflow:ellipsis ;
                overflow: hidden;
                white-space: nowrap;
            }
            .el-checkbox{
                color: #B6B4C7;
                margin-right: .6rem;
                position: absolute;
                right: 2rem;
            }
            .el-dropdown{
                margin-right: 1rem;
                position: absolute;
                right: .1rem;
                color: white;
                height: .6rem;
                img{
                    margin-left: .06rem;
                }
            }
        }
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 0.8rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
    .fade-enter-active, .fade-leave-active {
      transition: margin-left .2s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
      margin-left: -16.2%;
    }
</style>
