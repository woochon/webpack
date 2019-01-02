<template>
    <div class="myTab">
        <div class="box1">
            <ul class="tab1">
                <li v-for="(value,index) in titles" :key="index">
                    <div>{{value.label}}</div>
                </li>
                <li v-if="handleRow"><div>操作</div></li>
            </ul>
        </div>
        <div class="box2">
            <ul class="tab2">
                <li v-for="(user,index) in data" :key="index">
                    <!--<td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td v-if="user.sex==1">男</td>
                    <td v-if="user.sex==2">女</td>
                    <td>{{user.email}}</td>-->
                    <div v-for="(item,key) in titles" :key="key">
                        {{user[item.key]}}
                    </div>
                    <div class="operation" v-if="handleRow">
                        <slot :row-info="{user,index}"></slot>
                    </div>
                </li>
            </ul>
        </div>
        <div class="page">
            <Page @on-change="getPage" @on-page-size="getPageSize"></Page>
        </div>
    </div>
</template>
<script>
    /* 静态表格  只是单纯的展示数据和换页功能 */
    import Page from './page.vue'
    export default{
        name: 'myTab',
        data () {
            return {
                currentPage:1,
                pageSize:10
            }
        },
        props:{
            /* 传入的表格标题 */
            titles:{
                type:Array,
                require:true
            },
            /* 传入的表格数据 */
            data:{
                type:Array,
                require:true
            },
            handleRow:{
                type:Boolean,
                default:false
            }
        },
        components: {
            Page
        },
        methods:{
            getPage(data){
                console.log(data,'=======');
                this.currentPage = data;
                this.$emit('get-info',{pageSize:this.pageSize,currentPage:this.currentPage});
            },
            getPageSize(val){
               console.log(val,'+++++');
                this.pageSize = val;
                this.$emit('get-info',{pageSize:this.pageSize,currentPage:this.currentPage});
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    li{
        text-align: center;
        padding: 10px 0;
    }
    .myTab,.box1,.tab1,.box2,.tab2{
        width: 100%;
    }
    .tab1{
        display: flex;
        &>li{
            flex:1;
        }
    }
    .tab2{
        &>li{
            display: flex;
            &>div{
                flex:1;
            }
        }
    }
</style>
