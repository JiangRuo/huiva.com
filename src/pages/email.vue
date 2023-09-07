<template>
  <div style="background-color: #ff7700;height: 50vh;width: 100vw;">
  </div>

  <!-- 三栏介绍 -->
  <div class="cloum">
    <ul>
      <li>
        <div class="cloum_img">
          <img src="/src/assets/image/cloum_img.png" alt="首次开通">
        </div>
        <div class="cloum_box">
          <p>首次开通企业邮箱试用</p>
          <p>7天超长试用时长，让您充分体验</p>
        </div>
      </li>
      <li>
        <div class="cloum_img">
          <img src="/src/assets/image/cloum_img2.png" alt="更换服务商">
        </div>
        <div class="cloum_box">
          <p>更换企业邮箱服务商</p>
          <p>全程0参与无感搬家，安心省事</p>
        </div>
      </li>
      <li>
        <div class="cloum_img">
          <img src="/src/assets/image/cloum_img3.png" alt="马上开通">
        </div>
        <div class="cloum_box">
          <p>马上开通，对接人工服务</p>
          <p>一对一在线咨询专业邮箱顾问</p>
        </div>
      </li>
    </ul>
  </div>

  <!-- 产品规格 -->
  <div class="product">
    <div class="pub_title">
      <h2>产品规格</h2>
      <p>促进企业云钉邮一体</p>
    </div>

    <div class="product_ctn">
      <ul>
        <li>
          <div class="product_ctn_tit">
            <h3>体验版</h3>
            <p>描述信息描述信息描述信息描述信息</p>
          </div>
          <div class="product_ctn_txt">
            <p>
              <span>容量</span>
              <span>邮件无限容量</span>
            </p>
          </div>
          <div class="product_ctn_money">

          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
  .cloum {
    padding: 0 10%;
  }

  .cloum ul {
    display: flex;
    width: 100%;
    transform: translateY(-1rem);
  }

  .cloum li {
    box-sizing: border-box;
    width: 30%;
    margin-right: 3%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(20deg, #f1e1d7, #FFFFFF, #efa06b);
    box-shadow: 0px 3px 18px 0px rgba(210, 210, 210, 0.7);
    border-radius: 10px;
  }

  .cloum_img {
    margin-right: 1.5rem;
  }

  .cloum_img img {
    width: 3rem;
  }

  .cloum_box p:nth-child(1) {
    font-weight: 800;
    color: #ff6600;
  }

  .cloum_box p:nth-child(2) {
    line-height: 2.2rem;
    font-size: .9rem;
    color: #666666;
  }

  /* 产品规格 */
  .product {
    padding: 8vh 10%;
  }
</style>