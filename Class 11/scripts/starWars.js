function starWars() {
  let endpoint = `https://swapi.dev/api/people/`;
  let cardUI = "";
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((item, index) => {
        cardUI += `<div class="card" key=${index}>
            <p><b>Name</b>: ${item.name}</p>
            <hr />
            <p><b>Height</b>: ${item.height}</p>
            <hr />
            <p><b>Mass</b>: ${item.mass}</p>
            <hr />
            <p><b>Gender</b>: ${item.gender}</p>
            <hr />
            <p><b>DOB</b>: ${item.birth_year}</p>
            <hr />
          </div>`;
      });
      setTimeout(() => {
        document.querySelector(".star-wars-data").innerHTML = cardUI;
      }, 2000);
    });
}
starWars();
