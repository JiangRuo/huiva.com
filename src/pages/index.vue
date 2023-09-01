<template>
  <div style="background-color: #ff7700;height: 50vh;width: 100vw;">

  </div>

  <div class="busi">
    <div class="busi_title">
      <h2>三大业务版块</h2>
      <p>促进企业云钉邮一体</p>
    </div>
    <div class="busi_colum">
      <ul>
        <li class="busi_colum_li">
          <div class="busi_colum_tit busi_bagr">
            <div class="busi_colum_tit_left">
              <p>阿里邮箱</p>
              <p>阿里邮箱示例数据示例数据示例数据示例数据测试示例数据</p>
            </div>
            <div class="busi_colum_tit_right">
              <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
            </div>
          </div>
          <div class="busi_colum_box">
            <ul>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="busi_colum_li">
          <div class="busi_colum_tit busi_bagr">
            <div class="busi_colum_tit_left">
              <p>云产品</p>
              <p>阿里邮箱示例数据示例数据示例数据示例数据测试示例数据</p>
            </div>
            <div class="busi_colum_tit_right">
              <img src="../assets/index_busi_icon2.png" alt="阿里邮箱">
            </div>
          </div>
          <div class="busi_colum_box">
            <ul>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="busi_colum_li">
          <div class="busi_colum_tit busi_bagr">
            <div class="busi_colum_tit_left">
              <p>钉钉</p>
              <p>阿里邮箱示例数据示例数据示例数据示例数据测试示例数据</p>
            </div>
            <div class="busi_colum_tit_right">
              <img src="../assets/index_busi_icon3.png" alt="阿里邮箱">
            </div>
          </div>
          <div class="busi_colum_box">
            <ul>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
              <li @click="buisRoute">
                <div class="busi_colum_box_img">
                  <img src="../assets/index_busi_icon.png" alt="阿里邮箱">
                </div>
                <div class="busi_colum_box_txt">
                  <p>阿里邮箱示例数据</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  const buisRoute = () => {
    alert(1);
  }
</script>
<style scoped>
  .busi {
    box-sizing: border-box;
    width: 100vw;
    padding: 5vh 8%;
  }

  .busi_title {
    width: 100%;
    text-align: center;
  }

  .busi_title h2 {
    font-weight: 800;
    font-size: 1.4rem;
    line-height: 3rem;
  }

  .busi_title p {
    font-size: .9rem;
    color: #555555;
  }

  .busi_colum {
    width: 100%;
    margin-top: 6vh;
  }

  .busi_colum ul {
    display: flex;
  }

  .busi_colum_li {
    width: 32%;
    margin-right: 2%;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0px 7px 10px 0px #e4e6f3;
    border: 1px solid #dcdee4;
    transition: .3s all;
  }

  .busi_colum_li:hover {
    transform: translateY(-10px);
    --backgr_busi: #ff6600;
    --backgr_busi2: #ff6600;
    --backgr_busi3: #ff6600;
    --backgr_busiW: 3.5rem;
  }

  .busi_colum_li:hover .busi_colum_tit p {
    color: #fff;
  }

  .busi_colum_tit {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
  }

  .busi_bagr {
    background: var(--backgr_busi);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .busi_bagr2 {
    background: var(--backgr_busi2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .busi_bagr3 {
    background: var(--backgr_busi3);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .busi_colum_tit_left {
    width: 80%;
  }

  .busi_colum_tit_left p:nth-child(1) {
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .busi_colum_tit_left p:nth-child(2) {
    font-size: .9rem;
    line-height: 1.3rem;
    color: #555555;
    width: 90%;
  }

  .busi_colum_tit_right {
    position: relative;
  }

  .busi_colum_tit_right img {
    position: absolute;
    transition: .4s all;
    width: var(--backgr_busiW);
    max-height: auto;
    object-fit: cover;
  }

  /* 按钮区 */
  .busi_colum_box {
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
  }

  .busi_colum_box ul {
    padding-left: 0;
    width: 100%;
    display: block;
  }

  .busi_colum_box li {
    display: flex;
    cursor: pointer;
    width: 100%;
    padding: 1.1rem 0;
  }

  .busi_colum_box li:hover {
    background-color: #f6efeb;
  }

  .busi_colum_box_img {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .busi_colum_box_img img {
    width: 40%;
  }

  .busi_colum_box_txt {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .busi_colum_box_txt p {
    font-weight: 800;
    font-size: .9rem;
    padding-left: 10%;
  }
</style>