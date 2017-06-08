$(document).ready(function() {
  $("button#btn-monkey").click(function() {
    $("#monkey-id").show();
    $("#img-monkey").click(function() {
    $("#monkey-id").hide();
    });
  });
  $("button#btn-mouse").click(function() {
    $("#mouse-id").show();
    $("#img-mouse").click(function() {
    $("#mouse-id").hide();
  });
});
$("button#btn-kitty").click(function() {
  $("#kitty-id").show();
  $("#img-kitty").click(function() {
  $("#kitty-id").hide();
    });
  });
});
