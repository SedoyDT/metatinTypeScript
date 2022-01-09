$(document).ready(function () {
    $("#content").html("<h1>Привет TypeScript</h1>");
    $("#alertBtn").click(function (e) { $("#content").html("<h2>Привет мир</h2>"); });
});
