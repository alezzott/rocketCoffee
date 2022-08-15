const toogle = document.getElementById("toogle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
}

toogle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});

refresh.addEventListener("click", () => {
  window.location.reload();
});
