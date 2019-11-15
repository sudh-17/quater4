let app = window.app

setInterval(() => {
  app.openAccount = Math.random() * 100
}, 1000)