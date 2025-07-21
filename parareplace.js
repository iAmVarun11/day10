window.onload = () => {
  const oldP = document.getElementById("old-paragraph");
  const newP = document.createElement("p");
  newP.textContent = "This paragraph was replaced!";
  oldP.replaceWith(newP);
};
