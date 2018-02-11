<template>
  	<div class="home">
        <head-top></head-top>
        <home-left> </home-left>
       <div :class="{content:true, wrapCon: closeLeft}"><router-view ></router-view></div>
       <el-alert
          :title="alertText"
          type="error" v-if="showAlert" :closable="false">
        </el-alert> 
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import homeLeft from '../../components/left/left'
export default {
    data(){
        return{
            showAlert:false,
            closeLeft: false
        }
    },

	  mounted(){
        this.$on('showL', (val)=> {
            this.closeLeft = !val
        })     
    },

    components:{
        headTop,
        homeLeft,
    },

    computed:{
        
    },

    methods:{

    },
}

</script>

<style lang="scss">
    @import '../../style/mixin';
    body{
      overflow: hidden;
    }
    .home{
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        .content{
            position: absolute;
            left: 17%;
            top:90px;
            right: 1.2%;;
            bottom: 0;
            overflow-y:auto;
            transition: left .1s;
            .el-table{
              background: #F5F5F5;
            }
            *{
              transition: width .2s;
            }
        }
        .wrapCon{
          left: 0;
          padding: 0 .2rem;
        }

        .el-alert{
          position: absolute;
          width: auto;
          font-size: 16px;
          border-radius: 5px;
          left: 50%;
          top: 50%;
          transform:translate(-50%,-50%);
          -webkit-transform:translate(-50%,-50%);
          -moz-transform:translate(-50%,-50%);
          -o-transform:translate(-50%,-50%);
        }
    }

</style>
