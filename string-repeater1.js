
function stringRepeater1() {
  var arr = [];
  var userText = window.prompt("Please write your name");
  for (var i = 1; i <= 3; i++) {
    arr.push(userText);
  }
  window.alert(arr.join(" "));
}
stringRepeater1();
