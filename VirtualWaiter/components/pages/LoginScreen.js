import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function LoginScreen({navigation}) {
  const [tableNo, setTableNo] = useState("");
  const password = "1234";
  const [submitted, setSubmitted] = useState(
    {
      tableNum:'',
      PW:''
    }
  );

// const handleChange =()=>{
  
// }

// const handleAuth = () =>{
//     if (tableNo != "" && submittedPassword !=""){
        
//     }
// }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={submitted.tableNum}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={submitted.PW}
        /> 
      </View>  */}
      <TouchableOpacity style={styles.loginBtn} onPress ={() => navigation.navigate("MenuParent")}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});