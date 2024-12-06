```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const MyComponent = () => {
  const [data, setData] = useState(DATA);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // This effect will run after every render because of the empty dependency array
    console.log('Component re-rendered');
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item}</Text>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Inefficient filtering when dealing with large datasets
    const filteredData = data.filter((item) => item.toLowerCase().includes(text.toLowerCase()));
    setData(filteredData);
  };

  return (
    <View>
      <TextInput value={searchQuery} onChangeText={handleSearch} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyComponent; 
```