if(window.matchMedia("(min-width: 400px)").matches) {

  $("html").css("display", "none");

  alert("Emulate to Mobile (device width < 400px)");

  setInterval(function() {
    alert("Emulate to Mobile (device width < 400px)");
  }, 5000);


};
