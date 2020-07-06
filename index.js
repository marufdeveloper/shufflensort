var array = [
  { value: 1, colorCss: "first-color" },
  { value: 2, colorCss: "second-color" },
  { value: 3, colorCss: "thrid-color" },
  { value: 4, colorCss: "second-color" },
  { value: 5, colorCss: "thrid-color" },
  { value: 6, colorCss: "forth-color" },
  { value: 7, colorCss: "forth-color" },
  { value: 8, colorCss: "first-color" },
  { value: 9, colorCss: "thrid-color" },
];
window.onload = function () {
  var innerHtml = "";
  array.sort().forEach((entry) => {
    innerHtml += `<div class="item ${entry.colorCss}">${entry.value}</div>`;
  });

  document.getElementsByClassName("flex-box")[0].innerHTML = innerHtml;
};
document.getElementById("btnShuffle").addEventListener("click", function () {
  var innerHtml = "";
  var newarray = [...array];
  newarray = newarray.map((entry) => ({
    ...entry,
    random: Math.floor(Math.random() * 10 + 1),
  }));
  newarray
    .sort((a, b) => a.random - b.random)
    .forEach((entry) => {
      innerHtml += `<div class="item ${entry.colorCss}">${entry.value}</div>`;
    });
  document.getElementsByClassName("flex-box")[0].innerHTML = innerHtml;
});
document.getElementById("btnSort").addEventListener("click", function () {
  var innerHtml = "";
  array.sort().forEach((entry) => {
    innerHtml += `<div class="item ${entry.colorCss}">${entry.value}</div>`;
  });

  document.getElementsByClassName("flex-box")[0].innerHTML = innerHtml;
});
