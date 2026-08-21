const form = document.querySelector(".entry-form");
const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  const titleInput = document.querySelector("#entry-title");
  const bodyInput = document.querySelector("#entry-body");

  const title = titleInput.value;
  const body = bodyInput.value;
});