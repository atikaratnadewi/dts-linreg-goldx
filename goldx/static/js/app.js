$(document).ready(function () {
  $("#btn-predict").click(function () {
    if (!$("#input-form")[0].checkValidity()) {
      $("#input-form")[0].reportValidity();
    } else {
      $("#prediction-result").hide();
      $("#loader").fadeIn((duration = 500));
      var Data = new FormData($("#input-form")[0]);
      $.ajax({
        type: "POST",
        url: "/predict",
        data: Data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (result) {
          $("#loader").hide();
          $("#prediction-result").text("IDR " + result);
          $("#prediction-result").fadeIn((duration = 500));
        },
      });
    }
  });
});
