/**
 * Created by chenjun on 2016/12/30.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();

const store = new Vuex.Store({
    state:{
        //当前用户（我）
        user:{
            name:'coffce',
            img:'dist/images/1.jpg'
        },
        //会话列表
        sessions:[
            {
                id:1,
                user:{
                    name:'示例介绍',
                    img:'dist/images/2.png'
                },
                message:[
                    {
                        content:'hello,这是一个基于Vue 2.0 + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorage',
                        date:now
                    },{
                        content:'项目地址：https://github.com/coffcer/vue-chat',
                        date:now
                    }
                ]
            },
            {
                id:2,
                user:{
                    name:'webpack',
                    img:'dist/images/3.jpg'
                },
                messages:[]
            }
        ],
        //当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey:''
    },
    mutations:{
        INIT_DATE(state){
            let data = localStorage.getItem('vue-chat-session');
            if(data){
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        SEND_MESSAGE({sessions, currentSessionId}, content){  // playload
            let session = session.find(item=>item.id === currentSessionId);  //找到当前的session
            session.messages.push({
                content:content,
                date:new Date(),
                self:true  //标记为自己发的消息
            })
        },
        // 选择会话
        SELECT_SESSION(state, id){
            state.currentSessionId = id;
        },
        //搜索
        SET_FILTER_KEY(state, value){
            state.filterKey = value;
            console.log('search ' + value)
        }
    },
    // actions:{
    //     initData(context){
    //         context.commit('INIT_DATA')
    //     },
    //     sendMessage(context,content){
    //         context.commit('SEND_MESSAGE',content)
    //     },
    //     selectSession(context, id){
    //         context.commit('SELECT_SESSION', id);
    //     },
    //     search(context, value){
    //         context.commit('SET_FILTER_KEY', value);
    //     }
    // }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    //search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
    search: ({ dispatch }, value) => console.log('search')
};
// modules.export = {
//     store:store,
//     actions:{
//         initData: ({ dispatch }) => dispatch('INIT_DATA'),
//         sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
//         selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
//         //search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
//         search: ({ dispatch }, value) => console.log('search')
//     }
// }