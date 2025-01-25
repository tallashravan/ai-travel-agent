const flight_recoms = [
  {
    airline: "Spirit Airlines",
    departure_airport: "DTW",
    arrival_airport: "DFW",
    departure_time: "4:16 PM",
    arrival_time: "6:36 PM",
    duration: "3h 20m",
    price: "$85",
    dates: ["February 5, 2025", "February 12, 2025"],
    flight_type: "nonstop",
  },
  {
    airline: "Frontier Airlines",
    departure_airport: "DTW",
    arrival_airport: "DFW",
    departure_time: "1:00 PM",
    arrival_time: "3:08 PM",
    duration: "3h 08m",
    price: "$87",
    dates: ["February 5, 2025", "February 12, 2025"],
    flight_type: "nonstop",
  },
];

const hotel_recoms = [
  {
    city: "Dallas",
    hotels: [
      {
        name: "Omni Dallas Hotel",
        location: "Downtown Dallas",
        price_per_night: "$210",
        rating: 9.0,
        amenities: ["Free Wi-Fi", "Pool", "Spa", "Fitness Center"],
        url: "https://www.omnihotels.com/hotels/dallas",
      },
    ],
  },
  {
    city: "Houston",
    hotels: [
      {
        name: "Marriott Marquis Houston",
        location: "Downtown Houston",
        price_per_night: "$313",
        rating: 8.7,
        amenities: ["Free Wi-Fi", "Pool", "Spa", "Fitness Center"],
        url: "https://www.marriott.com/hotels/travel/houmq-marriott-marquis-houston/",
      },
      {
        name: "Hilton Americas - Houston",
        location: "Downtown Houston",
        price_per_night: "$188",
        rating: 9.1,
        amenities: ["Free Wi-Fi", "Pool", "Spa", "Fitness Center"],
        url: "https://www.hilton.com/en/hotels/houcvhh-hilton-americas-houston/",
      },
    ],
  },
];

export async function get_weather({ location, date }) {
  // Call weather API
  console.log("Getting weather for", location, date);
  return (
    "The expected temperature in " + location + " on " + date + " will be 29°C "
  );
}

export async function get_hotels({ location, checkin, checkout, budget }) {
  // Call hotel API
  console.log("Getting hotels for", location, checkin, checkout, budget);
  return `Here are some hotel recommendations for ${location} from ${checkin} to ${checkout} for $${budget} :\n ${JSON.stringify(
    hotel_recoms
  )}`;
}

export async function get_flights({
  from,
  to,
  departureDate,
  returnDate,
  budget,
}) {
  console.log(
    "Getting flights for",
    from,
    to,
    departureDate,
    returnDate,
    budget
  );
  // Call flight API
  return `Here are some flight recommendations from ${from} to ${to} on ${departureDate} and returning on ${returnDate} for $${budget} :\n ${JSON.stringify(
    flight_recoms
  )}`;
}

const travelTools = [
  {
    type: "function",
    function: {
      function: get_weather,
      parse: JSON.parse,
      description: "Get temperature for a given location and date",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "City and country e.g. Bogotá, Colombia",
          },
          date: {
            type: "string",
            description: "Date in dd/mm/yyyy format",
          },
        },
        required: ["location", "date"],
      },
    },
  },
  {
    type: "function",
    function: {
      function: get_hotels,
      parse: JSON.parse,
      description: "Get Hotels for a given location on checkin/checkout dates",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "City and country e.g. Bogotá, Colombia",
          },
          checkin: {
            type: "string",
            description: "Checkin date in dd/mm/yyyy format",
          },
          checkout: {
            type: "string",
            description: "Checkout date in dd/mm/yyyy format",
          },
          budget: {
            type: "string",
            description: "Budget range in dollars",
          },
        },
        required: ["location", "checkin", "checkout", "budget"],
      },
    },
  },
  {
    type: "function",
    function: {
      function: get_flights,
      parse: JSON.parse,
      description:
        "Get Flights for a given from and to locations on departure/return dates and budget range",
      parameters: {
        type: "object",
        properties: {
          from: {
            type: "string",
            description: "From City and country e.g. Bogotá, Colombia",
          },
          to: {
            type: "string",
            description: "To City and country e.g. Bogotá, Colombia",
          },
          departureDate: {
            type: "string",
            description: "Departure date in dd/mm/yyyy format",
          },
          returnDate: {
            type: "string",
            description: "Return date in dd/mm/yyyy format",
          },
          budget: {
            type: "string",
            description: "Budget range for the hotel in dollars",
          },
        },
        required: ["from", "to", "departureDate", "returnDate", "budget"],
      },
    },
  },
];

export default travelTools;
