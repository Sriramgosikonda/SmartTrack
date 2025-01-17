import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Summary({ expenses }) {
  const summary = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {Object.keys(summary).map((category) => (
        <Text key={category}>
          {category}: ${summary[category].toFixed(2)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
