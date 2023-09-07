<template>
  <div class="model" v-if="props.visible">
    <div class="modal_moe" @click="close">
    </div>
    <div class="modal_content">
      <div class="modal_content_left">
        <h1>申请免费试用</h1>
        <p>为了帮助您更好地了解和使用网易企业邮箱，在您申请成功后，将由专属邮箱顾问为您安排产品体验服务。</p>
        <ul>
          <li>
            <img src="" alt="">
            <p>产品解说</p>
          </li>
          <li>
            <img src="" alt="">
            <p>产品配置</p>
          </li>
          <li>
            <img src="" alt="">
            <p>产品体验</p>
          </li>
        </ul>
        <div class="modal_content_left_p">
          <p>400-066-2020</p>
        </div>
      </div>
      <div class="modal_content_right">
        <h1>现在开通试用，立享买3年送3年优惠</h1>
        <div>
          <el-input class="w-50 m-2" size="large" placeholder="请输入公司名称/单位名称" />
          <el-input class="w-50 m-2" size="large" placeholder="请输入您的名字" />
          <el-input class="w-50 m-2" size="large" placeholder="请输入11位手机号码" />
          <el-button>立即开通</el-button>
        </div>
        <div class="text">
          <p>吴先生 139****9233 刚刚领取</p>
          <p>刘先生 139****9233 刚刚领取</p>
          <p>宋先生 139****9233 刚刚领取</p>
          <p>李先生 139****9233 刚刚领取</p>
          <p>周先生 139****9233 刚刚领取</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
  const props = defineProps({
    visible: {
      // 参数类型
      type: Boolean,
      // 参数默认值
      default: false
    }
  });
  const emit = defineEmits(['handleCancel'])
  // 关闭模态框
  const close = () => {
    emit('handleCancel', false);
  }
</script>
<style scoped>
  .model {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .modal_moe {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal_content {
    position: absolute;
    display: flex;
    z-index: 11;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
  }

  .modal_content_left {
    width: 50%;
    box-sizing: border-box;
    padding: 3rem 2rem;
    background-color: #ff6600;
    color: #fff;
    text-align: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .modal_content_left h1 {
    margin-bottom: 2rem;
  }

  .modal_content_left>p {
    text-align: left;
    font-size: .9rem;
    line-height: 2rem;
  }

  .modal_content_left ul {
    display: flex;
    margin-bottom: 3rem;
  }

  .modal_content_left_p p {
    font-weight: 800;
    font-size: 1.2rem;
  }

  .modal_content_right {
    box-sizing: border-box;
    width: 50%;
    padding: 3rem 2rem;
  }

  .modal_content_right h1 {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .text {
    text-align: center;
    background-color: #f7b589;
    overflow: hidden;
    height: 1.3rem;
    border-radius: 10px;
  }

  .text p {
    font-size: .9rem;
    position: relative;
    color: #333333;
    animation: name 16s infinite normal;
  }

  @keyframes name {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    20% {
      -webkit-transform: translate3d(0, -1.2rem, 0);
      transform: translate3d(0, -1.2rem, 0);
    }

    30% {
      -webkit-transform: translate3d(0, -2.4rem, 0);
      transform: translate3d(0, -2.4rem, 0);
    }

    40% {
      -webkit-transform: translate3d(0, -3.6rem, 0);
      transform: translate3d(0, -3.6rem, 0);
    }

    50% {
      -webkit-transform: translate3d(0, -4.8rem, 0);
      transform: translate3d(0, -4.8rem, 0);
    }

    60% {
      -webkit-transform: translate3d(0, -4.8rem, 0);
      transform: translate3d(0, -4.8rem, 0);
    }

    70% {
      -webkit-transform: translate3d(0, -3.6rem, 0);
      transform: translate3d(0, -3.6rem, 0);
    }

    80% {
      -webkit-transform: translate3d(0, -2.4rem, 0);
      transform: translate3d(0, -2.4rem, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -1.2rem, 0);
      transform: translate3d(0, -1.2rem, 0);
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
</style>