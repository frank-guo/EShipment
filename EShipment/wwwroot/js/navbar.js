$("#logout").click((event) => {
  let data = {
    __RequestVerificationToken: $("[name='__RequestVerificationToken']").val()
  }
  localStorage.clear()
  var url = "Account/Logout"
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: "text"
  }).done((response) => {
      document.open()
      document.write(response)
      document.close()
    })
})
