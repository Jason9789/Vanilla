// Host Popup

$(function () {
  $('#btn-room-add').click(function () {
    $('#room-insert-section').removeClass('blind')
    $('.popup-background').removeClass('blind')
  })

  $('#btn-insert-cancel').click(function () {
    $('#room-insert-section').addClass('blind')
    $('.popup-background').addClass('blind')
  })

  $('#btn-edit-cancel').click(function () {
    $('#room-edit-section').addClass('blind')
    $('.popup-background').addClass('blind')
  })

  $('.btn-room-edit').on('click', function () {
    $('#room-edit-section').removeClass('blind')
    $('.popup-background').removeClass('blind')
  })

  $('.btn-room-delete').on('click', function () {
    $('#delete-popup').removeClass('blind')
    $('.popup-background').removeClass('blind')
  })

  $('#insert-room-type-label').on('click', function () {
    $('.insert-type-select-list').toggleClass('blind')
  })

  $('#edit-room-type-label').on('click', function () {
    console.log('zzzz')
    $('.edit-type-select-list').toggleClass('blind')
  })

  $('.insert-type-select-item').on('click', function () {
    let type = $(this).text()
    console.log(type)
    $('#insert-room-type-label').text(type)
    $('#insert-room-type-label').css('color', '#000000')
    $('.insert-type-select-list').addClass('blind')
  })

  $('.edit-type-select-item').on('click', function () {
    let type = $(this).text()
    console.log(type)
    $('#edit-room-type-label').text(type)
    $('#edit-room-type-label').css('color', '#000000')
    $('.edit-type-select-list').addClass('blind')
  })
})
