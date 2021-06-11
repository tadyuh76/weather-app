import * as React from 'react';
import { Text, View, StyleSheet,  } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FDF6AA',
    paddingHorizontal: 32,
    paddingVertical: 64
  },
  text: {
    fontSize: 28,
    color: "gray"
  }
});
