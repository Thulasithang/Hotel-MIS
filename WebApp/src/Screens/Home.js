import React from "react";
import SearchBox from "../Components/SearchBox";
import Room from "../Components/Room";
import Offer from "../Components/Offer";
import Experiences from "../Components/Experiences";
import Restaurant from "../Components/Restaurant";

export default function Home() {
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
        <Room />
      </div>
      <div id="Restaurant">
        <Restaurant />
      </div>
    </>
  );
}
