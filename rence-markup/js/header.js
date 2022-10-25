$(function () {
  let cityObject = []
  let city = []
  let town = []

  $('#before_hostMenu').click(function () {
    $('#before_login>.custom-select-host').toggleClass('blind')
  })
  $('#after_hostMenu').click(function () {
    $('#after_login>.custom-select-host').toggleClass('blind')
  })

  $('#go-login').click(function () {
    $('#before_login>.custom-select-host').addClass('blind')
    $('.popup-background:eq(0)').removeClass('blind')
    $('#login-section').removeClass('blind')
  })

  $('#go-join').click(function () {
    $('#before_login>.custom-select-host').addClass('blind')
    $('.popup-background:eq(0)').removeClass('blind')
    $('#join-section').removeClass('blind')
  })

  $('#go-myPage').click(function () {
    $('#after_login>.custom-select-host').addClass('blind')
    // 페이지 이동
  })
  $('#go-logOut').click(function () {
    $('#after_login>.custom-select-host').addClass('blind')
    $('#logout-popup').removeClass('blind')
    $('.popup-background:eq(0)').removeClass('blind')
  })
})
