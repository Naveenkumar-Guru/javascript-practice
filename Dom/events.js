function mouseoverEffect() {
  document.getElementById("btn1").innerHTML =
    "Mouse over to change button background color";
  document.getElementById("myButton1").style.backgroundColor = "red";
}

function onMouseout() {
  document.getElementById("btn2").innerHTML =
    "Mouse out change button background color";
  document.getElementById("myButton2").style.backgroundColor = "red";
}

function handleClick() {
  document.getElementById("btn3").innerHTML =
    "click to change button background color";
  document.getElementById("myButton3").style.backgroundColor = "red";
}

function handleDoubleClick() {
  document.getElementById("btn4").innerHTML =
    "Double clicked! to change button background color ";
  document.getElementById("myButton4").style.backgroundColor = "red";
}

function onFocusEvent() {
  document.getElementById("msg1").innerHTML =
    "clicked! to change input background color!";
  document.getElementById("input1").style.backgroundColor = "white";
}

function toUpperCase() {
  const input = document.getElementById("input2");
  input.value = input.value.toUpperCase();
  document.getElementById("msg2").innerHTML =
    "change lower case to upper case onblur Events";
}
