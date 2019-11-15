/* eslint-disable */
let interval = null;

function timer (callback) {
  return setInterval(() => {
    callback.call(null)
  }, 1000);
}

function init() {
  if (window.location.hash === "#/left") {
    interval = timer(fetchLeft)
  }
}

function onPageChange () {
  window.onhashchange = function() {
    clearInterval(interval);
    if (window.location.hash === "#/left") {
      interval = timer(fetchLeft)
    } else if (window.location.hash === "#/right") {
      interval = timer(fetchRight)
    }
  };
}

init()
onPageChange()
