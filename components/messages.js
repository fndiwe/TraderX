/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {AreaChart} from './AreaChart';
const {height, width} = Dimensions.get('window');
import {
  VictoryCandlestick,
} from 'victory-native';

export default function Messages({navigation}) {
  const sampleDataDates = [
    {x: new Date(2022, 10, 1), open: 20, close: 10, high: 22, low: 8},
    {x: new Date(2022, 10, 2), open: 11, close: 15, high: 17, low: 9},
    {x: new Date(2022, 10, 3), open: 15, close: 20, high: 22, low: 13},
    {x: new Date(2022, 10, 4), open: 15, close: 10, high: 17, low: 8},
    {x: new Date(2022, 10, 5), open: 18, close: 5, high: 20, low: 3},
    {x: new Date(2022, 10, 6), open: 10, close: 20, high: 15, low: 5},
    {x: new Date(2022, 10, 7), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2022, 10, 8), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2022, 10, 9), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2022, 10, 10), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2022, 10, 11), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2022, 10, 12), open: 10, close: 8, high: 15, low: 5},
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <VictoryCandlestick
        animate
        labelOrientation="right"
        candleColors={{positive: '#5f5c5b', negative: '#e59636'}}
        data={sampleDataDates}
      />
    </View>
  );
}
