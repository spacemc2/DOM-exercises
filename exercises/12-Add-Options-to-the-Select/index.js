let countries = [
  "USA",
  "France",
  "Italy",
  "Brazil",
  "Colombia",
  "Belize",
  "Venezuela",
];
// your code here

let selectItem = document.querySelector("#mySelect");

for (const country of countries) {
  let optionElem = document.createElement("option");
  optionElem.innerHTML = country;
  selectItem.appendChild(optionElem);
}

selectItem.addEventListener("change", (e) => {
  alert(e.target.value);
});
