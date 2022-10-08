/* eslint-disable prettier/prettier */
import Btc from '../assets/images/btc.svg'
import Eth from '../assets/images/eth.svg'
import Uni from '../assets/images/chain.svg'
import Rip from '../assets/images/xrp.svg'
import Chn from '../assets/images/link.svg'
import Neo from '../assets/images/neo.svg'
import Ach from '../assets/images/act.svg'
import React from 'react'
import { View, Dimensions, Text } from 'react-native'
const {width, height} = Dimensions.get("window")
const customDataPoint = () => {
  return (
    <View
      style={{
        width: width * 0.05,
        height: height * 0.025,
        backgroundColor: '#f2911a',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: 'white',
      }}
    />
  );
};
export const cardData = [
  {
    id: 1,
    backgroundImage: require('../assets/images/bitcoin-bg.png'),
    Logo: Btc,
    name: 'Bitcoin',
    value: '$36,641.20',
    shortCode: 'BTC',
    percentage: '-0.79%',
  },
  {
    id: 2,
    backgroundImage: require('../assets/images/etherum-bg.png'),
    Logo: Eth,
    name: 'Ethereum',
    value: '$28,312.20',
    shortCode: 'ETH',
    percentage: '+1.32%',
  },
];

export const marketTrendData = [
  {
    id: 1,
    name: 'Uniswap',
    Logo: Uni,
    value: '$16,351.57',
    shortCode: 'UNI',
    percentage: '3.7%',
  },
  {
    id: 2,
    name: 'Ripple',
    Logo: Rip,
    value: '$14,563.34',
    shortCode: 'RIP',
    percentage: '2.5%',
  },
  {
    id: 3,
    name: 'Bitcoin',
    Logo: Btc,
    value: '$36,263.13',
    shortCode: 'BTC',
    percentage: '2.4%',
  },
  {
    id: 4,
    name: 'Ethereum',
    Logo: Eth,
    value: '$14,563.34',
    shortCode: 'ETH',
    percentage: '1.71%',
  },
  {
    id: 5,
    name: 'Chainlink',
    Logo: Chn,
    value: '$13,221.67',
    shortCode: 'CHN',
    percentage: '-0.74%',
  },
  {
    id: 6,
    name: 'Neo',
    Logo: Neo,
    value: '$16,563.19',
    shortCode: 'NEO',
    percentage: '2.5%',
  },
  {
    id: 7,
    name: 'Achain',
    Logo: Ach,
    value: '$12,263.12',
    shortCode: 'ACH',
    percentage: '-3.84%',
  },
];

export const Hr24Data = [
  {
    value: 0,
      hideDataPoint: true
  },
  {
    value: 15000,
    hideDataPoint: true,
  },
  {
    value: 2000,
    hideDataPoint: true
  },
  {
    value: 5000,
    hideDataPoint: true,
  },
  {
    value: 3500,
    hideDataPoint: true
  },
  {
    value: 6000,
    customDataPoint: customDataPoint,
    dataPointLabelComponent: () => {
      return (
        <View
          style={{
            backgroundColor: '#f2911a',
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 7,
          }}>
          <Text style={{fontSize: height * 0.023, padding: 2, color: 'white'}}>$46,362.18</Text>
        </View>
      );
    },
    dataPointLabelShiftY: height * -0.06,
    dataPointLabelShiftX: width * -0.08,
  },
  {
    value: 1000,
    hideDataPoint: true,
  },
  {
    value: 5000,
    hideDataPoint: true,
  },
  {
    value: 4000,
    hideDataPoint: true,
  },
  {
    value: 9000,
    hideDataPoint: true,
  },
  {
    value: 0,
    hideDataPoint: true
  },
];