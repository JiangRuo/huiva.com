<template>
  <div class="top">
    <div>
      阿里授权服务商：汇华信息科技有限公司
    </div>
  </div>
  <div class="hear">
    <div class="hear_img">
      <img src="" alt="汇华科技">
    </div>
    <div class="hear_nav">
      <ul>
        <li class="hear_nav_li" v-for="item in NAV">
          <router-link to="/login">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="hear_btn">
      <p>400-066-2020</p>
      <button class="hear_btn_inq" @click="openModel">在线咨询</button>
    </div>
  </div>
  <model :visible="modelVisible" @handleCancel="close" />
</template>
<script setup>
  import {
    ref,
    reactive
  } from 'vue';
  import model from '../components/model/Model.vue'

  const NAV = reactive([{
    name: "首页"
  }, {
    name: "企业邮箱"
  }, {
    name: "云产品"
  }, {
    name: "钉钉服务"
  }, {
    name: "企业应用"
  }, {
    name: "生态与合作"
  }, {
    name: "帮助中心"
  }])
  // 模态框
  let modelVisible = ref(false);
  const openModel = () => {
    modelVisible.value = true;
  }
  const close = (status) => {
    modelVisible.value = status;
  }
</script>
<style scoped>
  .top {
    width: 100vw;
    background-color: #333333;
    color: #fff;
    padding: 6px 10%;
    font-size: .9rem;
  }

  .hear {
    display: flex;
    align-items: center;
    position: fixed;
    height: 64px;
    overflow: hidden;
    top: calc(12px + .9rem);
    width: 100vw;
    z-index: 9;
    font-size: 16px;
    color: #fff;
    transition: .3s all;
  }

  /* 导航栏 */
  .hear_nav ul {
    display: flex;
  }

  .hear_nav_li {
    transition: all 0.3s;
    background: linear-gradient(#fff 0 0) 0 var(--backgrH) / var(100%, 0) 10px no-repeat;
  }

  .hear_nav_li :hover {
    --backgrH: 100%;
  }

  /* 在线咨询 */
  .hear_btn {
    display: flex;
    align-items: center;
  }

  .hear_btn_inq {
    cursor: pointer;
    color: #fff;
    padding: 6px 20px;
    border-radius: 12px;
    background-color: transparent;
    border: 1px solid #fff;
  }

  .hear_btn_inq:hover {
    color: #ff6600;
    background-color: #fff;
    transition: .3s all;
  }
</style>