import React from 'react';
import {VictoryCandlestick} from 'victory-native';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default function CandleChart({navigation}) {
  const sampleDataDates = [
    {x: new Date(2022, 10, 1), open: 15, close: 12, high: 15, low: 10},
    {x: new Date(2022, 10, 2), open: 9, close: 13, high: 15, low: 8},
    {x: new Date(2022, 10, 3), open: 10, close: 14, high: 15, low: 8},
    {x: new Date(2022, 10, 4), open: 13, close: 10, high: 15, low: 8},
    {x: new Date(2022, 10, 5), open: 10, close: 13, high: 13, low: 9},
    {x: new Date(2022, 10, 6), open: 11, close: 14, high: 15, low: 9},
    {x: new Date(2022, 10, 7), open: 10, close: 13, high: 16, low: 9},
    {x: new Date(2022, 10, 8), open: 12, close: 8, high: 15, low: 10},
    {x: new Date(2022, 10, 9), open: 10, close: 12, high: 13, low: 7},
  ];
  return (
    <VictoryCandlestick
      animate
      height={height * 0.35}
      wickStrokeWidth={3}
      labelOrientation="right"
      candleColors={{positive: '#5f5c5b', negative: '#e59636'}}
      data={sampleDataDates}
    />
  );
}
