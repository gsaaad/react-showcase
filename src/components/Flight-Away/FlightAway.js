import React, { useState } from "react";
import axios from "axios";
import FLIGHTS from "../../data.json";
const FlightAway = () => {
  async function getHomeFlights() {
    // console.log(
    //   typeof process.env.REACT_APP_HOST,
    //   typeof process.env.REACT_APP_KEY
    // );

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
    // console.log(options);
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

  getHomeFlights();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateToday = `${month}/${day}/${year}`;

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

  const limitFlights = FLIGHTS.length > 15 ? FLIGHTS.slice(0, 15) : FLIGHTS;

  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display FlightAway
      </button>
      <div style={componentStyle}>
        <div className="grid">
          <div className="grid grid-cols-1 border-2 border-sky-400 w-5/6 mx-auto rounded-lg  my-4 p-2">
            <button className="bg-gradient-to-r from-violet-600 to-sky-400 rounded-lg w-max p-2 mx-auto text-white font-semibold my-2 border-b-2 border-sky-400">
              CAD Flights
            </button>
            {limitFlights.map((flight) => {
              const flightDateArray = flight.outboundDepartureDate.split("-");
              const flightDay = flightDateArray[2];
              const flightMonth = flightDateArray[1];
              const flightYear = flightDateArray[0];
              const flightDate = `${flightMonth}/${flightDay}/${flightYear}`;
              const dateOne = new Date(flightDate);
              const dateTwo = new Date(dateToday);
              const diff = dateOne.getTime() - dateTwo.getTime();
              const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

              return (
                <div
                  className="border-b-2 border-sky-300 w-5/6 mx-auto rounded bg-slate-200"
                  key={flight.title}
                >
                  FLIGHT
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 border-2 border-amber-300 w-5/6 mx-auto rounded-lg ">
            <button className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg w-max p-2 mx-auto text-white font-semibold my-2 border-b-2 border-amber-400">
              USA Flights
            </button>
            <div className="flex text-amber-400 ">
              <p className="basis-1/4 mx-2">Cost</p>
              <p className="basis-1/4 mx-2">Departure Date</p>
              <p className="basis-1/4 mx-2">Destination</p>
              <p className="basis-1/4 mx-2">Days Left</p>
            </div>
            {limitFlights.map((flight) => {
              const flightDateArray = flight.outboundDepartureDate.split("-");
              const flightDay = flightDateArray[2];
              const flightMonth = flightDateArray[1];
              const flightYear = flightDateArray[0];
              const flightDate = `${flightMonth}/${flightDay}/${flightYear}`;
              const dateOne = new Date(flightDate);
              const dateTwo = new Date(dateToday);
              const diff = dateOne.getTime() - dateTwo.getTime();
              const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

              return (
                <div
                  className="border-b-2 border-amber-300 w-5/6 mx-auto rounded bg-slate-200"
                  key={flight.title}
                >
                  <p className="flex w-full">
                    <span className="basis-1/4 mx-auto">${flight.price}</span>
                    <span className="basis-1/4 mx-auto">
                      {flight.outboundDepartureDate}
                    </span>
                    <span className="basis-1/4 mx-auto">{flight.title}</span>
                    <span className="basis-1/4 mx-auto">{daysLeft}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAway;
