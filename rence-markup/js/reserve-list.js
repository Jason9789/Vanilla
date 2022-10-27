$(function () {
  // CUSTOM TYPE SELECT
  $('#type').click(function () {
    console.log('asdf')
    $('#custom-type-select').toggleClass('blind')
  })
  $('.type-select-list').click(function (e) {
    $('#type>span').text($(this).text())
    $('#custom-type-select').addClass('blind')
  })
})
