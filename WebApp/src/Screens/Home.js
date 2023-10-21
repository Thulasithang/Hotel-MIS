import React, { useState, useEffect } from "react";
import SearchBox from "../Components/SearchBox";
import Room from "../Components/Room";
import Offer from "../Components/Offer";
import Experiences from "../Components/Experiences";
import Restaurant from "../Components/Restaurant";
import ipaddress from "../config";

export default function Home() {
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    const apiUrl = ipaddress + "/roomType/get";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setRoomTypes(result);
      });
  }, []);
  return (
    <>
      <div id="Home">
        <SearchBox />
      </div>
      <div>
        <Experiences />
      </div>
      <div id="Offers">
        <Offer />
      </div>

      <div id="Rooms">
        {roomTypes.map((roomType) => (
          <Room
            type={roomType.type}
            adult={roomType.maxAdultOccupancy}
            child={roomType.maxChildOccupancy}
            size={roomType.roomSize}
            description={roomType.description}
          />
        ))}
      </div>
      <div id="Restaurant">
        <Restaurant />
      </div>
    </>
  );
}
