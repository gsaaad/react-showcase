import React, { useState } from "react";
import axios from "axios";
const FlightAway = () => {
  const [CADflights, setCADFlights] = useState([]);

  async function getCADFlights() {
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
    await axios
      .request(options)
      .then(function (responseBack) {
        if (!responseBack) {
          console.log("There was no response.. Try Again later!");
        }
        const responseData = [responseBack.data.data];
        console.log("response DATA", responseData[0]);
        return responseData[0];
      })
      .then((flightData) => {
        console.log("adding to flights");
        setCADFlights(flightData);
      });
  }

  async function getUSAFlights() {
    // console.log(
    //   typeof process.env.REACT_APP_HOST,
    //   typeof process.env.REACT_APP_KEY
    // );

    const options = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchFlightEverywhereDetails",
      params: {
        origin: "BUF",
        CountryId: "US",
        anytime: "true",
        oneWay: "false",
        currency: "USD",
        countryCode: "US",
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
    try {
      const response = await axios.request(options).then(function (response) {
        console.log(response.data);
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

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
  const handleCADFlights = (e) => {
    e.preventDefault();
    getCADFlights();
  };
  const limitCADFlights = !CADflights
    ? []
    : CADflights.length > 15
    ? CADflights.slice(0, 15)
    : CADflights;

  console.log(limitCADFlights.length, "CAD Flights length");

  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display FlightAway
      </button>
      <div style={componentStyle}>
        <div className="grid">
          <div className="grid grid-cols-1 border-2 border-amber-300 w-11/12 mx-auto rounded-lg my-2">
            <h1 className="text-xl text-white font-bold my-2">
              Click the CAD Button to receive 15 cheap flights from Toronto YYZ
              to potential flights within Canada!
            </h1>
            <button
              className="bg-gradient-to-r from-violet-500 to-sky-400 rounded-lg w-max p-2 mx-auto text-white font-semibold my-6 border-b-2 border-sky-400 drop-shadow-[0_10px_10px_rgba(255,255,255,0.4)] lg:text-4xl "
              onClick={handleCADFlights}
            >
              CAD Flights
            </button>
            <div className="flex text-amber-400 ">
              <p className="basis-1/4 mx-2 lg:text-2xl lg:font-semibold xl:text-3xl">
                Cost
              </p>
              <p className="basis-1/4 mx-2 lg:text-2xl lg:font-semibold xl:text-3xl">
                Departure Date
              </p>
              <p className="basis-1/4 mx-2 lg:text-2xl lg:font-semibold xl:text-3xl">
                Destination
              </p>
              <p className="basis-1/4 mx-2 lg:text-2xl lg:font-semibold xl:text-3xl">
                Days Left
              </p>
            </div>
            {limitCADFlights.map((flight) => {
              const flightDateArray = flight.outboundDepartureDate.split("-");
              const flightDay = flightDateArray[2];
              const flightMonth = flightDateArray[1];
              const flightYear = flightDateArray[0];
              const lastYY = flightYear.slice(2);
              const flightDate = `${flightMonth}/${flightDay}/${flightYear}`;
              const dateFormat = `${flightMonth}/${flightDay}/${lastYY}`;
              const dateOne = new Date(flightDate);
              const dateTwo = new Date(dateToday);
              const diff = dateOne.getTime() - dateTwo.getTime();
              const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

              return (
                <div
                  className="border-b-4 border-sky-400 w-5/6 mx-auto rounded bg-slate-100 my-2 md:p-4 md:rounded-lg"
                  key={flight.title}
                >
                  <p className="flex w-full">
                    <span className="basis-1/4 mx-auto font-semibold  lg:text-2xl xl:text-3xl">
                      ${flight.price}
                    </span>
                    <span className="basis-1/4 mx-auto font-semibold lg:text-2xl  xl:text-3xl">
                      {dateFormat}
                    </span>
                    <span className="basis-1/4 mx-auto font-semibold  lg:text-2xl xl:text-3xl">
                      {flight.title}
                    </span>
                    <span className="basis-1/4 mx-auto font-semibold lg:text-2xl  xl:text-3xl">
                      {daysLeft}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 border-2 border-amber-300 w-5/6 mx-auto rounded-lg my-2">
            <button className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg w-max p-2 mx-auto text-white font-semibold my-2 border-b-2 border-amber-400">
              USA Flights
            </button>
            <div className="flex text-amber-400 ">
              <p className="basis-1/4 mx-2">Cost</p>
              <p className="basis-1/4 mx-2">Departure Date</p>
              <p className="basis-1/4 mx-2">Destination</p>
              <p className="basis-1/4 mx-2">Days Left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightAway;

<button className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg w-max p-2 mx-auto text-white font-semibold my-2 border-b-2 border-amber-400">
  USA Flights
</button>;
