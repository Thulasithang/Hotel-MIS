import React, { useState } from "react";
import { AppLoading } from "expo";
import { View } from "react-native";
// import * as Font from "expo-font";
import MainContainer from "./navigation/MainContainer.js"; // Make sure the path is correct
import "react-native-gesture-handler";

// Load the Ionicons font
// const fetchFonts = () => {
//   return Font.loadAsync({
//     Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
//   });
// };

const App = () => {
//   const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.error(err)}
  //     />
  //   );
  // }

  return (
    <View style={{ flex: 1 }}>
      <MainContainer />
    </View>
  );
}

export default App;