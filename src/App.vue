<script>
    import store from './store';
    import Card from 'components/card';

    module.exports =  {
        store:store,
        components:{
            'card':Card,
        },
        created:function(){
            console.log('created');
            store.commit('SET_FILTER_KEY')
        }
    }
</script>

<template>
    <div id="app">
        <!--<p>hello app template</p>-->
        <div class="sidebar">
            <card></card>
        </div>
    </div>
</template>

<style lang="less" scoped>
    #app{
        margin:20px auto;
        width:800px;
        height:600px;
        overflow:hidden;
        border-radius:3px;

        .sidebar, .main{
            height:100%;
        }
        .sidebar{
            float:left;
            width:200px;
            color:#f4f4f4;
            background-color:#2e3238;
        }
    }
</style>