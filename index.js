import { renderStepTwo, processTrip } from "./dom";
import { travelRecommendation } from "./agent";
document
  .getElementById("begin-button")
  .addEventListener("click", function (event) {
    renderStepTwo();
  });

document
  .getElementById("plan-trip")
  .addEventListener("click", function (event) {
    processTrip();
  });

document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // const inputElement = document.getElementById("user-input");
    // inputElement.focus();
    const formData = new FormData(event.target);
    processTrip(formData);
    const travellers = formData.get("travellers");
    const from = formData.get("from");
    const destination = formData.get("destination");
    const fromDate = formData.get("from-date");
    const toDate = formData.get("to-date");
    const budget = formData.get("budget");
    console.log("Travellers: ", travellers);
    console.log("from: ", from);
    console.log("Destination: ", destination);
    console.log("fromDate: ", fromDate);
    console.log("toDate: ", toDate);
    console.log("Budget: ", budget);
    const travelInput = {
      numberOfTravellers: travellers,
      from: from,
      to: destination,
      fromDate: fromDate,
      toDate: toDate,
      budget: budget,
    };
    travelRecommendation(travelInput);
    // const query = formData.get("user-input");
    // event.target.reset();
    // await agent(query);
  });
