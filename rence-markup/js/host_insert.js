/**
 * @author : 전판근
 */

// ******************
// 호스트 신청에 필요한 JS
// ******************

$(function () {
  // TIME PICKER
  $('.time-picker').timepicker({
    timeFormat: 'HH:mm',
    interval: 60,
    defaultTime: '09',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  })

  // 휴무일 체크시 timepicker block
  $('#sun_dayoff').click(function () {
    if (this.checked) {
      $('#sun_stime').attr('disabled', true)
      $('#sun_etime').attr('disabled', true)
    } else {
      $('#sun_stime').attr('disabled', false)
      $('#sun_etime').attr('disabled', false)
    }
  })

  $('#mon_dayoff').click(function () {
    if (this.checked) {
      $('#mon_stime').attr('disabled', true)
      $('#mon_etime').attr('disabled', true)
    } else {
      $('#mon_stime').attr('disabled', false)
      $('#mon_etime').attr('disabled', false)
    }
  })

  $('#tue_dayoff').click(function () {
    if (this.checked) {
      $('#tue_stime').attr('disabled', true)
      $('#tue_etime').attr('disabled', true)
    } else {
      $('#tue_stime').attr('disabled', false)
      $('#tue_etime').attr('disabled', false)
    }
  })

  $('#wed_dayoff').click(function () {
    if (this.checked) {
      $('#wed_stime').attr('disabled', true)
      $('#wed_etime').attr('disabled', true)
    } else {
      $('#wed_stime').attr('disabled', false)
      $('#wed_etime').attr('disabled', false)
    }
  })

  $('#thu_dayoff').click(function () {
    if (this.checked) {
      $('#thu_stime').attr('disabled', true)
      $('#thu_etime').attr('disabled', true)
    } else {
      $('#thu_stime').attr('disabled', false)
      $('#thu_etime').attr('disabled', false)
    }
  })

  $('#fri_dayoff').click(function () {
    if (this.checked) {
      $('#fri_stime').attr('disabled', true)
      $('#fri_etime').attr('disabled', true)
    } else {
      $('#fri_stime').attr('disabled', false)
      $('#fri_etime').attr('disabled', false)
    }
  })

  $('#sat_dayoff').click(function () {
    if (this.checked) {
      $('#sat_stime').attr('disabled', true)
      $('#sat_etime').attr('disabled', true)
    } else {
      $('#sat_stime').attr('disabled', false)
      $('#sat_etime').attr('disabled', false)
    }
  })

  // backoffice_type 필수 입력 체크
  $('#submit-application').click(function () {
    var result = true

    var desk_checked = $('#type_checkbox_desk').is(':checked')
    var meeting_room_checked = $('#type_checkbox_meeting_room').is(':checked')
    var office_checked = $('#type_checkbox_office').is(':checked')

    if (desk_checked || meeting_room_checked || office_checked) {
      $('submit-application').submit()
      result = true
    } else {
      $('.popup-background').removeClass('blind')
      $('#fail-alert-popup').removeClass('blind')
      result = false
    }

    return result
  })

  // 빈 항목 팝업 닫기
  $('#empty-fail-alert-btn').click(function () {
    $('#fail-alert-popup').addClass('blind')
    $('.popup-background').addClass('blind')
  })
})
