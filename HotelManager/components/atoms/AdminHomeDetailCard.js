import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'expo-linear-gradient';

const AdminHomeDetailCard = ({ text1, text2, text3 }) => {
  return (
    <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
          </View>
          <Text style={styles.text3}>{text3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "aliceblue",
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 2,
    margin: 10,
  },
  leftColumn: {
    flex: 1,
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'midnightblue',
  },
  text2: {
    fontSize: 18,
    color: 'midnightblue',
  },
  text3: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'midnightblue',
  },
});

export default AdminHomeDetailCard;
