import React from "react";
import { View, Text, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const StaffScreen = () => {
  return (
    <ScrollView>
      {/* Your other components */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#474747",
            marginLeft: 10,
          }}
        >
          WebView Example
        </Text>
        <WebView
          source={{ uri: "http://192.168.1.104:3000" }} // Replace with your desired URL
          style={{ flex: 1 }}
        />
      </View>
      {/* Your other components */}
    </ScrollView>
  );
};

export default StaffScreen;
