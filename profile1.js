var expand = false;
var left = [];

var clicked = function(id) {
  var expandLength = document.getElementById(`${id}`).querySelectorAll(".expand").length;
  var list = document.getElementById("wrapper").children;
  if (expand) {
    left.map((item) => document.getElementById("wrapper").appendChild(item));
    var j = 0;
    for (var i = 1; i < list.length; i++) {
      if (parseInt(list[i].id) < parseInt(list[j].id)) {
        document.getElementById("wrapper").insertBefore(list[i], list[j]);
        j = i;
      }
    }
    document.getElementById("list").className = "list";
    for (var i = 0; i < expandLength; i++) {
      document.getElementById(`${id}`).querySelectorAll(".expand")[i].style.display = "none";
    }
    window.scrollTo(0, document.getElementById(id).offsetTop);
    expand = false;
  }
  else {
    var j = 0;
    for (var i = 0; i < list.length; i++) {
      if (parseInt(list[i].id) !== id) {
        left[j] = list[i];
        document.getElementById("wrapper").removeChild(list[i]);
        j++;
        i--;
      }
    }
    document.getElementById("list").className = "list-expand";
    for (var i = 0; i < expandLength; i++) {
      document.getElementById(`${id}`).querySelectorAll(".expand")[i].style.display = "block";
    }
    document.querySelector(".profile-skills").style.padding = "5% 0 0 0";
    window.scrollTo(0, 0);
    expand = true;
  }
}
