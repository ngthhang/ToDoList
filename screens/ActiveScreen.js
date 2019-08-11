import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ActiveScreen(props) {
  return (
    <View style={styles.container}>
          <Text>ActiveScreen</Text>
    </View>
  );
}
ActiveScreen.navigationOptions = {
  title: 'Active ToDo Item',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
