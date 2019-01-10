<!--
vue同一solt在组件中渲染多次解决办法
https://blog.csdn.net/chern1992/article/details/74332367
-->

<script>
    export default {
        render(createElement){
            return createElement('div',[
                ...this.slotf
            ])
        }
    }
</script>