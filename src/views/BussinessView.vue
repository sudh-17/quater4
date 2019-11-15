<template>
  <div class="wrapper">
    <div class="counter">
      <div class="counter-title">
        <label>总金额: </label>
      </div>
      <div class="counter-val">
        <span>{{ Math.trunc(totalMoney).toLocaleString() }}</span>
      </div>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <thead class="thead">
          <th>营业部</th>
          <th>委托</th>
          <th>成交</th>
        </thead>
        <tbody>
          <tr v-for="(item, i) in statistics" :key="i">
            <td>
              <div class="cell">{{ item.name }}</div>
            </td>
            <td>
              <div class="cell">{{ item.deal }}</div>
            </td>
            <td>
              <div class="cell">{{ item.delegate }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalMoney() {
      return this.$root.totalMoney;
    },
    statistics() {
      return this.$root.statistics;
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.counter {
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92px;
  margin-top: 44px;
  background: #821b1b;
  padding: 5px;
  .counter-title {
    font-family: SourceHanSansSC-Medium;
    font-size: 58px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 14px;
    color: #f5f5ed;
  }
  .counter-val {
    font-family: SourceHanSansSC-Bold;
    font-size: 96px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 2px;
    background-image: -webkit-linear-gradient(
      bottom,
      #f1cc38,
      #f1cc38,
      #fcf9dc
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 100%;
    animation: masked-animation 2s infinite linear;
  }
}
.table-wrapper {
  margin-top: 50px;
  .table {
    background: #d4d4d4;
  }
  .thead {
    background: #006cf8;
    color: #ffffff;
  }
  .cell {
    width: 200px;
    font-size: 20px;
  }
}
</style>
