import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const testData = () => {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('menu/getMenu')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
}

export default testData;