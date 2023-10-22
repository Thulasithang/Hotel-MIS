import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ipAddress from '../../config';

const TaskCard = ({id, date, time, description, completeBefore, status }) => {
  const [isAccepted, setIsAccepted] = useState(status === 'In Progress');
  const [isCompleted, setIsCompleted] = useState(false);

  const onPressAccept = async () => {
    //console.log(status)
    try {
      const backendURL = `${ipAddress}/api/v1/task/${id}/markProgress`;
      //console.log(backendURL);
      const response = await axios.patch(backendURL);
      if (response.status === 200) {
        console.log('Task marked as in progress');
        setIsAccepted(true);
      } else {
        console.log('Error marking task as in progress');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const onPressComplete = async () => {
    try {
      const backendURL = `${ipAddress}/api/v1/task/${id}/markCompleted`;
      const response = await axios.patch(backendURL);
      if (response.status === 200) {
        setIsCompleted(true);
        console.log('Task marked as in progress');
      } else {
        console.log('Error marking task as in progress');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{new Date(date).toDateString()}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.completeBefore}>Complete Before: {completeBefore}</Text>
        {isCompleted ? (
          <View style={styles.completedBox}>
            <Text style={styles.completedText}>Completed</Text>
          </View>
        ) : isAccepted ? (
          <TouchableOpacity style={styles.acceptedButton} onPress={onPressComplete}>
            <Text style={styles.acceptButtonText}>Complete</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.acceptButton} onPress={onPressAccept}>
            <Text style={styles.acceptButtonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    margin: 16,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontWeight: 'bold',
  },
  time: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  completeBefore: {
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: 'midnightblue',
    borderRadius: 30,
    padding: 10,
    width: 90
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  acceptedButton: {
    backgroundColor: 'forestgreen',
    borderRadius: 30,
    padding: 10,
    width: 90
  },
  completedBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    width: 90
  },
  acceptedText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  completedText: {
    color: 'forestgreen',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default TaskCard;
