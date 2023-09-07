<template>
  <div style="background-color: #ff7700;height: 50vh;width: 100vw;">

  </div>

  <!-- 三大业务版块 -->
  <div class="busi">
    <div class="pub_title">
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

  <!-- 数字化增值产品 -->
  <div class="product">
    <div class="pub_title" style="color: #fff;">
      <h2>数字化增长运营产品</h2>
      <p style="color: #fff;">数字化一线上云</p>
    </div>
    <div class="product_box">
      <div class="product_box_tit">
        <ul class="product_box_tit_ul" @click="product">
          <li :class="isProduct == 'email' ? isProRigth : isProPick" data-name="email">
            阿里邮箱
          </li>
          <li :class="isProduct == 'aliyun' ? isProRigth : isProPick" data-name="aliyun">
            阿里云
          </li>
          <li :class="isProduct == 'dingtalk' ? isProRigth : isProPick" data-name="dingtalk">
            钉钉
          </li>
        </ul>
      </div>
      <div class="product_box_cnt">
        <div class="product_box_cnt_left">
          <ul>
            <li :class="proClass(index)" v-for="(item,index) in listPro" @click="product_box(item,index)" :key="index">
              {{item.name}}</li>
          </ul>
        </div>
        <div class="product_box_cnt_right">
          <h1>{{product_data.tit}}</h1>
          <p>安全稳定、单账号不限容量，百万中小企业优选阿里企业邮箱周年庆，钜惠活动，新用户可享购买3年送3年，购买5年送5年，低至5折</p>
          <div class="product_box_cnt_right_btn">
            <p>免费试用</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 华南业务覆盖 -->
  <div class="huiva">
    <div class="pub_title">
      <h2>华南区业务覆盖</h2>
      <p>超过80%的国内客户能获得上门服务的机会</p>
    </div>

    <div class="huiva_box">
      <ul>
        <li>
          <p>22</p>
          <p>22座城市</p>
        </li>
        <li>
          <p>100+</p>
          <p>110家渠道服务商</p>
        </li>
        <li>
          <p>300+</p>
          <p>300多个一线销售</p>
        </li>
        <li>
          <p>20000</p>
          <p>服务20550个企业客户</p>
        </li>
      </ul>
    </div>
  </div>

  <!-- 资讯中心 -->
  <div class="infor">
    <div class="pub_title">
      <h2>资讯中心</h2>
      <p>了解汇华科技最新动态</p>
    </div>

    <div class="infor_cnt">
      <div class="infor_cnt_01">
        <div class="infor_cnt_01_top infor_cnt_01_top_img">
          <div class="infor_cnt_01_top_txt">
            <h3>汇华新闻</h3>
            <p>见证我们的成长</p>
          </div>
        </div>
        <div class="infor_cnt_01_box">
          <ul>
            <li v-for="item in inFor">
              <p>{{item.time}}</p>
              <router-link to="/">
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="infor_cnt_01_btn">
          <router-link to="/">
            <p>了解更多 ></p>
          </router-link>
        </div>
      </div>
      <div class="infor_cnt_01">
        <div class="infor_cnt_01_top infor_cnt_01_top_img2">
          <div class="infor_cnt_01_top_txt">
            <h3>汇华新闻</h3>
            <p>见证我们的成长</p>
          </div>
        </div>
        <div class="infor_cnt_01_box">
          <ul>
            <li>
              <p>2023-09-06</p>
              <router-link to="/">
                <p>阿里邮箱迭代(06月)完成</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="infor_cnt_01_btn">
          <router-link to="/">
            <p>了解更多 ></p>
          </router-link>
        </div>
      </div>
      <div class="infor_cnt_01 infor_cnt_02">
        <div class="infor_cnt_tui">
          <p>精彩推荐</p>
          <router-link to="/">
            <span>查看更多</span>
          </router-link>
        </div>
        <div class="infor_cnt_tui_img">
          <img src="/src/assets/image/infor_cnt_01.png" alt="">
        </div>
        <div class="infor_cnt_tui_img2">
          <img src="/src/assets/image/infor_cnt_02.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
  import {
    ref,
    reactive
  } from 'vue';
  import {
    computed
  } from 'vue'
  const buisRoute = () => {
    alert(1);
  }

  const [isProduct, isProRigth, isProPick] = [ref('email'), "product_box_tit_right product_box_tit_pick",
    "product_box_tit_right"
  ];
  const email = [{
    name: "企业邮箱标准版"
  }, {
    name: "企业邮箱集团版"
  }, {
    name: "企业邮箱尊享版"
  }];
  let listPro = reactive(email);
  const product = (e) => {
    isProduct.value = e.target.dataset.name;
    //重置侧边栏类名
    chid.value = 0;
    switch (e.target.dataset.name) {
      case "email":
        listPro = email;
        product_data = {
          tit: "阿里邮箱标准版"
        }
        break;
      case "aliyun":
        product_data = {
          tit: "ECS服务器"
        }
        listPro = [{
          name: "ECS服务器",
          key: ""
        }, {
          name: "ECS服务器",
          key: ""
        }, {
          name: "ECS服务器",
          key: ""
        }]
        break;
      default:
        product_data = {
          tit: "钉钉专业版"
        }
        listPro = [{
          name: "钉钉专业版",
          key: ""
        }, {
          name: "宜搭",
          key: ""
        }, {
          name: "tb",
          key: ""
        }]
        break;
    }
  }

  let product_data = reactive({
    tit: "阿里邮箱标准版"
  });
  const product_box = (item, index) => {
    chid.value = index;
    product_data = {
      tit: item.name
    }
  }

  //产品侧边栏类计算属性
  let chid = ref(0);
  const proClass = computed((index) => {
    return (index) => {
      return index == chid.value ? 'product_box_cnt_left_pick' : '';
    }
  })

  const inFor = reactive([{
    time: "2023-09-07",
    title: "阿里邮箱迭代(6月)完成"
  },
  {
    time: "2023-09-07",
    title: "阿里邮箱迭代(6月)完成"
  },
  {
    time: "2023-09-07",
    title: "阿里邮箱迭代(6月)完成"
  }
  ])
</script>
<style scoped>
  .busi {
    overflow: hidden;
    box-sizing: border-box;
    width: 100vw;
    padding: 8vh 8%;
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

  .product {
    margin-top: 5vh;
    margin-bottom: 10vh;
    overflow: hidden;
    padding: 10vh 0 10vh 0;
    background-image: url(../assets/94.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .product_box {
    padding: 0 8%;
  }

  .product_box_tit {
    padding-top: 3rem;
    font-size: .9rem;
  }

  .product_box_tit_ul {
    /*解决多出来的内边距40px，问题还需要排查*/
    padding-left: 0;
    margin-left: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #e4e6f3;
  }

  .product_box_tit_ul li {
    cursor: pointer;
    flex: 1;
    font-weight: 800;
    padding: 10px 0;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    transition: .3s all;
  }

  .product_box_tit_ul li:hover {
    color: #fff;
  }

  .product_box_tit_ul li:nth-child(3) {
    border-right: 0;
  }

  .product_box_tit_right {
    border-right: 1px solid #e4e6f3;
  }

  .product_box_tit_ul .product_box_tit_pick {
    background-color: #ff6600;
    color: #fff;
  }

  .product_box_cnt {
    margin-bottom: 5rem;
    padding: 2rem 0;
    display: flex;
    position: relative;
    z-index: 2;
  }

  .product_box_cnt_left {
    padding-left: 0;
    margin-left: 40px;
    width: 20%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .product_box_cnt_left ul {
    padding: 1rem 0;
    padding-left: 0;
    text-align: center;
  }

  .product_box_cnt_left li {
    cursor: pointer;
    color: #a7a8ad;
    font-weight: 700;
    padding: 1rem 0;
    font-size: .9rem;
  }

  .product_box_cnt_left li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .product_box_cnt_left_pick {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .product_box_cnt_right {
    width: 80%;
    box-sizing: border-box;
    padding: 3rem 0 0 8%;
  }

  .product_box_cnt_right h1 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .product_box_cnt_right>p {
    width: 70%;
    font-size: .9rem;
    color: #d2d6e4;
  }

  .product_box_cnt_right_btn {
    transition: .3s all;
    cursor: pointer;
    margin: 2rem 0;
    width: 15%;
    border: 1px solid #fff;
  }

  .product_box_cnt_right_btn>p {
    text-align: center;
    padding: 5px 1rem;
    color: #fff;
  }

  .product_box_cnt_right_btn:hover {
    background-color: #ff6600;
    border: 1px solid #ff6600;
  }

  /* 华南业务覆盖 */
  .huiva {
    overflow: hidden;
    padding: 8vh 8%;
    background-image: url(../assets/huiva_banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .huiva_box {
    margin-top: 3rem;
  }

  .huiva_box ul {
    display: flex;
    padding-left: 0;
  }

  .huiva_box li {
    flex: 1;
    text-align: center;
  }

  .huiva_box li p:nth-child(1) {
    color: #ff6600;
    font-size: 3rem;
    font-weight: 800;
  }

  .huiva_box li p:nth-child(2) {
    color: #6F7385;
  }

  /* 资讯中心 */
  .infor {
    overflow: hidden;
    padding: 8vh 10%;
  }

  .infor_cnt {
    margin-top: 10vh;
    display: flex;
  }

  .infor_cnt_01 {
    overflow: hidden;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.08);
    width: 30%;
    margin-right: 3%;
    transition: .3s all;
  }

  .infor_cnt_02 {
    position: relative;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  .infor_cnt_01:hover .infor_cnt_01_top {
    transform: scale(1.05);
  }

  .infor_cnt_01_top {
    transition: .3s all;
    padding: 4rem;
    border-radius: 5px;
    color: #fff;
    text-align: center;
  }

  .infor_cnt_01_top_img {
    background-image: url(../assets/image/infor_cnt_01.png);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .infor_cnt_01_top_img2 {
    background-image: url(../assets/image/infor_cnt_02.png);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .infor_cnt_01_top_txt h3 {
    line-height: 2rem;
  }

  .infor_cnt_01_top_txt p {
    font-size: .8rem;
    color: #dcdee4;
  }

  .infor_cnt_01_box {
    box-sizing: border-box;
    padding: 1.5rem 1rem;
  }

  .infor_cnt_01_box ul {
    padding-left: 0;
  }

  .infor_cnt_01_box ul li {
    display: flex;
    margin-bottom: 10px;
    align-items: self-end;
  }

  .infor_cnt_01_box ul li>p:nth-child(1) {
    font-size: .8rem;
    color: #7B7D85;
    margin-right: 1.5rem;
  }

  .infor_cnt_01_box ul li a {
    font-size: .87rem;
    overflow: hidden;
    color: #2E2F34;
  }

  .infor_cnt_01_box ul li a :hover {
    color: #ff6600;
  }

  .infor_cnt_01_btn {
    font-size: .8rem;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    text-align: right;
  }

  .infor_cnt_01_btn a {
    color: #7B7D85;
  }

  .infor_cnt_01_btn a:hover {
    color: #ff6600;
  }

  .infor_cnt_tui {
    display: flex;
    width: 100%;
    position: relative;
    align-items: self-end;
    margin-bottom: 1rem;
  }

  .infor_cnt_tui a {
    position: absolute;
    text-align: right;
    right: 0;
    width: 50%;
    font-size: .9rem;
    color: #7B7D85;
    transition: .3s all;
  }

  .infor_cnt_tui a:hover {
    color: #ff6600;
  }

  .infor_cnt_tui p {
    font-weight: 800;
    display: flex;
    align-items: center;
  }

  .infor_cnt_tui p::before {
    display: block;
    content: '';
    width: 4px;
    border-radius: 3px;
    height: 1.3rem;
    background-color: #ff6600;
    margin-right: 1rem;
  }

  .infor_cnt_tui_img {
    overflow: hidden;
  }

  .infor_cnt_tui_img img {
    width: 100%;
    height: 150px;
    transition: .3s all;
    object-fit: cover;
  }

  .infor_cnt_tui_img:hover img {
    transform: scale(1.03);
  }

  .infor_cnt_tui_img2 {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -10px;
  }

  .infor_cnt_tui_img2 img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: .3s all;
  }

  .infor_cnt_tui_img2:hover img {
    transform: scale(1.03);
  }
</style>