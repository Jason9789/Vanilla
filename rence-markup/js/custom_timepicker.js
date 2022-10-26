$(function () {
  $('.time-picker').timepicker({
    timeFormat: 'HH:mm',
    interval: 60,
    // minTime: '00',
    defaultTime: '09',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  })
})
