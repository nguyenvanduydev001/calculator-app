(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  let percentage = document.querySelector(".btn-percentage");
  let plus_mins = document.querySelector(".btn-plus_mins");
  let backspace = document.querySelector(".btn-backspace");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      try {
        let expression = screen.value.replace(/[^0-9+\-*/().%]/g, ""); // Chỉ cho phép các ký tự hợp lệ
        let answer = eval(expression);
        screen.value = answer;
      } catch (error) {
        screen.value = "Invalid input";
      }
    }
  });


  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
