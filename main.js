let head = document.querySelector(".head");
window.onscroll = function () {
  if (window.scrollY === head.offsetTop) {
    console.log("Reached Section Three");
    head.style.boxShadow = "0 0 5px #999";
  } else {
    head.style.boxShadow = "0 0 20px #999";
  }
};
