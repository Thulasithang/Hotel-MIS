import React, { useState } from "react";

function RoomTypeForm() {
  const [roomType, setRoomType] = useState({
    type: "",
    maxAdultOccupancy: 0,
    maxChildOccupancy: 0,
    roomSize: 0,
    description: "",
    roomPrice: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomType({ ...roomType, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.8.102:8080/api/v1/app/roomType/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(roomType),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Request successful:", data);
      // Handle the response data here
    } catch (error) {
      console.error("Request failed:", error);
      // Handle any errors here
    }
  };

  return (
    <div>
      <h2>Create Room Type</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={roomType.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Max Adult Occupancy:
          <input
            type="number"
            name="maxAdultOccupancy"
            value={roomType.maxAdultOccupancy}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Max Child Occupancy:
          <input
            type="number"
            name="maxChildOccupancy"
            value={roomType.maxChildOccupancy}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Room Size:
          <input
            type="number"
            name="roomSize"
            value={roomType.roomSize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={roomType.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Room Price:
          <input
            type="number"
            name="roomPrice"
            value={roomType.roomPrice}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RoomTypeForm;
