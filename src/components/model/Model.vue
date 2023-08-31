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
        <div>
          <p>40001-12-1212</p>
        </div>
      </div>
      <div class="modal_content_right">
        <h1>现在开通试用，立享买3年送3年优惠</h1>
        <div>
          <el-input v-model="input1" class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search" />
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
</style>