const itemList = document.querySelector(".item-list");
itemList.addEventListener("click", function(e) {
  const btn = e.target;

  if (btn.tagName === "BUTTON") {
    btn.classList.toggle("filled");
    btn.innerHTML = btn.classList.contains('filled') ? '&#10084;' : '&#9825;';
  }
})
