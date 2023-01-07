var add = document.getElementById("add-modal");

$("#add-modal").css("display", "inline-block");
$("#add-modal").animate({ bottom: "0" }, 500);

document.getElementById("ok").onclick = function () {
  $("#add-modal").animate({ bottom: "-100vh" }, 500);
  setTimeout(function () {
    $("#add-modal").css("display", "none");
  }, 1000);
};

window.onclick = function (event) {
  if (event.target == add) {
    $("#add-modal").animate({ bottom: "-100vh" }, 500);
    setTimeout(function () {
      $("#add-modal").css("display", "none");
    }, 1000);
  }
};
