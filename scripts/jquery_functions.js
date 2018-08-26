$(document).ready(function () {
  $("#dbutton").click(function () {
    $("#dialog").fadeOut(750);
    $("#dialog").delay(750);
  });
  $("#navbutton").click(function () {
    $(".navsect").slideToggle("slow");
  });
});
