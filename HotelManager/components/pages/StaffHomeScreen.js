import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios'; 
import TaskCard from '../atoms/TaskCard';
import ipAddress from '../../config';
import { useRoute } from '@react-navigation/native';


const StaffHomeScreen = () => {
  const route = useRoute();
  const userId = route.params?.userId;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${ipAddress}/api/v1/task/staff/${userId}`)
      .then((response) => {
        const transformedTasks = response.data.map((task) => ({
          id: task.taskId,
          date: new Date(task.date).toISOString().split('T')[0], // Format the date as 'YYYY-MM-DD'
          time: task.startTime,
          description: task.description,
          completeBefore: task.endTime,
          status: task.status,
        }));

        setTasks(transformedTasks);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);



  return (
    <View style={styles.container}>
      {tasks.length === 0 ? ( // Display a message if no tasks are assigned
      <View style={styles.msgContainer}>
        <Text style={styles.message}>You Have No Assigned Tasks For Now !  :)</Text>
      </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskCard
              id={item.id}
              date={item.date}
              time={item.time}
              description={item.description}
              completeBefore={item.completeBefore}
              status={item.status}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'aliceblue'
  },
  message: {
    padding: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'midnightblue'
  },
  msgContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'green'
  },
});

export default StaffHomeScreen;

// const tasks = [
//     {
//       id: 1,
//       date: '2023-10-06',
//       time: '10:00',
//       description: 'Task 1 description',
//       completeBefore: '14:00',
//     },
//     {
//       id: 2,
//       date: '2023-10-07',
//       time: '14:30',
//       description: 'Task 2 description',
//       completeBefore: '18:00',
//     },
//     {
//       id: 3,
//       date: '2023-10-08',
//       time: '16:45',
//       description: 'Task 3 description',
//       completeBefore: '20:30',
//     },
//   ];
