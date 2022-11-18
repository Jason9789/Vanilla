$(function () {
  // CUSTOM TYPE SELECT
  $('#type').click(function () {
    $('#custom-type-select').toggleClass('blind')
  })
  $('.type-select-list').click(function (e) {
    $('#type>span').text($(this).text())
    $('#custom-type-select').addClass('blind')
  })

  $('.force-cancel').click(function () {
    $('.popup-background:eq(0)').removeClass('blind')
    $('#popup-reserve-cancel').removeClass('blind')
  })

  $('#btn-popup-close').click(function () {
    $('.popup-background:eq(0)').addClass('blind')
    $('#popup-reserve-cancel').addClass('blind')
  })

  $('#btn-popup-confirm').click(function () {
    $('#popup-reserve-cancel').addClass('blind')
    $('#popup-write-cancel-email').removeClass('blind')
  })

  $('#btn-mail-popup-confirm').click(function () {
    if ($('#cancel-mail-text').val().length === 0) {
      $('.popup-background:eq(1)').removeClass('blind')
      $('#popup-warning').removeClass('blind')
    } else {
      $('#popup-write-cancel-email').addClass('blind')
      $('#popup-send-mail').removeClass('blind')
    }
  })

  $('#btn-warning-popup-close').click(function () {
    $('.popup-background:eq(1)').addClass('blind')
    $('#popup-warning').addClass('blind')
  })

  $('#btn-mail-popup-close').click(function () {
    $('#popup-write-cancel-email').addClass('blind')
    $('.popup-background:eq(0)').addClass('blind')
    $('#cancel-mail-text').val('')
  })

  $('#btn-send-mail-popup-close').click(function () {
    $('#popup-send-mail').addClass('blind')
    $('.popup-background:eq(0)').addClass('blind')
    $('#cancel-mail-text').val('')
  })
})
