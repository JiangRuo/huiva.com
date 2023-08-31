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
          <div class="busi_colum_tit">
            <div class="busi_colum_tit_left">
              <p>阿里邮箱</p>
              <p>阿里邮箱示例数据示例数据示例数据示例数据测试示例数据</p>
            </div>
            <div class="busi_colum_tit_right">
              <img src="" alt="阿里邮箱">
            </div>
          </div>
          <div class="busi_colum_box">
            <ul>
              <li>
                <div>
                  <img src="" alt="阿里邮箱">
                </div>
                <div>
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
<script>
</script>
<style scoped>
  .busi {
    box-sizing: border-box;
    width: 100vw;
    padding: 5vh 10%;
  }

  .busi_title {
    width: 100%;
    text-align: center;
  }

  .busi_colum {
    width: 100%;
    margin-top: 6vh;
  }

  .busi_colum_li {
    box-shadow: 0px 7px 10px 0px #e4e6f3;
    border: 1px solid #dcdee4;
    transition: .3s all;
  }

  .busi_colum_li:hover {
    transform: translateY(-10px);
  }
</style>