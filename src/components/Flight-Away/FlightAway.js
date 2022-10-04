import React, { useState } from "react";
import axios from "axios";
import FLIGHTS from "../../data.json";
const FlightAway = () => {
  async function getHomeFlights() {
    // console.log(
    //   typeof process.env.REACT_APP_HOST,
    //   typeof process.env.REACT_APP_KEY
    // );
    console.log(FLIGHTS);
    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlightEverywhereDetails",
      params: {
        origin: "YYZ",
        CountryId: "CA",
        anytime: "true",
        oneWay: "false",
        currency: "CAD",
        countryCode: "CA",
        market: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_HOST,
      },
    };
    console.log(options);
    // !gets all flights in canada
    // todo retrieve the price, destination name, airport, direct means one way or not, and departureDate
    // try {
    //   const response = await axios.request(options).then(function (response) {
    //     console.log(response.data);
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  console.log("RUN GET CAD FLIGHTS");
  getHomeFlights();

  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display FlightAway
      </button>
      <div style={componentStyle}>
        <div className="grid">
          <div className="grid grid-cols-2 ">
            <button className="bg-gradient-to-r from-violet-600 to-sky-400 rounded-lg w-max p-2 mx-auto text-white font-semibold">
              CAD Flights
            </button>
            <button className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg w-max p-2 mx-auto text-white font-semibold">
              USA Flights
            </button>

            <div>
              <h2 className="text-amber-400 text-md">
                ✈️Loading flights... ✈️
              </h2>
              <div>[flights]</div>
            </div>
            <div>
              <h2 className="text-amber-400 text-md">
                ✈️Loading flights... ✈️
              </h2>
              <div>[flights]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAway;
