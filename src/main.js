/**
 * Created by chenjun on 2016/12/29.
 */
import Vue from 'vue';
import App from './App';

var app = new Vue({
    el:'#body',
    data:{
        message:'hello vue chat'
    },
    components:{
        'app':App
    }
})