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

  // CUSTOM TYPE SELECT
  $('#type').click(function () {
    $('#custom-type-select').toggleClass('blind')
  })
  $('.type-select-list').click(function (e) {
    $('#type>span').text($(this).text())
    $('#custom-type-select').addClass('blind')
  })

  // CUSTOM LOCATION SELECT
  $('#location').click(function () {
    if (city.length == 0) {
      $.ajax({
        url: '../json/city.json',
        dataType: 'json',
        success: function (res) {
          cityObject = res.slice()
          console.log(cityObject)

          city = cityObject
            .map(function (v) {
              if (v.city != null) return v.city
            })
            .slice()
        },
        error: function (err) {
          console.log(err)
        },
      })
    }
    $('#custom-location-select').toggleClass('blind')
  })

  function load_city() {
    $('.location-select-city-list.sample')
  }
})
