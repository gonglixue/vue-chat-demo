<script>
    import store from '../store';
    modules.exports = {
        store:store,
        methods:{
            onKeyUp(e){
                store.commit('SET_FILTER_KEY')
            }
        }
    }
</script>