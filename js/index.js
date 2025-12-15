const SunEl = document.querySelector(".sun");
const MoonEl = document.querySelector(".moon");
const Body = document.body;
const Ul = document.querySelector("ul");

function ToggleMode() {
  Body.classList.toggle("dark-mode");
  MoonEl.classList.toggle("hidden");
  SunEl.classList.toggle("hidden");
}

MoonEl.addEventListener("click", () => {
  ToggleMode();
});
SunEl.addEventListener("click", () => {
  ToggleMode();
});

function UpdateUi(arr) {
  Ul.innerHTML = "";
  arr.forEach((user, index) => {
    let { name, title, body, email} = user;
    Ul.innerHTML += `
      <li data-index="${index}">
        ${email}
        <button class="delete-btn" style="margin-left: 10px; cursor: pointer;">X</button>
      </li>
    `;
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const li = e.target.parentElement;
      li.remove();
    });
  });
}
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => UpdateUi(data))
  .catch((err) => console.log(err));
