let app = window.app;
// app.a = "hello world";

setInterval(() => {
  app.a = Math.random() * 100
  app.person = Math.random() * 100
}, 1000)
