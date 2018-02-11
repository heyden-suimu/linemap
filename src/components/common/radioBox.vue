 <template>
    <div class="wrap_radioBox">
	    <section class="radioBox"> 
            <button v-for="(item,index) in boxData" :class="{'check':index==_checkIndex}" @click="fn(index)">{{item.label}}</button>
        </section>
    </div>
</template>

<script>
    export default {
        name:'radioBox',
    	data(){
            return{

            }
        },
        mounted(){
      
        },
        computed:{
            _checkIndex:{
                set(){

                },
                get(){
                    return this.checkIndex
                }
            }
        },
        model:{
            prop:'checkIndex',
            event:'input'
        },
        props: {
            boxData:{
                default:[]
            },
            checkIndex:{
                default:0
            }
        },
        methods: {
            fn(index){
                this._checkIndex = index;
                this.$emit('input', index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .wrap_radioBox{
        display: inline-block;
    }
	.radioBox{
        button{
            background: none;
            padding: .14rem .1rem;
            min-width: 1.4rem;
            margin-right: .2rem;
            border:1px solid #ccc;
            border-radius: 3px;
            font-size: 12px; 
        }
        button.check{
            border: 1px solid #20a0ff;
        }
    }
    
</style>
