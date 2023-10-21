import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';


const FeedbackPage = ({ navigation, dispatch }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Perform submission logic (e.g., send feedback to the server)
    // You can replace this with your actual API call
    if (rating === 0) {
      Alert.alert('Please rate the food', 'Please provide a rating before submitting.');
    } else {
      // Assuming you have a function to submit feedback to the server
    //   submitFeedback({ rating, feedback });
    dispatch({
      type: 'CLEAR_CUSTOMER',
    }); 
    dispatch({
      type: 'CLEAR_CART',
    });
      Alert.alert('Feedback Submitted', 'Thank you for your feedback!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Welcome'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Feedback</Text>
      <Text style={styles.label}>Rate the Food:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handleRatingChange(value)}
            style={[
              styles.ratingButton,
              { backgroundColor: rating >= value ? 'gold' : 'lightgray' },
            ]}
          >
            <Text>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Leave Feedback:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.feedbackInput}
        placeholder="Share your feedback here..."
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ratingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default connect ()(FeedbackPage);
