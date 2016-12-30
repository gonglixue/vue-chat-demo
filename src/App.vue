<script>
    import store from './store';
    console.log('app.vue')
    module.exports =  {
        store:store,
        created:function(){
            console.log('created');
            store.commit('SET_FILTER_KEY')
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