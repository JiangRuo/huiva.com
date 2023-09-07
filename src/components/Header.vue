<template>
  <div class="top">
    <div>
      阿里授权服务商：汇华信息科技有限公司
    </div>
  </div>
  <div :class="scrollTop==0?'hear':'hearSec'">
    <div class="hear_img">
      <img :src="scrollTop==0?'/src/assets/image/logo.png':'/src/assets/image/logo_0.png'" alt="汇华科技">
    </div>
    <div class="hear_nav">
      <ul>
        <li class="hear_nav_li" v-for="item in NAV">
          <router-link :class="scrollTop==0 ? 'hear_nav_li_a':'hear_nav_li_aS'"
            :to="item.to">{{item.name}}</router-link>
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
    reactive,
    onMounted
  } from 'vue';
  import model from '../components/model/Model.vue'

  const NAV = reactive([{
    name: "首页",
    to: "/"
  }, {
    name: "企业邮箱",
    to: "/Email"
  }, {
    name: "云产品",
    to: "/"
  }, {
    name: "钉钉服务",
    to: "/"
  }, {
    name: "企业应用",
    to: "/"
  }, {
    name: "生态与合作",
    to: "/"
  }, {
    name: "帮助中心",
    to: "/"
  }])
  // 模态框
  let modelVisible = ref(false);
  const openModel = () => {
    modelVisible.value = true;
  }
  const close = (status) => {
    modelVisible.value = status;
  }

  let [scrollTop] = [ref(0)];
  // 监测滚轮事件
  const doScroll = (event) => {
    scrollTop.value = document.documentElement.scrollTop;
  }
  onMounted(() => {
    window.addEventListener('scroll', doScroll)
  })
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

  .hearSec {
    display: flex;
    align-items: center;
    position: fixed;
    height: 64px;
    overflow: hidden;
    top: 0;
    width: 100vw;
    z-index: 9;
    font-size: 16px;
    color: black;
    background-color: #fff;
    transition: .3s all;
  }

  /* 导航栏 */
  .hear_img {
    text-align: center;
    width: 20%;
    overflow: hidden;
  }

  .hear_img img {
    width: 60%;
    object-fit: cover;
  }

  .hear_nav {
    width: 50%;
  }

  .hear_nav ul {
    display: flex;
  }

  .hear_nav ul li {
    font-size: .9rem;
    margin-right: 3%;
  }

  .hear_nav_li_a {
    color: #fff;
    --bacgrC: #fff;
    transition: .3s all;
    padding-bottom: 10px;
    background: linear-gradient(var(--bacgrC) 0 0) 0 100% / var(--backgrH, 0) 2px no-repeat;
  }

  .hear_nav_li_aS {
    color: black;
    --bacgrC: #ff6600;
    transition: .3s all;
    padding-bottom: 10px;
    background: linear-gradient(var(--bacgrC) 0 0) 0 100% / var(--backgrH, 0) 2px no-repeat;
  }

  .hear_nav_li a:hover {
    --backgrH: 100%;
  }

  /* 在线咨询 */
  .hear_btn {
    display: flex;
    align-items: center;
  }

  .hear_btn_inq {
    cursor: pointer;
    color: black;
    padding: 6px 20px;
    border-radius: 12px;
    background-color: transparent;
    border: 1px solid #ff6600;
  }

  .hear_btn_inq:hover {
    color: #Fff;
    background-color: #ff6600;
    transition: .3s all;
  }
</style>