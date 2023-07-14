const loaderEl = document.getElementById("loader");
function loadingData() {
  loaderEl.classList.add("d-block");
  fetch("./cities.json")
    .then(getResponse)
    .then((cities) => {
      console.log({ cities });
      const tableEl = document.getElementById("table-data");
      let citiesHtml = "";
      cities.forEach((city) => {
        citiesHtml += `
    <tr>
    <td> ${city.address}</td>
    <td class="population"> ${city.population}</td>
    <td class="age"> ${city.foundation_year}</td>
    </tr>`;
      });
      loaderEl.classList.add("d-none");
      tableEl.innerHTML = citiesHtml;
    });

  function getResponse(response) {
    return response.json();
  }
}
const rowElements = document.querySelectorAll("tbody tr");
function filter(moreThan, lessThan) {
  console.log(moreThan, lessThan);
  rowElements.forEach((rowEl) => {
    rowEl.classList.add("d-none");
    population = rowEl.querySelector(".population").innerText;

    if (population >= moreThan && population <= lessThan) {
      rowEl.classList.remove("d-none");
    } else {
      rowEl.classList.add("d-none");
    }
  });
}

function filterOld(data) {
  rowElements.forEach((rowEl) => {
    ageEl = rowEl.querySelector(".age");
    rowElements.forEach((rowEl) => {
      rowEl.classList.add("d-none");
      if (age.innerText <= data) {
        rowEl.classList.remove("d-none");
      } else {
        rowEl.classList.add("d-none");
      }
    });
  });
}
function filterYoung(data) {
  rowElements.forEach((rowEl) => {
    ageEl = rowEl.querySelector(".age");
    rowElements.forEach((rowEl) => {
      rowEl.classList.add("d-none");
      if (age.innerText >= data) {
        rowEl.classList.remove("d-none");
      } else {
        rowEl.classList.add("d-none");
      }
    });
  });
}
loadingData();
const tableEl = document.getElementById("table");
const quantity = document.getElementsByTagName("tr").length;
const spanEl = document.getElementById("counter");
spanEl.innerText = quantity;
