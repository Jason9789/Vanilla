$(function () {
  $('#btn-cancel').click(function () {
    $('#room-insert-section').addClass('blind')
    $('.popup-background').addClass('blind')
  })

  $('#btn-room-add').click(function () {
    $('#room-insert-section').removeClass('blind')
    $('.popup-background').removeClass('blind')
  })

  $('#room-type-label').on('click', function () {
    $('.type-select-list').toggleClass('blind')
  })

  $('.type-select-item').on('click', function () {
    let type = $(this).text()
    console.log(type)
    $('#room-type-label').text(type)
    $('#room-type-label').css('color', '#000000')
    $('.type-select-list').addClass('blind')
  })
})
