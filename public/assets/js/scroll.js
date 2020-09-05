//各コンテンツへスクロールする
$(function () {
  var header_menu = $(".header-menu > li");
  var firtst_view_button = $(".p-btn-round");
  console.log(firtst_view_button);
  var body = $("html, body");

  header_menu.click(function () {
    var menu = $(this).attr("href");
    var scroll_point = $(menu).offset().top;
    var header_height = $("header").height();

    body.animate({ scrollTop: scroll_point - header_height }, 300);
    return false;
  });

  firtst_view_button.click(function () {
    var menu = $(this).attr("href");
    var scroll_point = $(menu).offset().top;
    var header_height = $("header").height();

    body.animate({ scrollTop: scroll_point - header_height }, 300);
    return false;
  });
});
