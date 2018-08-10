$("#submit").click((event) => {
  let token = $("[name='__RequestVerificationToken']").val()
  let data = {
    Email: $("#loginEmail").val(),
    Password: $("#loginPassword").val(),
    RememberMe: $("#loginRememberMe").val(),
    __RequestVerificationToken: token
  }
  var url = $("#loginForm").attr('action')
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: "json",
    success: function (resp) {
      if (resp && resp.token) {
        //window.location.href = data.redirect;
        let user = JSON.parse(decodeJwt(resp.token))
        user.token = resp.token
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('verificationToken', token)
        if (resp.returnUrl != null) {
          location = resp.returnUrl
        }
      }
    },
    error: function (resp) {
      document.open()
      document.write(resp.responseText)
      document.close()
    }
  })
})

function decodeJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return window.atob(base64);
};
