/* eslint-disable */
let interval = null;

function timer(callback) {
  return setInterval(() => {
    callback.call(null);
  }, 1000);
}

function init() {
  if (window.location.hash === "#/eventView") {
    interval = timer(fetchEvent);
  } else if (window.location.hash === "#/bussinessView") {
    interval = timer(fetchBussiness);
  }
}

function onPageChange() {
  window.onhashchange = function() {
    clearInterval(interval);
    if (window.location.hash === "#/eventView") {
      interval = timer(fetchEvent);
    } else if (window.location.hash === "#/bussinessView") {
      interval = timer(fetchBussiness);
    }
  };
}

init();
onPageChange();
