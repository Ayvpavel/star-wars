// Методы, которые могут пригодиться:
// starWars.searchCharacters(query),
// starWars.searchPlanets(query),
// starWars.searchSpecies(query).
// starWars.getCharactersById(id),
// starWars.getPlanetsById(id),
// starWars.getSpeciesById(id)

// Тут ваш код.

let input = document.querySelector(".input");
let input2 = document.querySelector(".is-large.input2");

let btn = document.getElementById("byQueryBtn");
let btnId = document.querySelector(".is-large.btn");
const select = document.querySelector('select[name="select"]');
const SElect = document.querySelector('select[name="select2"]');

const view = document.querySelector(".message-body");
const div = document.querySelector(".hidden");
btn.addEventListener("click", () => {
  let value = select.value;
  div.classList.remove("hidden");

  function render(data) {
    view.innerText = JSON.stringify(data, null, 2);
  }

  if (value == "people") {
    const query = input.value.trim();
    starWars.searchCharacters(query).then((data) => {
      const person = data.results[0];
      render(data.results[0]);
    });
  }
  if (value == "planets") {
    const query = input.value.trim();
    starWars.searchPlanets(query).then((data) => {
      const planets = data.results[0];
      render(data.results[0]);
    });
  }

  if (value == "species") {
    const query = input.value.trim();
    starWars.searchSpecies(query).then((data) => {
      const species = data.results[0];
      render(data.results[0]);
    });
  }
});
btnId.addEventListener("click", () => {
  let value = SElect.value;
  div.classList.remove("hidden");
  function render(data) {
    view.innerText = JSON.stringify(data, null, 2);
  }
  if (value == "species") {
    const query = input2.value.trim();
    starWars.getCharactersById(query).then((data) => {
      console.log(data);
      const species = data;
      render(data);
    });
    console.log(data);
  }
  if (value == "films") {
    const query = input2.value.trim();
    starWars.getPlanetsById(query).then((data) => {
      const species = data;
      render(data);
    });
  }
  if (value == "planets") {
    const query = input2.value.trim();
    starWars.getSpeciesById(query).then((data) => {
      const species = data;
      render(data);
    });
  }
  if (value == "people") {
    const query = input2.value.trim();
    starWars.getFilmsById(query).then((data) => {
      const species = data;
      render(data);
    });
  }
});
