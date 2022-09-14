$(document).ready(function () {
  const label = $('.label')
  const options = document.querySelectorAll('.option-item')
  console.log(options)

  $.handleSelect = function (item) {
    label.parent().removeClass('active')
    label.html($(item.target).text())
  }

  $.each(options, function (index) {
    console.log(index)
    $(this).click(function (element) {
      $.handleSelect(element)
    })
  })

  $('.label').click(function () {
    if (label.parent().hasClass('active') === true) {
      label.parent().removeClass('active')
    } else {
      label.parent().addClass('active')
    }
  })
})
