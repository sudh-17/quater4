/* eslint-disable */
// app = window.app;

function fetchRight() {
  console.log('fething right ...')
  app.totalMoney = Math.random() * 100;
  app.statistics = [
    {
      name: "深圳",
      deal: Math.round(Math.random() * 100),
      delegate: Math.round(Math.random() * 100),
    },
    {
      name: "上海",
      deal: Math.round(Math.random() * 100),
      delegate: Math.round(Math.random() * 100),
    },
    {
      name: "广州",
      deal: Math.round(Math.random() * 100),
      delegate: Math.round(Math.random() * 100),
    }
  ];
}
