export function renderStepTwo() {
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.remove("hidden");
  document.getElementById("step-3").classList.add("hidden");
}

export function renderStepThree(travelRecomsJsonResponse, travelInput) {
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");

  //from-date-card
  document.getElementById("from-date-card").innerHTML = travelInput.fromDate;

  //to-date-card
  document.getElementById("to-date-card").innerHTML = travelInput.toDate;

  //from-location-card
  document.getElementById("from-location-card").innerHTML = travelInput.from;

  //to-location-card
  document.getElementById("to-location-card").innerHTML = travelInput.to;

  //weather-recom
  document.getElementById("weather-recom").innerHTML =
    travelRecomsJsonResponse.weather;

  //flight-recom
  document.getElementById("flight-recom").innerHTML =
    travelRecomsJsonResponse.flights;

  //id="hotel-recom"
  document.getElementById("hotel-recom").innerHTML =
    travelRecomsJsonResponse.hotels;
}
