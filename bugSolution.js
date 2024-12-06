```javascript
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const MyComponent = () => {
  const [data, setData] = useState(DATA);
  const [searchQuery, setSearchQuery] = useState('');

  // Use useMemo to optimize the filtering process
  const filteredData = useMemo(() => {
    if (searchQuery === '') {
      return data;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return data.filter((item) => item.toLowerCase().includes(lowercasedQuery));
  }, [data, searchQuery]);

  const renderItem = ({ item }) => (
    <Text>{item}</Text>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View>
      <TextInput value={searchQuery} onChangeText={handleSearch} />
      <FlatList data={filteredData} renderItem={renderItem} keyExtractor={(item) => item} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyComponent;
```