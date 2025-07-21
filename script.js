window.onload = () => {
  const list = document.getElementById("shopping-list");
  ["Namkeen", "Corn", "Coffee"].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  });
};
