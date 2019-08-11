import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text>CompleteScreen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
