<script>
    import store from '../store';
    import { mapState } from 'vuex'
    module.exports = {
        store:store,
        computed:mapState({
            user: state=>state.user,
            filterKey:state=>state.filterKey
        }),
        methods:{
            onKeyUp(e){
                store.commit('SET_FILTER_KEY',e.target.value)  // 不能this.$store.commit
            }
        }
    }
</script>

<template>
    <div class="card">
        <header>
            <img class="avatar" width="40" height="40" v-bind:alt="user.name" v-bind:src="user.img">
            <p class="name">{{ user.name }}</p>
        </header>
        <footer>
            <input class="search" type="text" placeholder="search user..." v-on:keyup="onKeyUp">
        </footer>
    </div>
</template>

<style lang="less" scoped>
    .card{
        padding:12px;
        border-bottom:solid 1px #24272c;

        footer{
            margin-top:10px;
        }

        .avatar, .name{
            vertical-align: middle;
        }
        .avatar{
            border-radius: 2px;
        }
        .name{
            display:inline-block;
            margin: 0 0 0 15px;
            font-size:16px;
        }
        .search{
            padding:0 10px;
            /*width:100%;*/
            font-size:12px;
            color:#fff;
            height:30px;
            line-height:30px;
            border:solid 1px #3a3a3a;
            border-radius: 4px;
            outline: none; /*??*/
            background-color:#26292e;
        }
    }
</style>