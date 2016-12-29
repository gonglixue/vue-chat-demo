<script>
module.exports={
        created:function(){
            console.log('created')
        }
    }
</script>

<template>
    <div id="app">
        <p>hello app template</p>
    </div>
</template>

<style lang="less" scoped>
    #app{
        p{
            color:red;
        }
    }
</style>