import React, { useState } from "react";

const AddRoomType = () => {
  const [type, setType] = useState("");
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [maxAdultOccupancy, setMaxAdultOccupancy] = useState("");
  const [maxChildOccupancy, setMaxChildOccupancy] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [description, setDescription] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  const handleOnclick = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        photo1,
        photo2,
        maxAdultOccupancy,
        maxChildOccupancy,
        roomSize,
        description,
        roomPrice,
      }),
    };
    fetch("http://localhost:8080/roomType/add", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <h2>Add Room Type</h2>
      <form>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo 1:</label>
          <input
            type="file"
            name="photo1"
            value={photo1}
            onChange={(e) => setPhoto1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo 2:</label>
          <input
            type="file"
            name="photo2"
            value={photo2}
            onChange={(e) => setPhoto2(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Max Adult Occupancy:</label>
          <input
            name="maxAdultOccupancy"
            value={maxAdultOccupancy}
            onChange={(e) => setMaxAdultOccupancy(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Max Child Occupancy:</label>
          <input
            name="maxChildOccupancy"
            value={maxChildOccupancy}
            onChange={(e) => setMaxChildOccupancy(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Room Size (sqm):</label>
          <input
            type="text"
            name="roomSize"
            value={roomSize}
            onChange={(e) => setRoomSize(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={roomPrice}
            onChange={(e) => setRoomPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <button onClick={handleOnclick}>Add Room Type</button>
        </div>
      </form>
    </div>
  );
};

export default AddRoomType;
