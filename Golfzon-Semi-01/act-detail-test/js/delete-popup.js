$(function () {
  //----- OPEN
  $('[data-popup-open]').on('click', function (e) {
    console.log('clickkkk')
    // 팝업 열기 버튼 클릭시 동작하는 이벤트입니다.
    var targeted_popup_class = jQuery(this).attr('data-popup-open')
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350)

    e.preventDefault()
  })

  //----- CLOSE
  $('[data-popup-close]').on('click', function (e) {
    // 팝업 닫기 버튼 클릭시 동작하는 이벤트입니다.
    var targeted_popup_class = jQuery(this).attr('data-popup-close')
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350)

    e.preventDefault()
  })
})
