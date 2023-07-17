const loaderEl = document.getElementById("loader");

const spanEl = document.getElementById("counter");
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
    <tr class="active-tr">
    <td class-"cities"> ${city.address}</td>
    <td class="population"> ${city.population}</td>
    <td class="age"> ${city.foundation_year}</td>
    </tr>`;
      });
      loaderEl.classList.add("d-none");
      tableEl.innerHTML = citiesHtml;
      let quantity = document.getElementsByTagName("tr").length;
      spanEl.innerText = quantity;
    });

  function getResponse(response) {
    return response.json();
  }
}

function filter(moreThan, lessThan) {
  const rowElements = document.querySelectorAll("tbody tr");
  console.log(moreThan, lessThan);
  rowElements.forEach((rowEl) => {
    rowEl.classList.remove("active-tr");
    rowEl.classList.remove("d-none");
    population = rowEl.querySelector(".population").innerText;
    if (population >= moreThan && population <= lessThan) {
      rowEl.classList.add("active-tr");
    } else {
      rowEl.classList.add("d-none");
    }
    let quantity = document.querySelectorAll("tr.active-tr").length;
    spanEl.innerText = quantity;
  });
}

function filterOld(data) {
  const rowElements = document.querySelectorAll("tbody tr");
  rowElements.forEach((rowEl) => {
    ageEl = rowEl.querySelector(".age");
    rowEl.classList.remove("active-tr");
    rowEl.classList.remove("d-none");
    if (ageEl.innerText <= data) {
      rowEl.classList.add("active-tr");
    } else {
      rowEl.classList.add("d-none");
    }
    let quantity = document.querySelectorAll("tr.active-tr").length;
    spanEl.innerText = quantity;
  });
}

function filterYoung(data) {
  const rowElements = document.querySelectorAll("tbody tr");
  rowElements.forEach((rowEl) => {
    ageEl = rowEl.querySelector(".age");
    rowEl.classList.remove("active-tr");
    rowEl.classList.remove("d-none");
    if (ageEl.innerText >= data) {
      rowEl.classList.add("active-tr");
    } else {
      rowEl.classList.add("d-none");
    }
    let quantity = document.querySelectorAll("tr.active-tr").length;
    spanEl.innerText = quantity;
  });
}

loadingData();
