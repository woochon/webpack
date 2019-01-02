<template>
    <div class="myTab">
        <div class="box1">
            <ul>
                <li v-for="(value,index) in titles" :key="index">
                    <div>{{value.label}}</div>
                </li>
            </ul>
        </div>
        <div class="box2">
            <table class="tab2">
                <tr v-for="(user,index) in data" :key="index">
                    <!--<td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td v-if="user.sex==1">男</td>
                    <td v-if="user.sex==2">女</td>
                    <td>{{user.email}}</td>-->
                    <td v-for="(item,key) in titles" :key="key">
                        {{user[item.key]}}
                    </td>
                </tr>
            </table>
        </div>
        <div>
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
    .myTab{
        box-sizing: border-box;
    }
    li{
        list-style: none;
    }
    .myTab{
        width:980px;
        height:600px;
        background-color: #fff;
        margin:100px auto;
    }
    .box1,.box1>ul{
        width:980px;
        height:20px;
    }
    .box1>ul{
        display: table;
    }
    .box1>ul li{
        display: table-cell;
    }
    tr{
        width:980px;
        height:20px;
    }
    td{
        width:195px;
        background-color: gray;
        /*border: 1px solid #FF00FF;*/
        overflow: hidden;
        /*word-wrap: break-word; 内容将在边界内换行,这里显示省略号,所以不需要了*/
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box1 {
        width: 980px;
        /*height:40px;*/
        background-color: mediumpurple;
        position: relative;
        top: 0;
        left: 0;
        z-index: 200;
    }
    
    .box2{
        width:980px;
        /*height:300px;*/
        background: goldenrod;
        /*overflow-y: scroll;*/
    }
</style>