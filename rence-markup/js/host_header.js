$(function () {
  $('.logo-mku').click(function () {
    location.href = '/rence/backoffice_landing'
  })

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

  $('#go-user-home').click(function () {
    location.href = '/rence/'
  })

  $('#go-backOffice').click(function () {
    location.href = '/rence/backoffice_insert'
  })

  $('.btn-start-hosting').click(function () {
    location.href = '/rence/backoffice_main'
  })

  $('.btn-apply-hosting').click(function () {
    location.href = '/rence/backoffice_insert'
  })

  $('#go-myPage').click(function () {
    $('#after_login>.custom-select-host').addClass('blind')
    location.href = '/rence/go_my_page'
  })

  $('#go-logOut').click(function () {
    $('#after_login>.custom-select-host').addClass('blind')
    $('#logout-popup').removeClass('blind')
    $('.popup-background:eq(0)').removeClass('blind')
  })

  // ==================
  // 비밀번호 재설정 input 체크
  // ==================
  $('.input-update-pw').on('keydown keyup', function () {
    if ($(this).attr('id') == 'input-update-pw') {
      var password =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/
      if (!password.test($(this).val().trim())) {
        $('.warning-text:eq(0)').removeClass('blind')
        $('.warning-text:eq(0)').text(
          '비밀번호 조건과 일치하지 않습니다. (대소문자, 특수문자 포함 8~10글자)',
        )
      } else {
        $('.warning-text:eq(0)').addClass('blind')
      }
    } else if ($(this).attr('id') == 'input-update-pw-re') {
      if ($(this).val().trim() != $('#input-update-pw').val().trim()) {
        $('.warning-text:eq(1)').removeClass('blind')
        $('.warning-text:eq(1)').text('위의 비밀번호와 일치하지 않습니다.')
      } else {
        $('.warning-text:eq(1)').addClass('blind')
      }
    }
  })

  // 비밀번호 재설정 ajax
  $('#btn-pw-update').click(function () {
    var password =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/
    let backoffice_no = $(location).attr('search').split('?backoffice_no=')[1]

    if (
      $('#input-update-pw').val().trim().length > 0 &&
      $('#input-update-pw-re').val().trim().length > 0 &&
      $('#input-update-pw').val().trim() ==
        $('#input-update-pw-re').val().trim() &&
      password.test($('#input-update-pw').val().trim())
    ) {
      $.ajax({
        url: '/rence/backoffice_settingOK_pw',
        type: 'POST',
        dataType: 'json',
        data: {
          backoffice_no: backoffice_no,
          backoffice_pw: CryptoJS.SHA256(
            $('#input-update-pw').val().trim(),
          ).toString(),
        },
        success: function (res) {
          console.log('success')

          if (res.result == '1') {
            location.href = '/rence/backoffice_landing'
          } else {
            location.reload()
          }
        },

        error: function (error) {
          console.log(error)
        },
      })
    } else {
      console.log('no')
      $('.popup-background:eq(0)').removeClass('blind')
      $('#fail-alert-popup').removeClass('blind')
    }
  })
})
