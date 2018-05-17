import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font1}>Font Example 1</Text>
        <Text style={styles.font2}>Font Example 2</Text>
        <Text style={styles.font3}>Font Example 3</Text>
        <Text style={styles.font4}>Font Example 4</Text>
        <Text style={styles.font5}>Font Example 5</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  font1: {
    fontSize: 18,
    margin: 10,
  },
  font2: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'OpenSans',
    fontWeight: '500'
  },
  font3: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'OpenSans',
    fontWeight: '200'
  },
  font4: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'OpenSans-ExtraBold'
  },
  font5: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'OpenSans',
    fontStyle: 'italic'
  },
});
