function updateTime() {
  let kyivElement = document.querySelector("#kyiv");

  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment().tz("Europe/Kiev");

  kyivDateElement.innerHTML = kyivTime.format("MMMM	Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");

  let singaporeElement = document.querySelector("#singapore");

  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("MMMM	Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A",
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
