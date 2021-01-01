/**
 * Toast
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Toast extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>Toast</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
