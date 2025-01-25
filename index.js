import { renderStepTwo, renderStepThree } from "./dom";
import { travelRecommendation } from "./agent";
document
  .getElementById("begin-button")
  .addEventListener("click", function (event) {
    renderStepTwo();
  });

document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    document.getElementById("loading-status").classList.remove("hidden");
    document.getElementById("plan-trip").attributes.disabled = true;
    document
      .getElementById("plan-trip")
      .classList.add("cursor-not-allowed", "opacity-50");
    // const inputElement = document.getElementById("user-input");
    // inputElement.focus();
    const formData = new FormData(event.target);
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
    const jsonResponse = await travelRecommendation(travelInput);
    renderStepThree(jsonResponse, travelInput);
    // const query = formData.get("user-input");
    // event.target.reset();
    // await agent(query);
  });
