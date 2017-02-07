var headers = [];
var fields = [];
var percs = [];

function include(path) {
  var scr = document.createElement("script");
  scr.src = "min/" + path + ".min.js";
  document.body.appendChild(scr);
}

function loaded() {
  headers.push(
    document.getElementById("th1"),
    document.getElementById("th2"),
    document.getElementById("th3"),
    document.getElementById("th4")
  );
  fields.push(
    document.getElementById("tc1"),
    document.getElementById("tc2"),
    document.getElementById("tc3"),
    document.getElementById("tc4")
  );
  percs.push(
    document.getElementById("p1"),
    document.getElementById("p2")
  );
  headers.forEach(function (head) {head.value = (Math.random() > 0.5 ? "T" : "t");});
}

function check() {
  var correct = [];
  var dom = 0;
  fields.forEach(
    function (field, i) {
      var correctAns = headers[(i%2)].value + headers[i < 2 ? 2 : 3].value;
      if (field.value == correctAns || field.value == correctAns.split("").reverse().join("")) {
        correct.push(i);
      }
      if (correctAns.indexOf("T") != -1) {
        dom++;
      }
    }
  );
  alert("You got " + (correct.length * 25) + "% of the Punnett square correct...");
  correct = [];
  console.log(dom);
  console.log(percs[0].value);
  if (percs[0].value == (4-dom)*25) {
    correct.push(percs[0]);
  }
  if (percs[1].value == (dom)*25) {
    correct.push(percs[1]);
  }
  alert("and " + (correct.length * 50) + "% of the percentages correct.")
}

function key(e) {
  if (e.which == 13) {
    if (document.getElementById("check") === document.activeElement) {
      return;
    }
    document.getElementById("check").click();
  }
}
