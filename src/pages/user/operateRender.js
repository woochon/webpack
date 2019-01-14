/*export default {
    render(h){
        return h('div',
            {
                'class':{
                    operation:true,
                },
                style:{
                    color:'blue',
                    background:'yellow'
                },
                domProps: {
                    innerHTML: '<h1>ew</h1><span>你好啊</span>'
                },
                on: {
                    click: this.clickHandle,
                    mouseenter:this.mouseHandle
                }
            })
    },
    methods: {

        clickHandle() {
            console.log('sadf');
            console.log(this.$slots);
            if(this.state===0){
                console.log('禁止');
            }else if(this.state===1){
                console.log('查看');
            }
        },
        mouseHandle(){
            console.log('鼠标移入');
        }


    },
    props: {
        state:{
           type:Number
        }
    }
}*/
/*export default{
    render(h){
        return h(
            'h'+this.level,
            this.$slots.default
        )
    },
    props:{
        level:{
            type:Number,
            require:true
        }
    }
}*/

/*
* 创建如下的节点
* <h1>
  <a name="hello-world" href="#hello-world">
    Hello world!
  </a>
</h1>
* */
/*export default{
    render(h){
        //获取节点的文本内容
        let getChildrenTextContent = function(childen){
          return childen.map(function(node){
              return node.childen?getChildrenTextContent:node.text;
          }).join('')
        };

        // 创建kebab-case风格的ID
        let headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g,'-')
            .replace(/(^\-|\-$)/g,'');


        return h(
            'h'+this.level,
            [
                h(
                    'a',
                    {
                        attrs:{
                            name:headingId,
                            href:'#'+headingId
                        }
                    },
                    this.$slots.default
                )
            ]
        )
    },
    props:{
        level:{
            type:Number,
            require:true
        }
    },
    mounted(){
        console.log(this.$slots);
    }
}*/

/*
* 约束：VNode必须唯一
* */
/*export default{
    render(h){
        let myParagraphVNode = h('p', 'hi');
        return h(
            'div',
            {

            },
            Array.apply(null,{length:20}).map(function(){
                return h(
                    'p',
                    '哈哈哈'
                )
            })
        )
    }
}*/

/*
*
* <ul v-if="items.length">
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
  <p v-else>No items found.</p>
* */

/*export default{
    render(h){
        if(this.items.length){
            return h(
                'ul',
                this.items.map(function(item){
                    return h(
                        'li',
                        item.name+item.state
                    )
                })
            )
        }else{
            return h(
                'p',
                'No items found.'
            )
        }
    },
    props:['items']
}*/

/*
* v-model
* */
/*export default{
    functional:true,
    render(h,context){

        return h(
            'div',
            {
                style:{
                    color:'blue'
                },
                domProps:{

                },
                on:{
                    click:function(){
                        console.log(context)
                    }
                }
            },
            'box'
        )
    }
}*/

/*
 * 解决实际例子
 * */
/*export default{
    render(h){
        if(this.state===0){
            return h(
                'div',
                {},
                [
                    h(
                        'span',
                        {
                            on:{
                                click:this.clickHandle0
                            }
                        },
                        '激活'
                    ),
                    h(
                        'span',
                        {
                            on:{
                                click:this.clickHandle1
                            }
                        },
                        '删除'
                    ),
                ]
            )
        }else if(this.state===1){
            return h(
                'div',
                {},
                [
                    h(
                        'span',
                        {
                            on:{
                                click:this.clickHandle2
                            }
                        },
                        '查看'
                    ),
                    h(
                        'span',
                        {
                            on:{
                                click:this.clickHandle3
                            }
                        },
                        '编辑'
                    ),
                ]
            )
        }
    },
    props:{
        state:{
            type:Number,
            require:true
        }
    },
    methods: {
        clickHandle0() {
            this.$emit('message','state==0 激活')
        },
        clickHandle1() {
            this.$emit('message','state==0 删除')
        },
        clickHandle2() {
            this.$emit('message','state==1 禁止')
        },
        clickHandle3() {
            this.$emit('message','state==1 编辑')
        },


    }
}*/
import {hasClass,toggleClass} from "../../common/js/dom";

export default{
    render(h){
        let _this=this;
        return h(
            'div',
            {

            },
            [
                h(
                    'span',
                    {
                        style:{
                            background:'#d93f30',
                            display:'inline-block',
                            width:'40px',
                            lineHeight:'30px',
                            cursor:'pointer',
                            marginRight:'10px',
                            textAlign:'center',
                            color:'#fff'
                        },
                        on:{
                            click:function(){
                                console.log('按钮一');
                                console.log(_this.item);
                                console.log(_this.state);
                                if(_this.state){
                                    console.log('去禁止');
                                    _this.$emit('message',{state:2,data:_this.item});
                                }else{
                                    console.log('去激活');
                                    _this.$emit('message',{state:3,data:_this.item});
                                }
                            }
                        }
                    },
                    this.state===0?'激活':'禁止'
                ),
                h(
                    'span',
                    {
                        style:{
                            background:'#2c3f55',
                            display:'inline-block',
                            width:'40px',
                            lineHeight:'30px',
                            cursor:'pointer',
                            textAlign:'center',
                            color:'#fff'
                        },
                        on:{
                            /*click:function(event){
                                console.log('按钮二');
                                console.log(event);
                                toggleClass(event.target,'haha')
                            }*/
                            click:this.clickHandle0
                        }
                    },
                    this.state===0?'删除':'编辑'
                )
            ]
        )
    },
    props:{
        item:{
            type:Object,
            require:true
        }
    },
    computed:{
        state(){
            return this.item.state;
        }
    },
    methods: {
        clickHandle0() {
            console.log(this.item);
            // this.$emit('message','state==0 激活');
            if(this.state){
                console.log('去编辑');
                this.$emit('message',{state:0,data:this.item});
            }else{
                console.log('去删除');
                this.$emit('message',{state:1,data:this.item});
            }
        },
        clickHandle1() {
            this.$emit('message','state==0 删除')
        },
        clickHandle2() {
            this.$emit('message','state==1 禁止')
        },
        clickHandle3() {
            this.$emit('message','state==1 编辑')
        },
    }
}
