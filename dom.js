export function renderStepTwo() {
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.remove("hidden");
  document.getElementById("step-3").classList.add("hidden");
}

function renderStepThree() {
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");
}

export function processTrip(formData) {
  console.log("Processing trip...");
}
