/* eslint-disable */
// app = window.app;

function fetchLeft() {
  console.log('fething left ...')
  app.openAccount = Math.random() * 100;
  app.events = [
    {
      name: "告警",
      count: Math.round(Math.random() * 100)
    },
    {
      name: "严重",
      count: Math.round(Math.random() * 100)
    },
    {
      name: "信息",
      count: Math.round(Math.random() * 100)
    }
  ];
}
