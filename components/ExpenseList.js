import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.description}</Text>
          <Text>{item.category} - ${item.amount}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1 },
});
