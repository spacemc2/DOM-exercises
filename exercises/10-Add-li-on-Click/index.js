let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
  //your code here
  let myLi = document.createElement("li");
  myLi.innerHTML = "Forth element";
  document.querySelector("#myList").appendChild(myLi);
});
