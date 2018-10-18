$(document).ready(function() {
  var count = 0;
  var squares = $(".sequare");
  var firstPlayer = "O";
  var secoundPlayer = "X";
  var x = [];
  var o = [];
  var winGame = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"]
  ];
  var countX = 0;
  var countO = 0;
  var counterX = $("#counterX");
  var counterO = $("#counterO");
  $(".dot").click(function() {
    $(".sequare").text("");
    x = [];
    o = [];
    addClickHandlers();
  });

  function addClickHandlers() {
    $(".sequare").on("click", function() {
      if ($(this).text() === "") {
        if (count % 2 === 0) {
          var idm = $("<div/>").text(firstPlayer);
          $(this).append(idm);

          var idm = $(this).attr("id");
          o.push(idm);
          console.log(o);
          userCheck(o, winGame, "O");
          console.log(o);
          count++;
        } else {
          var idr = $("<div/>").text(secoundPlayer);
          $(this).append(idr);

          var idr = $(this).attr("id");
          x.push(idr);
          userCheck(x, winGame, "X");
          console.log(x);
          count++;
        }
      }
    });
  }

  function userCheck(xo, winGame, res) {
    for (var i = 0; i < winGame.length; i++) {
      var l = 0;
      console.log(winGame[i]);
      for (var j = 0; j < xo.length; j++) {
        var xText = xo[j];
        if (winGame[i].includes(xo[j])) {
          l++;
          if (l === 3) {
            setTimeout(function() {
              swal(" Good job!!! ", res + "  You Won!", "success");
              if (res === "O") {
                countO++;
                counterO.text(countO);
              } else {
                countX++;
                counterX.text(countX);
              }
              count = 0;

              $(".sequare").off();
            }, 200);
          }
        }
      }
    }
  }
  addClickHandlers();
});
