console.log("Hi");
$.ajax({
  method: "GET",
  url: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
  dataType: "json"
})
    .done(function(data) {
      console.log(data);
    });
