<template>
  <div class="wrapper">
    <div class="counter">
      <div class="counter-title">
        <label>开户数: </label>
      </div>
      <div class="counter-val">
        <span>{{ Math.trunc(openAccount).toLocaleString() }}</span>
      </div>
    </div>
    <div class="events">
      <ul class="list">
        <li v-for="(item, i) in events" :key="i">
          <div class="item-wrapper">
            <label for="" class="item-text">{{item.name}}: </label>
            <span class="item-val">{{item.count}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    openAccount() {
      return this.$root.openAccount;
    },
    events () {
      return this.$root.events;
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
  background: #191919;
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
    background-image: -webkit-linear-gradient(bottom, #f1cc38, #f1cc38, #fcf9dc);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100% 100%;
    animation: masked-animation 2s infinite linear;
  }
}
.item-wrapper {
  background: #fcf9dc;
  font-size: 24px;
  .item-text {
    color: black;
  }
  .item-val {
    color: #ff0000;
  }
}

</style>
