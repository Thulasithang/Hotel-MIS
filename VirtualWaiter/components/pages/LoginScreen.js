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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tables, setTables] = useState([]);

  // useEffect(() => {
  //   // Fetch data using the service
  //   fetchTables()
  //     .then((data) => {
  //       setTables(data); // Update state with fetched data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  // console.log(tables)
  const handleLogin = () => {
    // dispatch({
    //   type: 'SET_TABLE_NO',
    //   payload: tableNo,
    // });
    // Check if the table number and password are valid
    if (tableNo.trim() !== "" && password === "1234") {
      // If valid, navigate to the MainContainer
      navigation.navigate("Welcome");
      dispatch({
        type: "SET_TABLE_NO",
        payload: tableNo,
      });
    } else {
      // Display an error message for invalid login
      setError("Invalid table number or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Table Number"
        value={tableNo}
        onChangeText={(text) => {
          // Restrict input to numeric values only
          if (/^\d*$/.test(text)) {
            setTableNo(text);
          }
        }}
        keyboardType="numeric" // Restrict input to numeric keyboard
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
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
    backgroundColor: "brown",
    borderRadius: 50, // Makes it a circle
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
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

//     <ScrollView>
//       <View style={styles.container}>
//       <FlatGrid
//   itemDimension={130}
//   data={tables}
//   renderItem={({ item }) => (<Text>{item}</Text>)}
// />
// {/* {tables.map((table) => (
//   <View style={styles.tables}>
//   <TouchableOpacity style={styles.title} key={table.id} onPress={handleLogin(table.id)}>
//     <Text>{table.id}</Text>
//   </TouchableOpacity>
//   </View>
// ))} */}
//   </View>
// </ScrollView>
