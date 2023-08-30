<template>
    <div class="hear">
        <div class="hear_img">
            <img src="" alt="汇华科技">
        </div>
        <div class="hear_nav">
            <ul>
               <li v-for="item in NAV">{{item.name}}</li> 
            </ul>
        </div>
        <div class="hear_btn">
            <p>4004-12-12</p>
            <button class="hear_btn_inq" @click="openModel">在线咨询</button>
        </div>
    </div>

    <model :visible="modelVisible" />
</template>
<script setup>
    import { ref,reactive } from 'vue';
    import model from '../components/model/Model.vue'

    const NAV=reactive([
        {
            name:"首页"
        },{
            name:"阿里邮箱"
        },{
            name:"云产品"
        },{
            name:"钉钉服务"
        },{
            name:"生态与合作"
        },{
            name:"帮助中心"
        }
    ])

    let modelVisible=ref(false);
    const openModel=()=>{
        modelVisible.value=true;
        console.info(modelVisible);
    }  
</script>
<style scoped>
    .hear{
        display: flex;
        position: fixed;
        z-index: 10;   
        background-color: #ff6600; 
        font-size: 16px;
        color: #fff;
    }

    /* 在线咨询 */
    .hear_btn_inq{
        cursor: pointer;
        color: #fff;
        padding: 6px 20px;
        border-radius: 12px;
        background-color: transparent;
        border: 1px solid #fff;
    }
    .hear_btn_inq:hover{
        color: #ff6600;
        background-color: #fff;
        transition: .3s all;
    }
</style>
