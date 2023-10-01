import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Table = ({ data, columns, onConfirm }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.headerRow}>
        {columns.map((column, index) => (
          <Text
            key={index}
            style={[styles.headerCell, { flex: column.flex || 1 }]}
          >
            {column.title}
          </Text>
        ))}
        <Text style={styles.headerCell}></Text>
      </View>

      {/* Render table rows */}
      {data.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {columns.map((column, colIndex) => (
            <Text
              key={colIndex}
              style={[styles.cell, { flex: column.flex || 1 }]}
            >
              {rowData[column.title]}
            </Text>
          ))}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => onConfirm(rowData)}
          >
            <Text style={styles.confirmButtonText}>Info</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    borderRadius: 5,
    padding: 10,
  },
  headerRow: {
    backgroundColor: "#A2A2A2",
    borderRadius: 20,
    flexDirection: "row",
  },
  headerCell: {
    textAlign: "left",
    padding: 10,
    fontSize: 18,
    flex: 1,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#6F91FF",
    borderStyle: "dashed",
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  cell: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  confirmButton: {
    backgroundColor: "#BDCDFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Table;
