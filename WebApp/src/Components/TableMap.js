import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "../Styles/tablebooking.css";

import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";
import { Typography } from "@mui/material";

const TableBookingButtonGroup = ({ onBook }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = [
    { id: 1, lable: "P2-1", status: "available" },
    { id: 2, lable: "P2-2", status: "booked" },
    { id: 3, lable: "P2-3", status: "available" },
    { id: 4, lable: "P2-4", status: "available" },
    { id: 5, lable: "P2-5", status: "available" },
    { id: 6, lable: "P2-6", status: "available" },
    { id: 7, lable: "P4-1", status: "available" },
    { id: 8, lable: "P4-2", status: "available" },
    { id: 9, lable: "P4-3", status: "available" },
    { id: 10, lable: "P4-4", status: "booked" },
    { id: 11, lable: "P4-5", status: "available" },
    { id: 12, lable: "P4-6", status: "available" },
    { id: 13, lable: "P4-7", status: "available" },
    { id: 14, lable: "P4-8", status: "available" },
    { id: 15, lable: "P4-9", status: "booked" },
    { id: 16, lable: "P4-10", status: "available" },
    { id: 17, lable: "P6-1", status: "available" },
    { id: 18, lable: "P6-2", status: "available" },
    // ... add more tables with status
  ];

  const handleTableSelection = (table) => {
    if (table.status === "available") {
      setSelectedTable(table.id);
    }
  };

  //   const handleBookClick = () => {
  //     if (selectedTable !== null) {
  //       onBook(selectedTable);
  //       setSelectedTable(null);
  //     }
  //   };

  return (
    <div style={{ margin: "20px 0px 20px 0px" }}>
      <ThemeProvider theme={themeTyp}>
        <Typography variant="NavTyp">2 Persons Tables</Typography>
        <div>
          {tables.slice(0, 6).map((table) => (
            <Button
              key={table.id}
              variant={
                table.status === "booked"
                  ? "secondary"
                  : selectedTable === table.id
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => handleTableSelection(table)}
              disabled={table.status === "booked"}
            >
              {table.lable}
            </Button>
          ))}
        </div>

        <Typography variant="NavTyp">4 Persons Tables</Typography>
        <div>
          {tables.slice(6, 16).map((table) => (
            <Button
              key={table.id}
              variant={
                table.status === "booked"
                  ? "secondary"
                  : selectedTable === table.id
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => handleTableSelection(table)}
              disabled={table.status === "booked"}
            >
              {table.lable}
            </Button>
          ))}
        </div>

        <Typography variant="NavTyp">6 Persons Tables</Typography>
        <div>
          {tables.slice(16, 18).map((table) => (
            <Button
              key={table.id}
              variant={
                table.status === "booked"
                  ? "secondary"
                  : selectedTable === table.id
                  ? "primary"
                  : "outline-primary"
              }
              onClick={() => handleTableSelection(table)}
              disabled={table.status === "booked"}
            >
              {table.lable}
            </Button>
          ))}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default TableBookingButtonGroup;
