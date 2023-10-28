import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { fetchTables } from "../../data/testData";
import { FlatGrid } from "react-native-super-grid";

const LoginScreen = ({ navigation, onLogin, dispatch }) => {
  const [tableNo, setTableNo] = useState("");
  const [tables, setTables] = useState([]);
  console.log("tableNo from login screen part 1: ", tableNo);
  useEffect(() => {
    // Fetch data using the service
    fetchTables()
      .then((data) => {
        setTables(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => {
          // Try again after 5 seconds
          fetchTables()
            .then((data) => {
              setTables(data);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }
        , 5000);
      });
  }, []);
  const handleLogin = () => {
    console.log("tableNo from login screen part 2: ", tableNo)
    navigation.navigate("Welcome");
  };
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Choose the Table Number</Text>
      <FlatGrid
        itemDimension={300}
        data={tables}
        renderItem={({ item }) => (
          <View style = {styles.tables}>
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setTableNo(item.id);
              dispatch({
                type: 'SET_TABLE_NO',
                payload: tableNo,
              });
              handleLogin();
            }}
          >
            <Text style={styles.tableContainer}>{item.id}</Text>
          </TouchableOpacity>
          
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tables: {
    position: "relative",
    backgroundColor: "#060a71",
    borderRadius: 150, // Makes it a circle
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  tableContainer: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "blue",
    width: "80%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default connect()(LoginScreen);
