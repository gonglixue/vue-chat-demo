<script>
    module.exports = {
        vuex:{
            getters:{
                user: ({user}) => user,
                session: ({sessions, currentSessionId}) => sessions.find(session=>session.id === currentSessionId)
            }
        },
        filters:{
            //将日期过滤为hour:minutes
            time(date){
                if(typeof date === 'string'){
                    date = new Date(date);
                }
                return date.getHours() + ':' + date.getMinutes();
            }
        }
    }
</script>

<template>
    <div class="message" v-scroll-bottom="session.messages">
        <ul v-if="session">
            <li v-for="item in session.messages">
                <p class="item">
                    <span>{{item.date | time}}</span>
                </p>
                <div class="main" v-bind:class="{self: item.self}">
                    <img class="avatar" width="30" height="30" v-bind:src="item.self? user.img : session.user.img"/>
                    <div class="text">{{ item.content }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .message{

    }
</style>